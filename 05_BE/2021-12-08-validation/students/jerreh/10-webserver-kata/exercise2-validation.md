# Exercise 2 - Validation

After the exercises (`exercise.md`), the task would be to
setup a validation middleware to validate received JSON for the
routes:
- `POST /user`
- `PUT /user/:id`.

Use the node-module `ajv` for the validation.

## Validation Schema
The JSON shall contain an object that has the following properties:
- firstname
- lastname
- email

The type of each property shall be `string`.

Those three properties are required, and additional properties are allowed as part of the input.

## Hint
A starting point may be given by the live-coded example in `ClassBook/05_BE/2021-12-08-validation/10-ajv`.

There the structure to head to would be around:
```
./middlewares/validationMiddleware.js
./schemas/userSchema.js
./80-server.js
```

The live-coded `userSchema.js` needs some changes to fit to this exercise.

## Optional Task
Once the validation works try to change the type of `email` from `string` to `email`.
