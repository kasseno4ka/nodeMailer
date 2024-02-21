const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();


const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587, // SMTP-порт для Gmail
    secure: false, // Использовать TLS вместо STARTTLS
    auth: {
      user: 'kasseno4ka@gmail.com',
      pass: process.env.GMAIL_APP_PASSWORD // Загрузить пароль приложения из переменной среды
    }
  });
  

function sendEmail(recipient, subject, message) {
  const mailOptions = {
    from: 'kasseno4ka@gmail.com', 
    to: recipient,
    subject: subject,
    text: message 
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
}

const recipient = 'kasseno4ka@gmail.com';
const subject = 'Test Email from Node.js';
const message = 'This is a test email sent using Nodemailer.';

sendEmail(recipient, subject, message);