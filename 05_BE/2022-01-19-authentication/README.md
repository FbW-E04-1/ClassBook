# Authentication and Authorization

Nice Article (thanks to Gabo :-)
https://auth0.com/blog/adding-salt-to-hashing-a-better-way-to-store-passwords/

## Introduction: Authentication and Access control
- Technical vs. Organizational Security
- hashing functions
  - purpose and properties
- evolution of password handling:
  - plain text
  - hashing
    - md5 and sha256
      - md5 => low complexity
      - sha256 => higher complexity
    - salt
      - salt protects against attacks with precomputed hashes (rainbow tables)
    - salt and pepper
      - pepper is used to add some organizational security
    - bcrypt
      - based on the Blowfish cipher
      - configurable complexity (rounds/iterations)
      - easy to use (`bcrypt.hashSync(...)` / `bcrypt.compareSync(...)`)

## Encryption: creating a library wrapper around `bcrypt`
- Encryption intro: hashing and salting
- Project organization V: The `lib` folder
- Hashing: `await bcrypt.hash(<plain text>, <salt rounds>)`
- Salting: salt rounds and performance
- Comparing: `await bcrypt.compare(<plain text>, <hash>)`

## Creating users: updating our project's controllers
- The `User` model: best schema practices
- Hashing on save:
  mongoose hooks, `UserSchema.pre('save', <hashing function>)`
- The `signup` endpoint: POSTing new users

## Logging In: updating our project's controllers
- Extending schemas with methods, creating a compare function:
  `UserSchema.methods.authenticate = <compare function>`
- The `login` endpoint: POSTing a login request
- Hiding sensitive data, removing the password when sending users:
  `UserSchema.methods.toJSON = <function>`
