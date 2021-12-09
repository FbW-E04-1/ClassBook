# Kata to build a REST-oriented Webserver

1. Create a Webserver with `Express`
   - the port it listens to shall be defined in an `.env` file

2. Create one route (`GET /`) that responds with `hello world`.

3. Create routes in the `server.js` for the resource type `resource`:
   ```
   #HTTP-METHOD URL-PATH
    GET /resource
    GET /resource/:id
    POST /resource
    PUT /resource/:id
    DELETE /resource/:id
   ```

   All these routes shall literally respond with the used HTTP-method and the used URL-path as received in the client-request and with an appropriate HTTP-status-code, e. g.: `res.status(200).send('GET /resource/' + res.params.id)` in case of the route `GET /resource/:id`

   By the way: It is assumed that a resource exists for every `id`, hence no errors will occur.

   [HTTP Status Codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

4. Create Client-Requests that test the created routes. In order to share these requests in the repository consider to create `curl`-shell-scripts (e. g. by using the Firefox-Plugin "RESTClient" to generate the corresponding `curl`-command).

5. Create a specialized router (file: `./router/resourceRouter.js`) for that resource
   - move the created routes into that new router.
   - mount the new router in `server.js`

6. Logger-Middleware
   Create a middleware that logs the received requests to the console. The log-message shall start with the HTTP-request-method followed by the path of the request (e. g. `GET /resource`).

7. Create a new Router `userRouter`, that implements routes like the ones in `resourceRouter`.
   - Mount the router to the path `/user`.

   Hint: Copying the `resourceRouter.js` to a new file `userRouter.js` may provide a good starting point.

8. Create mock-data for a new resource-type `user`.
   ```javascript
   let users = {
      1: {
         firstname: "Lise",
         lastname: "Meitner",
         email: "lmeitner@example.com"
      },
      2: {
         firstname: "Albert",
         lastname: "Einstein",
         email: "aeinstein@example.de"
      }
   }
   ```

   The number attributes ("1", "2") are the `id`s of the user-resource.

   - The two `GET`-routes of the `userRouter` shall respond with appropriate data from that new mock-object, the response shall be formatted as `json`.
   - Responses with `json` shall have the HTTP-Response-Header `Content-Type` set to `application/json`.

9. Create a client-request for the route `POST /user` that sends a new user as `json`.
   - the HTTP-Header `Content-Type` for that client-request shall be set to `application/json`.
   - the server shall respond with the received `json`, set the response's `Content-Type`-header accordingly

10. Create a client-request for the route `DELETE /user/2`.
   - the server shall delete the according resource and respond with the HTTP-status-code `204`.
   - What is the meaning of the status-code `204`?
   - remember to end the response, so that the client does not "hang".

11. Improve the route `GET /user/:id` so that it responds with an HTTP-status-code corresponding to a "Not Found" resource, in case the resource with the given `id` is not found.

12. Add a route that responses if no route has been called. That route shall respond with an HTTP-status of `404` without any data in the HTTP-response's body. - Hint: The route `GET /` may need to be changed.

13. Create and use a middleware that handles thrown errors.
    - it shall respond with an HTTP-status-code of `500` and an empty HTTP-response-body.
    - the error shall be logged on the serverside
