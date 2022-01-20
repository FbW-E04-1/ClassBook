const bcrypt=require("bcrypt")

input="sport"
saltRounds=12

let salt =bcrypt.genSaltSync(12)
console.log(`My-Salt:`,salt);


let hash =bcrypt.hashSync(input,saltRounds)
console.log(`My-Hash:`,hash);

let result=bcrypt.compareSync(input,hash)
console.log('result:',result);