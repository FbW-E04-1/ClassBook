# Change: Email-Verfification-Process
## Move Verification of Email after Check of Password

The verification currently takes place before the password has been checked. 
That may provide access to the login form used/provided in that context (@todo: check).
To prevent accessing that login form and consequently mark the email as verified, the check of the password shall take place after the password check. And only after both (password and secret check) succeed the email address shall be marked as verified (`User.isEmailVerified = true`).

1. How long might that change take?
  
  Please send your estimation in the zoom chat directly to Thomas.

2. Implementation by Thomas

3. Reflect

  Did the estimation (1.) match the actual duration?
  What took longer/shorter than expected?

  **Things Done**

  Important to the solution is that `User.isEmailVerified` is only set to `true` if both the test of the secret and the login with the password are successful.
  
  For the implementation refer to `router/auth.js`: `router.post("/verifyEmail/:email/:secret"`.

  **Main Parts**
  - developing an idea for the solution, including identifying relevant places in the source code

    *[10 min]*

  - created `curl/auth-signup-post.sh`

    *[5 min]*

  - implementation

    *[10 min]*

  - fixed bug if user with given email already exists:
    - created `User.exists(user)`
    - `POST /auth/sign` returns with status "409 Conflict" if already exists
    - `User.register` tests for existence and bailouts early with return null (in case a user already exists)
    - thoughts/research what should be returned in the error case (status code `409` for the HTTP response, and `null` by `User.register`
    
    *[20 min]*
    
  - testing *[5-10 min]*
  - cleanup *[5-10 min]*
  - some commits *[5-10 min]*

  **Sum:** *50-65 min*

  Implementation was interrupted four times.
