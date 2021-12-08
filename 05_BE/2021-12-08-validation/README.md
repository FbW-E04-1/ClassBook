# Validation

## Note
please update repo `$> git pull`

## Recap
- Recap HTTP and Express
  - HTTP
    - Request/Response
      - HTTP-Method
      - Head with HTTP-Headers (e. g. 'Content-Type')
      - Body with the actual content (e. g. some JSON)
  - Express-Handlers
    - Route (req, res)
    - Middleware (req, res, next)
    - ErrorHandlingMiddleware (error, req, res, next)
  - Express-Router (mount router for path)
  - connection between 
    standard (HTTP) and implementation (Express)

## New Concept **Signature**
- The **signature** of a Function consists of the **function name**, the **parameters**, and its **return value**.

## AJV (possible abbreviation for: Another Javascript Validator)
- [Getting Started](https://ajv.js.org/guide/getting-started.html)
  - AJV validates data according to given schema:
    - [JSON Schema](https://ajv.js.org/json-schema)
    - [JSON Type Definition](https://ajv.js.org/json-type-definition)
    - [How to choose the way to define the schema](https://ajv.js.org/json-type-definition)
      => JSON Type Definition
        - Approved standard (RFC8927)
        - aligned with type-systems of many languages
        - very simple (good to begin with)
        - offers compilation to get `serializer` and `parser` (efficient)

## Links
- [AJV](https://ajv.js.org/)

- Error Handling with `try catch finally` in Javascript
  
  [try catch finally (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

- Factory Function
  a functions that creates things (e. g. a function) and return that thing
  - higher order functions
    a function creating another function and returning it

  - `makeX()` would be a function that creates `X` and returns it.
    `make` indicates that it is a so called factory function
