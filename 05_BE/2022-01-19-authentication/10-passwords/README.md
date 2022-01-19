# Passwords

Von Plaintext über Hash zu _Salt_ und _Pepper_.

## Introduction: Authentication and Access control
Encryption: creating a library wrapper around `bcrypt`
- Encryption intro: hashing and salting
- Hashing: `bcrypt.hashSync(<plain text>, <salt rounds>)`
- Salting: salt rounds and performance
- Comparing: `await bcrypt.compareSync(<plain text>, <hash>)`

## Links
- Password
  - [Password](https://en.wikipedia.org/wiki/Password)
- Hash
  - [Hash Function](https://en.wikipedia.org/wiki/Hash_function)
  - [SHA-2](https://en.wikipedia.org/wiki/SHA-2)
  - [bcrypt](https://en.wikipedia.org/wiki/Bcrypt)
  - [node: bcrypt](https://www.npmjs.com/package/bcrypt)
- Salt
  - [Salt](https://en.wikipedia.org/wiki/Salt_(cryptography))
- Pepper
  - [Pepper](https://en.wikipedia.org/wiki/Pepper_%28cryptography%29)
- Rainbow Table
  - [Rainbow Table](https://en.wikipedia.org/wiki/Rainbow_table)
