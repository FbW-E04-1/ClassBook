const sgMail = require('@sendgrid/mail')

require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

function sendEmail({to, from, subject, text, html}) {
	let msg = {
		to,
		from,
		subject,
		text,
		html,
	};

	sgMail.send(msg)
	.then(() => {
		console.log('Email sent to', msg.to, " subject:", msg.subject);
	})
	.catch((error) => {
		console.error('error sending to', msg.to, " subject:", msg.subject, error)
	})
}
	
module.exports = {
	sendEmail
};