## Kickoff - Final Project

### Time Frame

- 7 weeks (2022-02-14 - 2022-03-31), e. g. 
	- 6 weeks development
	  - 1 week group/setup/tools/plan/research/tech/arch/
	  - 4 weeks dev
	  - 1 week cleanup
	- 1 week presentation

### Project Idea
In a group of 3-4 develop some project ideas and describe each in one paragraph.

Think about what the project should do, - technologies are of no interest at this point.

Describe the project as if you were the project's sponsor and are looking for a development-team.

1 hour

### Group Finding

Around 5 project ideas groups need to be found.
Each group must be able to work fullstack (frontend, backend, database, ...).

## CORS

[express - CORS middleware](https://expressjs.com/en/resources/middleware/cors.html#configuring-cors)
- [some prose on CORS options](https://javascript.plainenglish.io/using-the-cors-middleware-for-cross-domain-communication-6e78d17b7eac)

[express - res.cookie()](http://expressjs.com/en/api.html#res.cookie)

[axios](https://www.npmjs.com/package/axios)
- [axios - request config](https://www.npmjs.com/package/axios#request-config)

Frontend can be delivered from one host and backend from another, e. g. during development, starting two webservers on localhost, one delivering the frontend and the other the backend.

The cookie based authentication is CORS enabled so that it works, see:
- Backend: 
  - `server.js` for CORS-middleware:
    ```javascript
	server.use(require('cors')(
		{
			origin: 'http://localhost:3000', 
				// only this host is allowed 
				// to do CORS requests

			credentials: true, 
				// this sets the CORS header: 
				// Access-Control-Allow-Credentials 
				//
				// true => sending of cookies is allowed 
				//         for CORS requests
				
			optionsSuccessStatus: 200 
				// workaround for some browsers 
				// having a problem on 204 status-code
    	}
	));
	```
  - `routes/auth.js` for cookie-options:
  ```javascript
    res.cookie("token", token.sign(user), {
        maxAge: process.env.TOKEN_EXPIRATION * 1000,
        httpOnly: true,
        sameSite: 'Lax'
    });
  ```

- Frontend:
  - `HomePage.js`:
	 
	`axios.defaults.withCredentials = true;` which leads to axios' sending cookies along requests
    