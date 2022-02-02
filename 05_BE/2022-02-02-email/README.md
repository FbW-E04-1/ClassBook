# Email

## Access Control Recap
- Code Review
- Links for further reading

## Use-Cases
- advertising
- communication/information
  - private email person-to-person
  - business 
    - person to person
	- company to group of persons
	- information on the user's product
	  - state
	  - invoices
		- once in year - liquidation of annual costs ('Betriebskostenabrechnung')
		- regular intervals (monthly, weekly, ...)
		- request for appointment
	- user support
	- email verifiction/validation => guarantees a correct email-address
	- request to reset a password => email with a password reset link
- ...

## Foundation
### Email
Email works with clients and servers. There exist a number of protocols/standards, most common:
  - [SMTP - Simple Mail Transfer Protocol](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol)
  - [POP/POP3 - Post Office Protocol](https://en.wikipedia.org/wiki/Post_Office_Protocol)
  - [IMAP - Internet Message Access Protocol](https://en.wikipedia.org/wiki/Internet_Message_Access_Protocol)

**Note:** There exists an unencrypted and an encrypted version for each of those protocols.

### Sendgrid API
Service for sending emails.
- no own email server necessary
- prerequisites:
  - Sendgrid account
  - verified sender email address
  - API key

**Hints** on prerequisites during live coding.

### Live: Hello World Email
- Sender Authentication ('from' address)

  The 'from'/sender email address must be verified before an email can be sent.

  https://app.sendgrid.com/settings/sender_auth

- Using the Sendgrid API:

  - Available for different languages:

    https://app.sendgrid.com/guide/integrate

  - Sendgrid API for Javascript:

    https://app.sendgrid.com/guide/integrate/langs/nodejs

- Beware:

  The Sendgrid API-key must not be published - add the `.env` file to `.gitignore`!

  Else the key and the account will be disabled within minutes.
  
### Links
- [Sendgrid.com](https://sendgrid.com/)
  - [@sendgrid/mail](https://www.npmjs.com/package/@sendgrid/mail)
  
### Webserver
