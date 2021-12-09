


const data = {
  foo: 1,
  bar: "abc",
};


const valid = validate(data);
if (!valid) console.log(validate.errors);
