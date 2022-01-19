const bcrypt = require('bcrypt');
require('dotenv').config
let CryptoJS = require('crypto-js');

usernameParam = process.argv[2];
passwordParam = process.argv[3];

const USERS = {
  alice: {
    password: "$2b$12$zol5VgIoPLy.ogxswBKGM.486NcutM67czNoiJHnPDCLsatQqcfH.",
  },
  bob: {
    password: "$2b$12$BVNNzeCsqV.PGWhC7M.7GOMQmfFN2CqNeetERGzXAJ6U0/N/r41iq",
  },
};

function calculateHash(password) {
    const saltRounds = 12; 
    let hash = bcrypt.hashSync(password, saltRounds)

    return hash
}

function authenticate(username, password) {
   // var passwordHash = calculateHash(username, password);
   // console.log(passwordHash);
   // return;
    
    
    if (!USERS[username]) {
        console.log("not authenticated");
        return
    }
    if (bcrypt.hashSync(password, USERS[username].password)) {
        console.log("authenticated");
    } else {
        log("not authenticated")
    }
}
authenticate(usernameParam, passwordParam)