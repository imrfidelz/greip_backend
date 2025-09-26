
const twilio = require('twilio');

const sendSms = async (options) => {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

  if (!accountSid || !authToken || !twilioPhoneNumber) {
    console.error('Twilio credentials are not set in environment variables.');
    throw new Error('SMS service is not configured.');
  }

  const client = twilio(accountSid, authToken);

  const message = {
    body: options.message,
    from: twilioPhoneNumber,
    to: options.to,
  };

  try {
    const info = await client.messages.create(message);
    console.log('SMS sent: %s', info.sid);
  } catch (error) {
    console.error('Error sending SMS:', error);
    throw new Error('SMS could not be sent.');
  }
};

module.exports = sendSms;
