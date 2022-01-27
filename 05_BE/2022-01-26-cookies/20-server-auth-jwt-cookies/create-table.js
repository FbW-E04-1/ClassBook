let CryptoJS = require("crypto-js");

function calculateHashes(password) {
  return (
    CryptoJS.MD5(password).toString() +
    " " +
    CryptoJS.SHA256(password).toString()
  );
}

function createHashTable() {
  for (i = 0; i <= 9999; i++) {
    console.log(i, calculateHashes(i.toString()));
  }
}
createHashTable();
