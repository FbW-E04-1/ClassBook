const ajvInstance=require("./schema")


const schema = {
  type: "object",
  properties: {
    firstName: { type: "string" },
    email: { type: "string" , format:"email"  },
    dateOfBirth: { type: "string" , format:"date"  },
    country: { type: "string" ,
    enum:['US','DE','Uk','AFRk']},

  },
  required: ["firstName",'email','dateOfBirth','countryCode'],
  additionalProperties: false,
};

module.exports= ajvInstance.compile(schema);