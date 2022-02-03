# Change: Email-Verfification-Process - Move Verification of Email after Check of Password

The verification currently takes place before the password has been checked. 
That may provide access to the login form used/provided in that context (@todo: check).
To prevent accessing that login form and consequently mark the email as verified, the check of the password shall take place after the password check. And only after both (password and secret check) succeed the email address shall be marked as verified (`User.isEmailVerified = true`).

1. How long might that change take?
  
  Please send your estimation in the zoom chat directly to Thomas.

2. Implementation by Thomas

3. Reflect

  Did the estimation (1.) match the actual duration?
  What took longer/shorter than expected?
