const sgMail = require('@sendgrid/mail')

require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const msg = {
  to: 'receipient@example.com',
  from: 'thomas.hofmann@digitalcareerinstitute.org', 
  subject: 'Hello',
  text: 'Hi Marlen :-)',
  html: '<strong></strong>',
}

sgMail.send(msg)
  .then(() => {
    console.log('Email sent to', msg.to, " subject:", msg.subject);
  })
  .catch((error) => {
    console.error('error sending to', msg.to, " subject:", msg.subject, error)
  })

// pseudo code for sending to multiple receipients
// receipients = [
// 	'email-address1',
// 	'email-address2',
// 	'email-address3',
// ];
// for each recipient of receipients{
// 	msg.to = recipient;
// 	sgMail.send(msg)...
// //}
