const nodemailer = require('nodemailer');
const { google } = require('googleapis');

const CLIENT_ID =
  '866616162346-0h67hk3aenm237n30cosnoajcj6ufu9k.apps.googleusercontent.com';
const CLIENT_SECRET = 'y6krt2OauEB6JFz2_VC4BMiA';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN =
  '1//04NjqK112qbUTCgYIARAAGAQSNwF-L9IrEDhMO906u5ySJfQuSNx_ZxAOD7Y7srO8U_T5nzP6sv9QJurtmwmfvmR_QypaBlxutGE';

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendMail(user) {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'logan.pippin32@gmail.com',
        clientID: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken:
          'ya29.A0AfH6SMARvoXbn3I53xsK5bhDe4avMXXV9CMIATSrV9hvb3VnQuaBfhzFz9FcPPszGrrIOe3uy6eroqZnu2lPiPJohg7HZic1G64i0qNZlAV422KoogWqragR8E7E-XT_GvKJMJfySNLYcoE9og_yencaF23D',
      },
    });

    const mailOptions = {
      from: ' EXTracker <logan.pippin32@gmail.com>',
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

sendMail()
  .then((result) => console.log('Email sent...', result))
  .catch((err) => console.error(err));
