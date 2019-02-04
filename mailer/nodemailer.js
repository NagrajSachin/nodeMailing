const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'sachinnagraj00@gmail.com',
      pass: 'xxxxxxxx'
    }
  });

var email = function () {

  var mailOptions = {
    from: 'sachinnagraj00@gmail.com',
    to: 'sachinnagraj00@gmail.com',
    subject: 'Sending Email using Node.js',
    html : { path : 'public/index.html'}
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports = email;