const nodemailer = require('nodemailer');

module.exports = async (email) => {
  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'eztracker2@gmail.com',
      pass: 'SuperSecret12',
    },
  });

  const mailOptions = {
    from: 'EZTracker <eztracker2@gmail.com>',
    to: email,
    subject: 'Thanks For Singing Up!',
    text:
      'We really appreciate you, and think that your choice in subscription tracking apps was the right one we look forward to your continued use and enjoy. Thank You.',
  };
  const result = await transport.sendMail(mailOptions);
  return result;
};
