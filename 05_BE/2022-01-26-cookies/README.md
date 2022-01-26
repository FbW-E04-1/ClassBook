## Cookies and Cross Site Request Forgery (CSRF)

## Cookies
- Using cookies to save state across requests
- Setting cookies with `res.cookie()`
- Using `cookieParser` to read cookies: `req.cookies`
- Cookie pitfalls: memory limit, security vulnerabilities

## Cross Site Request Forgery (CSRF)
- Cross Site Request Forgery: Dealing with intruders
- CSRF tokens as solution: Implementing csurf in form templates

### Links
- [Cross-site request forgery](https://en.wikipedia.org/wiki/Cross-site_request_forgery)

- [Understanding CSRF](https://github.com/pillarjs/understanding-csrf)

- [HTTP Cookies (MDN)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies) (recommended reading)
  - [Express - res.cookie()](http://expressjs.com/en/5x/api.html#res.cookie)
  - [Express - cookie-parser (middleware)](http://expressjs.com/en/resources/middleware/cookie-parser.html)
  - IEEE:
    - [Same-Site Cookies (Internet-Draft, HTTP-WG, IEEE)](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-cookie-same-site-00#section-4.1.1)
    - [Recommendation for Session Management (same document as before)](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-cookie-same-site-00#section-5.2)
- [Double Submit Cookie (OWASP)](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html#double-submit-cookie)

- #### Implementation
  - [Node-Module "csurf"](https://www.npmjs.com/package/csurf)
  - [Handlebars](https://www.npmjs.com/package/express-handlebars)
