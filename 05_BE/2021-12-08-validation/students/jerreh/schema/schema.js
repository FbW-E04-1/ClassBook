// or ESM/TypeScript import
import Ajv from "ajv";
// Node.js require:
const Ajv = require("ajv");
const addFormats = require("ajv-formats");
const ajvInstans = new Ajv({ allErrors: true }); // options can be passed, e.g. {allErrors: true}
addFormats(ajvInstans);

module.exports =ajvInstans