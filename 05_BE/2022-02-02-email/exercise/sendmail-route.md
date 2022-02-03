# Sendmail

Implement in the backend a route that sends an email, - outline:
`POST /sendmail`

The request's shall deliver the following information:
```javascript
{
	to: "receipient@example.com",
	subject: "some subject",
	text: "some text",
	html: "some <strong>html</strong>" // optional
}
```
which is needed to then send a corresponding email.

The route must be protected so that only a logged in user can access it.
