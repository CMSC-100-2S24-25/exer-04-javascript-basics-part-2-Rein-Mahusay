// const fName = "Alan";
// const lName = "Turing";
// const eMail = "aturing@w3c.com";
// const age = 58;

//built-in
import fs from 'fs';
//import from the uuid package, found an instruction form the installation instruction
import { v4 as uuidv4 } from 'uuid';
import isEmail from 'validator/lib/isEmail.js';
//isEmail(str [, options])

const generateUniqueID = (fName, lName) => {
    //built-in codes
    const combine = fName.charAt(0).toLowerCase() + lName.toLowerCase();
    let uuid = uuidv4().substring(0, 8).toString();
    const genID = combine + uuid;
    return genID;
}

const addAccount = (fName, lName, eMail, age) => {
    //data information checking first
    //string and non-empty
    //valid and age must be at least 18
    if (typeof fName === "string" && fName.length !== 0 &&
        typeof lName === "string" && lName.length !== 0 &&
        typeof eMail === "string" && eMail.length !== 0 &&
        isEmail(eMail) && age >= 18
    ) {
        //object: data of the users
        //have to convert the properties and values
        let data = {
            fName: fName,
            lName: lName,
            eMail: eMail,
            age: age,
            uniqueID: generateUniqueID(fName, lName)
        }

        const join = Object.values(data).join(", ");
        const next = join + '\n';

        //if file doesn't exist, create file
        //meron namang file, so auto sunod siya sa first condition
        //still appending the users
        if (fs.existsSync("users.txt")) {
            fs.readFileSync("users.txt", "utf-8");
            fs.appendFileSync("users.txt", next);
            console.log("User is saved.");
            return true;
        } else {
            fs.writeFileSync("users.txt");
            fs.readFileSync("users.txt", "utf-8");
            fs.appendFileSync("users.txt", next);
            console.log("User is saved.");
            return true;
        }

        //return next;
    } else {
        console.log("Failed to save user.");
        return false;
    }
    //if the user is saved, return true
    //else, return false
}


export { generateUniqueID, addAccount };

//export default { generateUniqueID, addAccount };

//have the type:module on
//module.exports = { generateUniqueID, addAccount };

//const testing = generateUniqueID(fName, lName);
//console.log(testing);

//testing output
//const generate = addAccount(fName, lName, eMail, age);
//console.log(generate);