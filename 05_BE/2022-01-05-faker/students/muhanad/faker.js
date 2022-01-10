import dotenv from "dotenv";
dotenv.config();
import db  from "./lib/database.js";
import faker from 'faker';

faker.seed(123);

async function getSomeData() {
    try {
        const usersArr = [];
            await db.collection("users").deleteMany();
            for ( let i = 0; i <10 ; i++){
                let person ={
                        age: 22 ,
                        userName : faker.name.firstName(), 
                        email : faker.internet.email()
                    }
                    usersArr.push(person);
            }
            await db.collection("users").insertMany(usersArr)
            } catch (error) {
        console.log(error);
    }
    
}
getSomeData()
.then(
	() => {
		console.log("calling getSomeData()");
		process.exit(0);
	}
)
.catch( 
	error => {
		console.error(error);
		process.exit(1);
	}
);
