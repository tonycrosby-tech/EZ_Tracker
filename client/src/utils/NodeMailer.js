const nodemailer = require('nodemailer');
require('dotenv').config();

async function sendMail(user) {
  try {
    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'eztracker2@gmail.com',
        pass: process.env.PASS,
      },
    });

    const mailOptions = {
      from: ' EXTracker <eztracker2@gmail.com>',
      to: 'tonycrosby96@gmail.com',
      subject: 'Subscription almost expired',
      text: `Your subscription(s) are about to expire.`,
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    console.error(error);
  }
}

async function signUpMail(email) {
  try {
    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'eztracker2@gmail.com',
        pass: 'SuperSecret12',
      },
    });

    const mailOptions = {
      from: 'EZTracker <logan.pippin32@gmail.com>',
      to: email,
      subject: 'Thanks For Singing Up!',
      text:
        'We really appreciate you, and think that your choice in subscription tracking apps was the right one we look forward to your continued use and enjoy. Thank You.',
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    console.error(error);
  }
}

sendMail()
  .then((result) => console.log('Email sent...', result))
  .catch((err) => console.error(err));
