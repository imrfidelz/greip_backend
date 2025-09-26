const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const fileupload = require('express-fileupload');
const cookieParser = require('cookie-parser');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const sanitizeHtml = require('sanitize-html');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const cors = require('cors');
const { createServer } = require('http');
const { Server } = require('socket.io');
const socketAuth = require('./middleware/socketAuth');
const notificationService = require('./utils/notificationService');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');

// Load env vars
dotenv.config({ path: './.env' });

// Connect to database
connectDB();

// Route files
const users = require('./routes/users');

const app = express();
const server = createServer(app);

// Enable CORS (allow all origins)
app.set('trust proxy', true);
app.use(cors({
  origin: "*", // allow all origins
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// Setup Socket.io with universal CORS
const io = new Server(server, {
  cors: {
    origin: "*", // allow all origins
    methods: ["GET", "POST"],
    credentials: true
  }
});

// Socket.io authentication middleware
io.use(socketAuth);

// Socket.io connection handling
io.on('connection', (socket) => {
  console.log(`User connected: ${socket.user.name} (${socket.userId})`);
  
  // Join user to their personal room
  socket.join(`user_${socket.userId}`);
  
  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.user.name} (${socket.userId})`);
  });
  
  // Handle marking notifications as read in real-time
  socket.on('markNotificationRead', (notificationId) => {
    socket.to(`user_${socket.userId}`).emit('notificationRead', notificationId);
  });
});

// Set notification service socket.io instance
notificationService.setSocketIO(io);

// Body parser
app.use(express.json({
  verify: (req, res, buf) => {
    req.raw = buf.toString();
  }
}));

// Cookie parser
app.use(cookieParser());

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Middleware for handling File uploading using express-fileupload
app.use(fileupload({
  limits: { fileSize: 104857600 }, // 10MB size limit
  useTempFiles: true,              // Use temporary files for uploads
  tempFileDir: '/tmp/',            // Directory for temporary files
}));

// Sanitize data
app.use(mongoSanitize());

// Set security headers
app.use(helmet());

app.get('/', (req, res) => {
  res.redirect('https://google.com');
});

// Prevent XSS attacks
const sanitizeMiddleware = (req, res, next) => {
  if (req.body) {
    for (const key in req.body) {
      if (typeof req.body[key] === 'string') {
        req.body[key] = sanitizeHtml(req.body[key]);
      }
    }
  }
  next();
};

app.use(sanitizeMiddleware);

// Rate limiting
const limiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: 'Too many requests from this IP, please try again later.',
  keyGenerator: (req) => req.ip,
});

app.use(limiter);

// Prevent HTTP param pollution
app.use(hpp());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Mount routers
app.use('/api/v1/users', users);

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

server.listen(PORT, '0.0.0.0', () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  );
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  server.close(() => {
    process.exit(1);
  });
});
