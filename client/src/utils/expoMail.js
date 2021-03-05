const nodemailer = require('nodemailer');
const axios = require('axios');
const moment = require('moment');

const date = new Date(moment().format());
const title = [];
let email = '';

export default () => {
  const submit = async () => {
    const response = await fetch('/api/auth/access', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ email, title }),
    });
    const resData = await response.json();
  };
  axios.get('/api/auth/getAllSubs').then((res) => {
    const subs = res.data.subscriptions;
    console.log(res.data);
    if (subs) {
      email = res.data.email;
      console.log(email);
      subs.map((item) => {
        if (new Date(item.expirationDate) - date <= 86400000) {
          title.push(item.SubscriptionName);
        }
        console.log(title);
      });

      if (title.length !== 0) {
        submit();
      }
    }
  });
};
