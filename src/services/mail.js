const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');
const keys = require('config/keys');

const sendMail = email => {
  const options = {
    auth: {
      api_user: keys.sendgridUsername,
      api_key: keys.sendgridPassword
    }
  };
  const client = nodemailer.createTransport(sgTransport(options));
  return client.sendMail(email);
}

const sendContactMail = (name, fromEmail, subject, message) => {
  const email = {
    from: fromEmail,
    to: 'yongn1494@gmail.com',
    subject: subject,
    html: `<p><h2><strong>${name}</strong></h2>'s mail arrived!</p>
     <div>${message}</div>`
  }
  return sendMail(email);
}

module.exports = {
  sendContactMail
}
