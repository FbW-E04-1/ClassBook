usernameParam =process.argv[2]
userpasswordParam=process.argv[3]


USER={
    mike:{
        password:"4567"
    },
    paul:{
        password:"7645"
    },
}

function authentication (usernameParam,userpasswordParam){
    if (USERS[usernameParam]==undefined) {
        console.log("Not Authenticated");
        return
    }
    if (USERS[usernameParam].password ==userpasswordParam) {
        console.log(" Authenticated");
    } else {
        console.log("not Authenticated");
    }
}