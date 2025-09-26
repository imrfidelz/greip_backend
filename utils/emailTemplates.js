
const getPasswordResetEmailTemplate = (resetUrl, userName = '') => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset Your Password</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: 'Arial', sans-serif;
            background-color: #f5f5f5;
            line-height: 1.6;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .email-card {
            background: white;
            border-radius: 10px;
            padding: 40px;
            text-align: center;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .logo {
            font-size: 28px;
            font-weight: bold;
            color: #333;
            margin-bottom: 30px;
            font-family: 'Georgia', serif;
        }
        .icon {
            margin: 20px 0;
        }
        .icon svg {
            width: 80px;
            height: 80px;
            stroke: #87CEEB;
            fill: none;
            stroke-width: 1.5;
        }
        .title {
            font-size: 24px;
            color: #333;
            margin: 30px 0 20px 0;
            font-weight: 600;
        }
        .subtitle {
            color: #666;
            font-size: 16px;
            margin-bottom: 30px;
            line-height: 1.5;
        }
        .reset-button {
            background-color: #333;
            color: white;
            padding: 15px 40px;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
            display: inline-block;
            margin: 20px 0;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-size: 14px;
        }
        .reset-button:hover {
            background-color: #555;
        }
        .footer {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #eee;
            color: #999;
            font-size: 14px;
        }
        .social-links {
            margin: 20px 0;
        }
        .social-links a {
            color: #ccc;
            text-decoration: none;
            margin: 0 10px;
            font-size: 18px;
        }
        .contact-info {
            margin-top: 20px;
            font-size: 12px;
        }
        .fallback-link {
            margin-top: 20px;
            font-size: 12px;
            color: #666;
            word-break: break-all;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="email-card">
            <div class="logo">Glimto</div>
            
            <div class="icon">
                <svg viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4"/>
                    <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"/>
                    <path d="M16 8l-6 6-2-2"/>
                </svg>
            </div>
            
            <h1 class="title">Forgot your password?</h1>
            
            <p class="subtitle">
                That's okay, it happens! Click on the button below to reset your password.
                ${userName ? `Hi ${userName}, we'll` : 'We\'ll'} get you back into your account in no time.
            </p>
            
            <a href="${resetUrl}" class="reset-button">Reset Your Password</a>
            
            <div class="fallback-link">
                <p>If the button doesn't work, copy and paste this link into your browser:</p>
                <p style="color: #007bff;">${resetUrl}</p>
            </div>
            
            <div class="footer">
                <div class="social-links">
                    <a href="#">📘</a>
                    <a href="#">🐦</a>
                    <a href="#">📷</a>
                </div>
                
                <div class="contact-info">
                    <p>Problems or questions? Contact us at support@glimto.com</p>
                    <p>© Glimto ${new Date().getFullYear()}</p>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
  `;
};

const getWelcomeEmailTemplate = (userName, userEmail) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Glimto!</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        .header {
            background: linear-gradient(135deg, #2c3e50, #34495e);
            padding: 40px 30px;
            text-align: center;
            color: white;
            position: relative;
        }
        .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.05)"/><circle cx="50" cy="10" r="0.5" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
            opacity: 0.3;
        }
        .logo {
            font-size: 32px;
            font-weight: bold;
            margin-bottom: 10px;
            position: relative;
            z-index: 1;
        }
        .welcome-icon {
            width: 80px;
            height: 80px;
            margin: 20px auto;
            background: rgba(255,255,255,0.2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            z-index: 1;
        }
        .content {
            padding: 40px 30px;
        }
        .greeting {
            font-size: 28px;
            color: #2c3e50;
            margin-bottom: 15px;
            font-weight: 600;
        }
        .message {
            font-size: 16px;
            color: #555;
            line-height: 1.8;
            margin-bottom: 30px;
        }
        .features {
            background: #f8f9fa;
            border-radius: 15px;
            padding: 30px;
            margin: 30px 0;
        }
        .features h3 {
            color: #2c3e50;
            margin-bottom: 20px;
            font-size: 20px;
        }
        .feature-list {
            list-style: none;
        }
        .feature-list li {
            padding: 10px 0;
            display: flex;
            align-items: center;
            color: #555;
        }
        .feature-list li::before {
            content: '✨';
            margin-right: 12px;
            font-size: 18px;
        }
        .cta-section {
            text-align: center;
            margin: 40px 0;
            padding: 30px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            border-radius: 15px;
            color: white;
        }
        .cta-button {
            display: inline-block;
            background: white;
            color: #667eea;
            padding: 15px 35px;
            text-decoration: none;
            border-radius: 50px;
            font-weight: bold;
            font-size: 16px;
            margin-top: 20px;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
        .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.3);
        }
        .tips {
            background: linear-gradient(135deg, #ffeaa7, #fab1a0);
            border-radius: 15px;
            padding: 25px;
            margin: 30px 0;
        }
        .tips h4 {
            color: #2d3436;
            margin-bottom: 15px;
            font-size: 18px;
        }
        .tips p {
            color: #2d3436;
            font-size: 14px;
            line-height: 1.6;
        }
        .footer {
            background: #2c3e50;
            color: white;
            padding: 30px;
            text-align: center;
        }
        .social-links {
            margin: 20px 0;
        }
        .social-links a {
            display: inline-block;
            width: 40px;
            height: 40px;
            background: rgba(255,255,255,0.1);
            border-radius: 50%;
            margin: 0 10px;
            line-height: 40px;
            text-decoration: none;
            color: white;
            transition: all 0.3s ease;
        }
        .social-links a:hover {
            background: rgba(255,255,255,0.2);
            transform: translateY(-2px);
        }
        .contact-info {
            font-size: 14px;
            opacity: 0.8;
            margin-top: 20px;
        }
        @media (max-width: 600px) {
            .container {
                margin: 10px;
                border-radius: 15px;
            }
            .header, .content, .footer {
                padding: 20px;
            }
            .greeting {
                font-size: 24px;
            }
            .features, .cta-section, .tips {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">Glimto</div>
            <div class="welcome-icon">
                🎉
            </div>
        </div>
        
        <div class="content">
            <h1 class="greeting">Welcome, ${userName}! 🎊</h1>
            
            <p class="message">
                We're absolutely thrilled to have you join our community of property enthusiasts! 
                Your journey to discovering amazing properties starts now, and we couldn't be more excited to be part of it.
            </p>
            
            <div class="features">
                <h3>🚀 What You Can Do Now:</h3>
                <ul class="feature-list">
                    <li>Browse thousands of verified properties across different locations</li>
                    <li>Save your favorite properties and lands to your personal collection</li>
                    <li>Connect with trusted agents and property owners</li>
                    <li>Get real-time notifications about price changes and new listings</li>
                    <li>Participate in property auctions and exclusive deals</li>
                    <li>Share and discover properties with our community</li>
                </ul>
            </div>
            
            <div class="cta-section">
                <h3>🏠 Ready to Find Your Dream Property?</h3>
                <p>Start exploring our curated collection of properties tailored just for you!</p>
                <a href="${process.env.FRONTEND_URL}/properties" class="cta-button">Explore Properties Now</a>
            </div>
            
            <div class="tips">
                <h4>💡 Pro Tip:</h4>
                <p>
                    Complete your profile and set up your preferences to get personalized property recommendations. 
                    Don't forget to verify your email and phone number for the best experience!
                </p>
            </div>
            
            <p class="message">
                If you have any questions or need assistance getting started, our support team is here to help. 
                Simply reply to this email or contact us through the app.
            </p>
            
            <p style="color: #2c3e50; font-weight: 600; margin-top: 30px;">
                Welcome to the Glimto family! 🏡✨
            </p>
        </div>
        
        <div class="footer">
            <div class="social-links">
                <a href="#" title="Facebook">📘</a>
                <a href="#" title="Twitter">🐦</a>
                <a href="#" title="Instagram">📷</a>
                <a href="#" title="LinkedIn">💼</a>
            </div>
            
            <div class="contact-info">
                <p><strong>Need Help?</strong></p>
                <p>📧 support@glimto.com | 📞 +1 (555) 123-4567</p>
                <p style="margin-top: 15px; opacity: 0.6;">
                    © ${new Date().getFullYear()} Glimto. All rights reserved.
                </p>
                <p style="font-size: 12px; margin-top: 10px; opacity: 0.6;">
                    You're receiving this email because you signed up for Glimto with ${userEmail}
                </p>
            </div>
        </div>
    </div>
</body>
</html>
  `;
};

// Payment confirmation template for buyers
const getPaymentSuccessTemplate = (data) => {
  const { 
    userName, 
    paymentType, 
    assetType, 
    assetTitle, 
    amount, 
    currencyCode, 
    orderNumber, 
    paymentReference,
    assetLocation,
    nextSteps 
  } = data;

  const paymentTypeText = {
    'retainer': 'Retainer Fee Payment',
    'balance': 'Balance Payment',
    'auction': 'Auction Takeover Payment'
  };

  const assetTypeText = {
    'property': 'Property',
    'land': 'Land'
  };

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Payment Confirmed - ${paymentTypeText[paymentType]}</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: 'Arial', sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background: #ffffff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          margin-top: 40px;
          margin-bottom: 40px;
        }
        .header {
          background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
          padding: 40px 30px;
          text-align: center;
          color: white;
        }
        .header h1 {
          margin: 0;
          font-size: 28px;
          font-weight: 700;
          letter-spacing: 1px;
        }
        .header p {
          margin: 10px 0 0;
          font-size: 16px;
          opacity: 0.9;
        }
        .content {
          padding: 40px 30px;
        }
        .greeting {
          font-size: 24px;
          color: #333;
          margin-bottom: 20px;
          font-weight: 600;
          text-align: center;
        }
        .payment-details {
          background: #f8f9fa;
          border-radius: 15px;
          padding: 30px;
          margin: 30px 0;
          border-left: 5px solid #28a745;
        }
        .detail-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
          padding-bottom: 15px;
          border-bottom: 1px solid #e9ecef;
        }
        .detail-row:last-child {
          margin-bottom: 0;
          border-bottom: none;
        }
        .detail-label {
          font-weight: 600;
          color: #495057;
          font-size: 14px;
        }
        .detail-value {
          font-weight: 700;
          color: #333;
          font-size: 16px;
        }
        .amount {
          font-size: 24px;
          color: #28a745;
        }
        .asset-info {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          border-radius: 15px;
          padding: 25px;
          margin: 25px 0;
          text-align: center;
        }
        .asset-title {
          font-size: 20px;
          font-weight: 700;
          color: #333;
          margin-bottom: 10px;
        }
        .asset-location {
          color: #666;
          font-size: 14px;
        }
        .next-steps {
          background: #fff3cd;
          border-radius: 10px;
          padding: 20px;
          margin: 25px 0;
          border-left: 4px solid #ffc107;
        }
        .next-steps h3 {
          margin: 0 0 15px;
          color: #856404;
          font-size: 18px;
        }
        .next-steps ul {
          margin: 0;
          padding-left: 20px;
          color: #856404;
        }
        .next-steps li {
          margin-bottom: 8px;
          line-height: 1.5;
        }
        .cta-button {
          display: inline-block;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white !important;
          text-decoration: none;
          padding: 15px 40px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 16px;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
          margin: 20px 10px;
        }
        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
        }
        .footer {
          background: #f8f9fa;
          padding: 30px;
          text-align: center;
          border-top: 1px solid #eee;
        }
        .footer p {
          margin: 0;
          color: #888;
          font-size: 14px;
        }
        .footer a {
          color: #667eea;
          text-decoration: none;
        }
        .icon {
          background: rgba(255,255,255,0.2);
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          font-size: 40px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="icon">✅</div>
          <h1>Payment Confirmed!</h1>
          <p>${paymentTypeText[paymentType]} Successful</p>
        </div>
        
        <div class="content">
          <div class="greeting">Thank you, ${userName}!</div>
          
          <div class="payment-details">
            <div class="detail-row">
              <span class="detail-label">Payment Type</span>
              <span class="detail-value">${paymentTypeText[paymentType]}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Amount Paid</span>
              <span class="detail-value amount">${currencyCode} ${amount.toLocaleString()}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Order Number</span>
              <span class="detail-value">#${orderNumber}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Payment Reference</span>
              <span class="detail-value">${paymentReference}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Transaction Date</span>
              <span class="detail-value">${new Date().toLocaleDateString()}</span>
            </div>
          </div>

          <div class="asset-info">
            <div class="asset-title">${assetTypeText[assetType]}: ${assetTitle}</div>
            <div class="asset-location">📍 ${assetLocation}</div>
          </div>

          ${nextSteps ? `
          <div class="next-steps">
            <h3>📋 What happens next?</h3>
            <ul>
              ${nextSteps.map(step => `<li>${step}</li>`).join('')}
            </ul>
          </div>
          ` : ''}

          <div style="text-align: center; margin: 30px 0;">
            <a href="${process.env.FRONTEND_URL}/my-orders" class="cta-button">View My Orders</a>
            <a href="${process.env.FRONTEND_URL}/properties" class="cta-button">Browse More</a>
          </div>
        </div>
        
        <div class="footer">
          <p>
            Questions about your payment? Contact our support team at 
            <a href="mailto:support@glimto.com">support@glimto.com</a>
          </p>
          <p style="margin-top: 10px;">
            © 2024 Glimto. All rights reserved.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Payment notification template for asset owners
const getPaymentNotificationTemplate = (data) => {
  const { 
    ownerName, 
    buyerName,
    paymentType, 
    assetType, 
    assetTitle, 
    amount, 
    currencyCode, 
    orderNumber, 
    paymentReference,
    assetLocation,
    buyerEmail
  } = data;

  const paymentTypeText = {
    'retainer': 'Retainer Fee Payment',
    'balance': 'Balance Payment',
    'auction': 'Auction Takeover Payment'
  };

  const assetTypeText = {
    'property': 'Property',
    'land': 'Land'
  };

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Payment Received - ${paymentTypeText[paymentType]}</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: 'Arial', sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background: #ffffff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          margin-top: 40px;
          margin-bottom: 40px;
        }
        .header {
          background: linear-gradient(135deg, #17a2b8 0%, #138496 100%);
          padding: 40px 30px;
          text-align: center;
          color: white;
        }
        .header h1 {
          margin: 0;
          font-size: 28px;
          font-weight: 700;
          letter-spacing: 1px;
        }
        .header p {
          margin: 10px 0 0;
          font-size: 16px;
          opacity: 0.9;
        }
        .content {
          padding: 40px 30px;
        }
        .greeting {
          font-size: 24px;
          color: #333;
          margin-bottom: 20px;
          font-weight: 600;
          text-align: center;
        }
        .payment-details {
          background: #f8f9fa;
          border-radius: 15px;
          padding: 30px;
          margin: 30px 0;
          border-left: 5px solid #17a2b8;
        }
        .detail-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
          padding-bottom: 15px;
          border-bottom: 1px solid #e9ecef;
        }
        .detail-row:last-child {
          margin-bottom: 0;
          border-bottom: none;
        }
        .detail-label {
          font-weight: 600;
          color: #495057;
          font-size: 14px;
        }
        .detail-value {
          font-weight: 700;
          color: #333;
          font-size: 16px;
        }
        .amount {
          font-size: 24px;
          color: #17a2b8;
        }
        .asset-info {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          border-radius: 15px;
          padding: 25px;
          margin: 25px 0;
          text-align: center;
        }
        .asset-title {
          font-size: 20px;
          font-weight: 700;
          color: #333;
          margin-bottom: 10px;
        }
        .asset-location {
          color: #666;
          font-size: 14px;
        }
        .buyer-info {
          background: #d1ecf1;
          border-radius: 10px;
          padding: 20px;
          margin: 25px 0;
          border-left: 4px solid #17a2b8;
        }
        .buyer-info h3 {
          margin: 0 0 15px;
          color: #0c5460;
          font-size: 18px;
        }
        .buyer-detail {
          color: #0c5460;
          margin-bottom: 8px;
          line-height: 1.5;
        }
        .cta-button {
          display: inline-block;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white !important;
          text-decoration: none;
          padding: 15px 40px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 16px;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
          margin: 20px 10px;
        }
        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
        }
        .footer {
          background: #f8f9fa;
          padding: 30px;
          text-align: center;
          border-top: 1px solid #eee;
        }
        .footer p {
          margin: 0;
          color: #888;
          font-size: 14px;
        }
        .footer a {
          color: #667eea;
          text-decoration: none;
        }
        .icon {
          background: rgba(255,255,255,0.2);
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          font-size: 40px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="icon">💰</div>
          <h1>Payment Received!</h1>
          <p>${paymentTypeText[paymentType]} from Buyer</p>
        </div>
        
        <div class="content">
          <div class="greeting">Hello ${ownerName}!</div>
          
          <p style="text-align: center; color: #666; font-size: 16px; margin-bottom: 30px;">
            Great news! You've received a payment for your ${assetTypeText[assetType].toLowerCase()}.
          </p>

          <div class="payment-details">
            <div class="detail-row">
              <span class="detail-label">Payment Type</span>
              <span class="detail-value">${paymentTypeText[paymentType]}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Amount Received</span>
              <span class="detail-value amount">${currencyCode} ${amount.toLocaleString()}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Order Number</span>
              <span class="detail-value">#${orderNumber}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Payment Reference</span>
              <span class="detail-value">${paymentReference}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Transaction Date</span>
              <span class="detail-value">${new Date().toLocaleDateString()}</span>
            </div>
          </div>

          <div class="asset-info">
            <div class="asset-title">${assetTypeText[assetType]}: ${assetTitle}</div>
            <div class="asset-location">📍 ${assetLocation}</div>
          </div>

          <div class="buyer-info">
            <h3>👤 Buyer Information</h3>
            <div class="buyer-detail"><strong>Name:</strong> ${buyerName}</div>
            <div class="buyer-detail"><strong>Email:</strong> ${buyerEmail}</div>
          </div>

          <div style="text-align: center; margin: 30px 0;">
            <a href="${process.env.FRONTEND_URL}/orders" class="cta-button">View Order Details</a>
            <a href="${process.env.FRONTEND_URL}/dashboard" class="cta-button">Go to Dashboard</a>
          </div>
        </div>
        
        <div class="footer">
          <p>
            Questions about this transaction? Contact our support team at 
            <a href="mailto:support@glimto.com">support@glimto.com</a>
          </p>
          <p style="margin-top: 10px;">
            © 2024 Glimto. All rights reserved.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Admin payment notification template
const getAdminPaymentNotificationTemplate = (data) => {
  const { 
    paymentType, 
    assetType, 
    assetTitle, 
    assetLocation,
    buyerName, 
    buyerEmail, 
    ownerName, 
    ownerEmail,
    amount, 
    currencyCode, 
    orderNumber, 
    paymentReference,
    orderStatus,
    paymentDate,
    outstandingBalance,
    originalPrice
  } = data;

  const paymentTypeText = {
    'retainer': 'Retainer Fee Payment',
    'balance': 'Balance Payment',
    'auction': 'Auction Takeover Payment'
  };

  const assetTypeText = {
    'property': 'Property',
    'land': 'Land'
  };

  const getStatusColor = (status) => {
    const statusColors = {
      'retained': '#28a745',
      'completed': '#007bff', 
      'in_progress': '#ffc107',
      'auction pending': '#dc3545',
      'pending': '#6c757d'
    };
    return statusColors[status] || '#6c757d';
  };

  const getPaymentProgress = () => {
    if (paymentType === 'retainer') {
      return Math.round((amount / originalPrice) * 100);
    } else if (paymentType === 'balance') {
      return Math.round(((originalPrice - outstandingBalance) / originalPrice) * 100);
    }
    return 0;
  };

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>[ADMIN] Payment Notification - ${paymentTypeText[paymentType]}</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
          min-height: 100vh;
        }
        .container {
          max-width: 700px;
          margin: 0 auto;
          background: #ffffff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          margin-top: 20px;
          margin-bottom: 20px;
        }
        .header {
          background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);
          padding: 30px;
          text-align: center;
          color: white;
          position: relative;
        }
        .admin-badge {
          background: rgba(255,255,255,0.2);
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: bold;
          letter-spacing: 1px;
          margin-bottom: 15px;
          display: inline-block;
        }
        .header h1 {
          margin: 0;
          font-size: 24px;
          font-weight: 700;
          line-height: 1.3;
        }
        .header p {
          margin: 8px 0 0;
          font-size: 14px;
          opacity: 0.9;
        }
        .content {
          padding: 30px;
        }
        .alert-box {
          background: linear-gradient(135deg, #ff6b6b, #ee5a24);
          color: white;
          padding: 20px;
          border-radius: 12px;
          margin-bottom: 25px;
          text-align: center;
        }
        .alert-box h2 {
          margin: 0 0 8px 0;
          font-size: 20px;
          font-weight: 600;
        }
        .alert-box p {
          margin: 0;
          font-size: 14px;
          opacity: 0.95;
        }
        .transaction-summary {
          background: #f8f9fa;
          border-radius: 15px;
          padding: 25px;
          margin-bottom: 25px;
          border-left: 5px solid #007bff;
        }
        .transaction-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 0;
          border-bottom: 1px solid #e9ecef;
        }
        .transaction-row:last-child {
          border-bottom: none;
          font-weight: bold;
          font-size: 16px;
          color: #007bff;
        }
        .transaction-label {
          color: #6c757d;
          font-weight: 500;
        }
        .transaction-value {
          color: #333;
          font-weight: 600;
        }
        .asset-details {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          border-radius: 15px;
          padding: 25px;
          margin-bottom: 25px;
        }
        .asset-details h3 {
          margin: 0 0 15px 0;
          font-size: 18px;
          font-weight: 600;
        }
        .asset-info {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          margin-top: 15px;
        }
        .asset-info-item {
          opacity: 0.9;
        }
        .asset-info-label {
          font-size: 12px;
          opacity: 0.8;
          margin-bottom: 4px;
        }
        .asset-info-value {
          font-weight: 600;
        }
        .parties-involved {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 25px;
        }
        .party-card {
          background: #ffffff;
          border: 2px solid #e9ecef;
          border-radius: 12px;
          padding: 20px;
          text-align: center;
        }
        .party-card.buyer {
          border-color: #28a745;
        }
        .party-card.owner {
          border-color: #17a2b8;
        }
        .party-role {
          font-size: 12px;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 8px;
        }
        .party-card.buyer .party-role {
          color: #28a745;
        }
        .party-card.owner .party-role {
          color: #17a2b8;
        }
        .party-name {
          font-size: 16px;
          font-weight: 600;
          color: #333;
          margin-bottom: 4px;
        }
        .party-email {
          font-size: 14px;
          color: #6c757d;
        }
        .status-section {
          background: #ffffff;
          border: 2px solid ${getStatusColor(orderStatus)};
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 25px;
          text-align: center;
        }
        .status-badge {
          background: ${getStatusColor(orderStatus)};
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: bold;
          display: inline-block;
          margin-bottom: 10px;
        }
        .progress-bar {
          background: #e9ecef;
          border-radius: 10px;
          height: 20px;
          overflow: hidden;
          margin: 15px 0;
        }
        .progress-fill {
          background: linear-gradient(90deg, #28a745, #20c997);
          height: 100%;
          border-radius: 10px;
          width: ${getPaymentProgress()}%;
          transition: width 0.3s ease;
          position: relative;
        }
        .progress-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-weight: bold;
          font-size: 12px;
        }
        .action-required {
          background: linear-gradient(135deg, #ffc107, #fd7e14);
          color: #333;
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 25px;
          text-align: center;
        }
        .action-required h4 {
          margin: 0 0 10px 0;
          font-size: 16px;
          font-weight: 600;
        }
        .action-button {
          display: inline-block;
          background: #333;
          color: white;
          padding: 12px 24px;
          text-decoration: none;
          border-radius: 25px;
          font-weight: bold;
          font-size: 14px;
          margin: 10px 5px;
          transition: all 0.3s ease;
        }
        .action-button:hover {
          background: #555;
          transform: translateY(-2px);
        }
        .footer {
          background: #2c3e50;
          color: white;
          padding: 25px;
          text-align: center;
        }
        .timestamp {
          font-size: 12px;
          color: #95a5a6;
          margin-bottom: 15px;
        }
        .footer-links {
          margin: 15px 0;
        }
        .footer-links a {
          color: #87CEEB;
          text-decoration: none;
          margin: 0 10px;
          font-size: 14px;
        }
        @media (max-width: 600px) {
          .container {
            margin: 10px;
            border-radius: 15px;
          }
          .parties-involved {
            grid-template-columns: 1fr;
          }
          .asset-info {
            grid-template-columns: 1fr;
          }
          .action-button {
            display: block;
            margin: 10px 0;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="admin-badge">🛡️ ADMIN NOTIFICATION</div>
          <h1>New ${paymentTypeText[paymentType]} Received</h1>
          <p>Order #${orderNumber} • ${paymentDate}</p>
        </div>
        
        <div class="content">
          <div class="alert-box">
            <h2>💰 Payment Alert</h2>
            <p>A new ${paymentTypeText[paymentType].toLowerCase()} of ${currencyCode} ${amount.toLocaleString()} has been processed successfully.</p>
          </div>

          <div class="transaction-summary">
            <h3 style="margin-top: 0; color: #333;">📋 Transaction Summary</h3>
            <div class="transaction-row">
              <span class="transaction-label">Order Number:</span>
              <span class="transaction-value">#${orderNumber}</span>
            </div>
            <div class="transaction-row">
              <span class="transaction-label">Payment Type:</span>
              <span class="transaction-value">${paymentTypeText[paymentType]}</span>
            </div>
            <div class="transaction-row">
              <span class="transaction-label">Payment Reference:</span>
              <span class="transaction-value">${paymentReference}</span>
            </div>
            <div class="transaction-row">
              <span class="transaction-label">Amount Paid:</span>
              <span class="transaction-value">${currencyCode} ${amount.toLocaleString()}</span>
            </div>
            ${outstandingBalance > 0 ? `
            <div class="transaction-row">
              <span class="transaction-label">Outstanding Balance:</span>
              <span class="transaction-value">${currencyCode} ${outstandingBalance.toLocaleString()}</span>
            </div>
            ` : ''}
            <div class="transaction-row">
              <span class="transaction-label">Total Transaction Value:</span>
              <span class="transaction-value">${currencyCode} ${originalPrice.toLocaleString()}</span>
            </div>
          </div>

          <div class="asset-details">
            <h3>🏠 ${assetTypeText[assetType]} Details</h3>
            <p style="margin: 0; font-size: 16px; font-weight: 600;">${assetTitle}</p>
            <div class="asset-info">
              <div class="asset-info-item">
                <div class="asset-info-label">Asset Type</div>
                <div class="asset-info-value">${assetTypeText[assetType]}</div>
              </div>
              <div class="asset-info-item">
                <div class="asset-info-label">Location</div>
                <div class="asset-info-value">${assetLocation}</div>
              </div>
            </div>
          </div>

          <div class="parties-involved">
            <div class="party-card buyer">
              <div class="party-role">👤 Buyer</div>
              <div class="party-name">${buyerName}</div>
              <div class="party-email">${buyerEmail}</div>
            </div>
            <div class="party-card owner">
              <div class="party-role">🏠 Owner</div>
              <div class="party-name">${ownerName}</div>
              <div class="party-email">${ownerEmail}</div>
            </div>
          </div>

          <div class="status-section">
            <div class="status-badge">${orderStatus.toUpperCase()}</div>
            <p style="margin: 10px 0; color: #666;">Current Order Status</p>
            <div class="progress-bar">
              <div class="progress-fill">
                <div class="progress-text">${getPaymentProgress()}%</div>
              </div>
            </div>
            <p style="margin: 10px 0 0; font-size: 14px; color: #666;">Payment Progress</p>
          </div>

          ${paymentType === 'retainer' ? `
          <div class="action-required">
            <h4>⚠️ Next Steps Required</h4>
            <p>The buyer has paid the retainer fee. Monitor for balance payment completion.</p>
          </div>
          ` : paymentType === 'balance' && orderStatus === 'completed' ? `
          <div class="action-required">
            <h4>✅ Transaction Complete</h4>
            <p>This order is now fully paid. Prepare property transfer documentation.</p>
          </div>
          ` : paymentType === 'auction' ? `
          <div class="action-required">
            <h4>🎯 Auction Alert</h4>
            <p>An auction takeover payment has been made. Review and close the auction.</p>
          </div>
          ` : ''}

          <div style="text-align: center; margin: 30px 0;">
            <a href="${process.env.FRONTEND_URL}/admin/orders" class="action-button">
              📊 View Order Details
            </a>
            <a href="${process.env.FRONTEND_URL}/admin/dashboard" class="action-button">
              🏠 Admin Dashboard
            </a>
          </div>
        </div>
        
        <div class="footer">
          <div class="timestamp">
            Generated on ${paymentDate} | System Alert
          </div>
          <div class="footer-links">
            <a href="${process.env.FRONTEND_URL}/admin">Admin Panel</a>
            <a href="${process.env.FRONTEND_URL}/admin/orders">Order Management</a>
            <a href="${process.env.FRONTEND_URL}/admin/users">User Management</a>
          </div>
          <p style="margin: 15px 0 0; font-size: 12px; opacity: 0.7;">
            © ${new Date().getFullYear()} Glimto Admin System. Confidential Information.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Auction cancellation template for auction creator
const getAuctionCancelledTemplate = (data) => {
  const { 
    userName, 
    auctionId,
    orderNumber,
    assetType, 
    assetTitle, 
    assetLocation,
    refundAmount,
    originalPrice,
    currencyCode,
    cancelledAt
  } = data;

  const assetTypeText = assetType === 'property' ? 'Property' : 'Land';

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Auction Cancelled - Refund Processed</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: 'Arial', sans-serif;
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          min-height: 100vh;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background: #ffffff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          margin-top: 40px;
          margin-bottom: 40px;
        }
        .header {
          background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
          padding: 40px 30px;
          text-align: center;
          color: white;
          position: relative;
        }
        .header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23dots)"/></svg>');
        }
        .header h1 {
          margin: 0;
          font-size: 28px;
          font-weight: 700;
          letter-spacing: 1px;
          position: relative;
          z-index: 1;
        }
        .header .icon {
          font-size: 60px;
          margin: 20px 0;
          position: relative;
          z-index: 1;
        }
        .content {
          padding: 40px 30px;
        }
        .greeting {
          font-size: 24px;
          color: #333;
          margin-bottom: 20px;
          font-weight: 600;
          text-align: center;
        }
        .message {
          font-size: 16px;
          color: #555;
          line-height: 1.6;
          margin-bottom: 30px;
          text-align: center;
        }
        .details-card {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          border-radius: 15px;
          padding: 30px;
          margin: 30px 0;
          border-left: 5px solid #ff6b6b;
        }
        .details-card h3 {
          color: #333;
          margin-bottom: 20px;
          font-size: 20px;
          display: flex;
          align-items: center;
        }
        .details-card h3::before {
          content: '🏠';
          margin-right: 10px;
          font-size: 24px;
        }
        .detail-row {
          display: flex;
          justify-content: space-between;
          padding: 12px 0;
          border-bottom: 1px solid rgba(0,0,0,0.1);
        }
        .detail-row:last-child {
          border-bottom: none;
        }
        .detail-label {
          font-weight: 600;
          color: #666;
        }
        .detail-value {
          color: #333;
          font-weight: 500;
        }
        .refund-section {
          background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
          border-radius: 15px;
          padding: 25px;
          margin: 30px 0;
          text-align: center;
          border: 2px solid #28a745;
        }
        .refund-section h4 {
          color: #155724;
          margin-bottom: 15px;
          font-size: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .refund-section h4::before {
          content: '💰';
          margin-right: 10px;
          font-size: 24px;
        }
        .refund-amount {
          font-size: 32px;
          font-weight: bold;
          color: #28a745;
          margin: 10px 0;
        }
        .refund-note {
          color: #155724;
          font-size: 14px;
          font-style: italic;
        }
        .info-box {
          background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
          border-radius: 15px;
          padding: 25px;
          margin: 30px 0;
          border-left: 5px solid #ffc107;
        }
        .info-box h4 {
          color: #856404;
          margin-bottom: 15px;
          font-size: 18px;
          display: flex;
          align-items: center;
        }
        .info-box h4::before {
          content: 'ℹ️';
          margin-right: 10px;
          font-size: 20px;
        }
        .info-box p {
          color: #856404;
          font-size: 14px;
          line-height: 1.6;
          margin: 0;
        }
        .cta-section {
          text-align: center;
          margin: 40px 0;
          padding: 30px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 15px;
          color: white;
        }
        .cta-button {
          display: inline-block;
          background: white;
          color: #667eea;
          padding: 15px 35px;
          text-decoration: none;
          border-radius: 50px;
          font-weight: bold;
          font-size: 16px;
          margin-top: 20px;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.3);
        }
        .footer {
          background: #2c3e50;
          color: white;
          padding: 30px;
          text-align: center;
        }
        .social-links {
          margin: 20px 0;
        }
        .social-links a {
          display: inline-block;
          width: 40px;
          height: 40px;
          background: rgba(255,255,255,0.1);
          border-radius: 50%;
          margin: 0 10px;
          line-height: 40px;
          text-decoration: none;
          color: white;
          transition: all 0.3s ease;
        }
        .social-links a:hover {
          background: rgba(255,255,255,0.2);
          transform: translateY(-2px);
        }
        .contact-info {
          font-size: 14px;
          opacity: 0.8;
          margin-top: 20px;
        }
        @media (max-width: 600px) {
          .container {
            margin: 10px;
            border-radius: 15px;
          }
          .header, .content, .footer {
            padding: 20px;
          }
          .greeting {
            font-size: 20px;
          }
          .details-card, .refund-section, .info-box, .cta-section {
            padding: 20px;
          }
          .detail-row {
            flex-direction: column;
            align-items: flex-start;
          }
          .detail-value {
            margin-top: 5px;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="icon">🚫</div>
          <h1>Auction Cancelled</h1>
          <p>Your auction has been cancelled and refund processed</p>
        </div>
        
        <div class="content">
          <h2 class="greeting">Hello ${userName},</h2>
          
          <p class="message">
            We're writing to inform you that your auction has been cancelled. 
            Don't worry - your refund has been processed and the ${assetTypeText.toLowerCase()} is now available again.
          </p>
          
          <div class="details-card">
            <h3>Auction Details</h3>
            <div class="detail-row">
              <span class="detail-label">Order Number:</span>
              <span class="detail-value">${orderNumber}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Asset Type:</span>
              <span class="detail-value">${assetTypeText}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Asset Title:</span>
              <span class="detail-value">${assetTitle}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Location:</span>
              <span class="detail-value">${assetLocation}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Original Price:</span>
              <span class="detail-value">${currencyCode} ${originalPrice?.toLocaleString()}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Cancelled On:</span>
              <span class="detail-value">${cancelledAt}</span>
            </div>
          </div>
          
          <div class="refund-section">
            <h4>Refund Processed</h4>
            <div class="refund-amount">${currencyCode} ${refundAmount?.toLocaleString()}</div>
            <p class="refund-note">
              Your refund has been processed and will reflect in your account within 3-5 business days, 
              depending on your payment method.
            </p>
          </div>
          
          <div class="info-box">
            <h4>What Happens Next?</h4>
            <p>
              The ${assetTypeText.toLowerCase()} is now available again and can be purchased by other users. 
              You're welcome to browse other available properties and lands on our platform. 
              If you have any questions about the cancellation or refund, please don't hesitate to contact our support team.
            </p>
          </div>
          
          <div class="cta-section">
            <h3>🏠 Continue Exploring</h3>
            <p>Discover more amazing properties and lands on Glimto!</p>
            <a href="${process.env.FRONTEND_URL}/properties" class="cta-button">Browse Properties</a>
          </div>
          
          <p class="message">
            Thank you for using Glimto. We appreciate your understanding and look forward to serving you again.
          </p>
        </div>
        
        <div class="footer">
          <div class="social-links">
            <a href="#" title="Facebook">📘</a>
            <a href="#" title="Twitter">🐦</a>
            <a href="#" title="Instagram">📷</a>
            <a href="#" title="LinkedIn">💼</a>
          </div>
          
          <div class="contact-info">
            <p><strong>Need Help?</strong></p>
            <p>📧 support@glimto.com | 📞 +1 (555) 123-4567</p>
            <p style="margin-top: 15px; opacity: 0.6;">
              © ${new Date().getFullYear()} Glimto. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Get buyer payment confirmation template  
const getBuyerPaymentConfirmationTemplate = (data) => {
  return getPaymentSuccessTemplate(data);
};

// Get owner payment notification template
const getOwnerPaymentNotificationTemplate = (data) => {
  return getPaymentNotificationTemplate(data);
};

// Get order confirmation template
const getOrderConfirmationTemplate = (data) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Order Confirmation</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #28a745 0%, #20c997 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .order-details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
            .button { display: inline-block; background: #28a745; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
            .footer { text-align: center; margin-top: 20px; color: #666; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>✅ Order Confirmed!</h1>
            </div>
            <div class="content">
                <h2>Thank you, ${data.name}!</h2>
                <p>Your order has been successfully confirmed. Here are the details:</p>
                
                <div class="order-details">
                    <h3>Order Information</h3>
                    <p><strong>Order ID:</strong> #${data.orderId}</p>
                    <p><strong>Property:</strong> ${data.propertyTitle || 'Property Details'}</p>
                    <p><strong>Amount:</strong> ${data.amount || 'N/A'}</p>
                    <p><strong>Status:</strong> ${data.status || 'Confirmed'}</p>
                    <p><strong>Order Date:</strong> ${new Date().toLocaleDateString()}</p>
                </div>
                
                <p>We'll keep you updated on the progress of your order. You can track your order status in your dashboard.</p>
                
                <a href="${process.env.CLIENT_URL || 'https://app.example.com'}/dashboard/orders" class="button">View Order Details</a>
                
                <p>Thank you for choosing Estate App!</p>
            </div>
            <div class="footer">
                <p>&copy; 2024 Estate App. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>
  `;
};

// Get property update template
const getPropertyUpdateTemplate = (data) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Property Update</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #ffc107 0%, #fd7e14 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .update-details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
            .button { display: inline-block; background: #ffc107; color: #212529; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
            .footer { text-align: center; margin-top: 20px; color: #666; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🏠 Property Update</h1>
            </div>
            <div class="content">
                <h2>Hello ${data.name}!</h2>
                <p>There's been an update to a property you're interested in:</p>
                
                <div class="update-details">
                    <h3>Property Information</h3>
                    <p><strong>Property:</strong> ${data.propertyTitle || 'Property Details'}</p>
                    <p><strong>Update Type:</strong> ${data.updateType || 'General Update'}</p>
                    <p><strong>Details:</strong> ${data.updateDetails || 'Property information has been updated.'}</p>
                    <p><strong>Updated:</strong> ${new Date().toLocaleDateString()}</p>
                </div>
                
                <p>Don't miss out on this opportunity! Check out the updated property details.</p>
                
                <a href="${process.env.CLIENT_URL || 'https://app.example.com'}/properties/${data.propertyId || ''}" class="button">View Property</a>
                
                <p>Stay updated with the latest property information on Estate App.</p>
            </div>
            <div class="footer">
                <p>&copy; 2024 Estate App. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>
  `;
};

// Get custom email template
const getCustomEmailTemplate = (data) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${data.subject || 'Estate App Notification'}</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .footer { text-align: center; margin-top: 20px; color: #666; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>${data.title || '📧 Estate App'}</h1>
            </div>
            <div class="content">
                <h2>Hello ${data.name}!</h2>
                <div>
                    ${data.message || data.body || '<p>Thank you for being part of Estate App community.</p>'}
                </div>
            </div>
            <div class="footer">
                <p>&copy; 2024 Estate App. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>
  `;
};

const getEmailVerificationTemplate = (verifyUrl, userName = '') => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verify Your Email Address</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
            line-height: 1.6;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        .header {
            background: linear-gradient(135deg, #4CAF50, #45a049);
            padding: 40px 30px;
            text-align: center;
            color: white;
            position: relative;
        }
        .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.05)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
            opacity: 0.3;
        }
        .logo {
            font-size: 32px;
            font-weight: bold;
            margin-bottom: 10px;
            position: relative;
            z-index: 1;
        }
        .verification-icon {
            width: 80px;
            height: 80px;
            margin: 20px auto;
            background: rgba(255,255,255,0.2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            z-index: 1;
            font-size: 40px;
        }
        .content {
            padding: 40px 30px;
            text-align: center;
        }
        .title {
            font-size: 28px;
            color: #2c3e50;
            margin-bottom: 15px;
            font-weight: 600;
        }
        .message {
            font-size: 16px;
            color: #555;
            line-height: 1.8;
            margin-bottom: 30px;
        }
        .verify-section {
            background: linear-gradient(135deg, #667eea, #764ba2);
            border-radius: 15px;
            padding: 30px;
            margin: 30px 0;
            color: white;
        }
        .verify-button {
            display: inline-block;
            background: white;
            color: #667eea;
            padding: 15px 35px;
            text-decoration: none;
            border-radius: 50px;
            font-weight: bold;
            font-size: 16px;
            margin-top: 20px;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            border: none;
            cursor: pointer;
        }
        .verify-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.3);
            background: #f8f9fa;
        }
        .security-note {
            background: linear-gradient(135deg, #ffeaa7, #fab1a0);
            border-radius: 15px;
            padding: 25px;
            margin: 30px 0;
        }
        .security-note h4 {
            color: #2d3436;
            margin-bottom: 15px;
            font-size: 18px;
            display: flex;
            align-items: center;
        }
        .security-note h4::before {
            content: '🔒';
            margin-right: 10px;
            font-size: 20px;
        }
        .security-note p {
            color: #2d3436;
            font-size: 14px;
            line-height: 1.6;
        }
        .fallback-section {
            background: #f8f9fa;
            border-radius: 10px;
            padding: 20px;
            margin: 20px 0;
            text-align: left;
        }
        .fallback-section h4 {
            color: #333;
            margin-bottom: 10px;
            font-size: 16px;
        }
        .fallback-link {
            color: #667eea;
            word-break: break-all;
            font-family: 'Courier New', monospace;
            font-size: 12px;
            background: white;
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #ddd;
        }
        .footer {
            background: #2c3e50;
            color: white;
            padding: 30px;
            text-align: center;
        }
        .social-links {
            margin: 20px 0;
        }
        .social-links a {
            display: inline-block;
            width: 40px;
            height: 40px;
            background: rgba(255,255,255,0.1);
            border-radius: 50%;
            margin: 0 10px;
            line-height: 40px;
            text-decoration: none;
            color: white;
            transition: all 0.3s ease;
        }
        .social-links a:hover {
            background: rgba(255,255,255,0.2);
            transform: translateY(-2px);
        }
        .contact-info {
            font-size: 14px;
            opacity: 0.8;
            margin-top: 20px;
        }
        .timer {
            background: #e3f2fd;
            border-left: 4px solid #2196F3;
            padding: 15px;
            margin: 20px 0;
            border-radius: 0 10px 10px 0;
        }
        .timer p {
            color: #1976D2;
            font-weight: 600;
            margin: 0;
        }
        @media (max-width: 600px) {
            .container {
                margin: 10px;
                border-radius: 15px;
            }
            .header, .content, .footer {
                padding: 20px;
            }
            .title {
                font-size: 24px;
            }
            .verify-section, .security-note, .fallback-section {
                padding: 20px;
            }
            .verify-button {
                padding: 12px 25px;
                font-size: 14px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">Glimto</div>
            <div class="verification-icon">
                ✉️
            </div>
        </div>
        
        <div class="content">
            <h1 class="title">Verify Your Email Address</h1>
            
            <p class="message">
                ${userName ? `Hi ${userName}! ` : ''}We need to verify your email address to complete your account setup and ensure the security of your Glimto account.
            </p>
            
            <div class="verify-section">
                <h3>🔐 Click to Verify Your Email</h3>
                <p>Click the button below to verify your email address instantly:</p>
                <a href="${verifyUrl}" class="verify-button">Verify Email Address</a>
            </div>
            
            <div class="timer">
                <p>⏰ This verification link will expire in 1 hour for security reasons.</p>
            </div>
            
            <div class="fallback-section">
                <h4>🔗 Can't click the button?</h4>
                <p>Copy and paste this link into your browser:</p>
                <div class="fallback-link">${verifyUrl}</div>
            </div>
            
            <div class="security-note">
                <h4>Security Information</h4>
                <p>
                    <strong>Why do we need email verification?</strong><br>
                    • Ensures you can receive important account notifications<br>
                    • Protects your account from unauthorized access<br>
                    • Enables password reset functionality<br>
                    • Required for certain Glimto features
                </p>
            </div>
            
            <div class="message">
                <p style="color: #666; font-size: 14px;">
                    <strong>Didn't request this verification?</strong><br>
                    If you didn't create an Glimto account, you can safely ignore this email. 
                    Your email address will not be used unless you verify it.
                </p>
            </div>
        </div>
        
        <div class="footer">
            <div class="social-links">
                <a href="#" title="Facebook">📘</a>
                <a href="#" title="Twitter">🐦</a>
                <a href="#" title="Instagram">📷</a>
                <a href="#" title="LinkedIn">💼</a>
            </div>
            
            <div class="contact-info">
                <p><strong>Need Help?</strong></p>
                <p>📧 support@glimto.com | 📞 +1 (555) 123-4567</p>
                <p style="margin-top: 15px; opacity: 0.6;">
                    © ${new Date().getFullYear()} Glimto. All rights reserved.
                </p>
                <p style="font-size: 12px; margin-top: 10px; opacity: 0.6;">
                    This is an automated security email from Glimto.
                </p>
            </div>
        </div>
    </div>
</body>
</html>
  `;
};

module.exports = {
  getPasswordResetEmailTemplate,
  getWelcomeEmailTemplate,
  getPaymentSuccessTemplate,
  getPaymentNotificationTemplate,
  getAdminPaymentNotificationTemplate,
  getAuctionCancelledTemplate,
  getBuyerPaymentConfirmationTemplate,
  getOwnerPaymentNotificationTemplate,
  getOrderConfirmationTemplate,
  getPropertyUpdateTemplate,
  getCustomEmailTemplate,
  getEmailVerificationTemplate
};
