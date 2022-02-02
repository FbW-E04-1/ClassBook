const sgMail = require('@sendgrid/mail')

require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY)


recipients = [
	'email-address1',
	'email-address2',
	'email-address3',
];

const msg = {
  to: 'marlenwieduwilt@aol.com',
  from: 'thomas.hofmann@digitalcareerinstitute.org', 
  subject: 'Hello',
  text: 'Hi Marlen :-)',
  html: '<strong></strong>',
}

// for each recipient of recipients{
// 	msg.to = recipient;
// 	sgMail.send(msg)...
// //}

sgMail.send(msg)
  .then(() => {
    console.log('Email sent to', msg.to, " subject:", msg.subject);
  })
  .catch((error) => {
    console.error('error sending to', msg.to, " subject:", msg.subject, error)
  })
