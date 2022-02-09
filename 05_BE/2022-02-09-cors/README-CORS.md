# CORS - Cross Origin Resource Sharing

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
    `axios.defaults.baseURL = 'http://localhost:3456';` so that the server's address is not hardcoded at different places in your code AND can be changed once gone public (e. g. to `http://your-project.de`)
