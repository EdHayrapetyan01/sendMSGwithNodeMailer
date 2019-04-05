const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config({
    path: './.env'
})

let transporter = nodemailer.createTransport({
  service: 'mail.ru',
  secure: false,
  port: 25,
  auth: {
    user : process.env.EMAIL,
    pass:  process.env.SECRET_MESSAGE
  },
  tls: {
    rejectUnauthorized: false
  }
});

let HelperOptions = {
  from: '"YOURNAME" <YOUREMAIL',
  to: 'YOURFRIENDEMAIL@GMAIL.COM',
  subject: 'awesome subject',
  text: 'Awesome MSG'
};

  transporter.sendMail(HelperOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("The message was sent!");
    //console.log(info);
  });


 