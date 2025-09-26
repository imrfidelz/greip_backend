const cron = require('node-cron');

// Run every day at midnight to check expired subscriptions
cron.schedule('0 0 * * *', async () => {
  try {
    const subscriptionController = require('./controllers/subscriptions');
    await subscriptionController.checkExpiredSubscriptions({}, {
      status: () => ({ json: () => {} })
    }, (err) => {
      if (err) console.error('Cron job error:', err);
    });
    console.log('Successfully checked for expired subscriptions');
  } catch (err) {
    console.error('Error in subscription expiration cron job:', err);
  }
});