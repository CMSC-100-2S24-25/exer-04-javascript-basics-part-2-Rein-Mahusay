const fName = "Alan";
const lName = "Turing";
const eMail = "aturing@w3c.com";
const age = 58;
let data = [];

//built-in
import fs from 'fs';
//import from the uuid package, found an instruction form the installation instruction
import { v4 as uuidv4 } from 'uuid';
import isEmail from 'validator/lib/isEmail';
//isEmail(str [, options])

const generateUniqueID = (fName, lName) => {
    //built-in codes
    const combine = fName.charAt(0).toLowerCase() + lName.toLowerCase();
    let uuid = uuidv4().substring(0, 8).toString();
    const genID = combine + uuid;
    return genID;
}

const addAccount = (fName, lName, eMail, age) => {
    //if the user is saved, return true
    //else, return false
}

//testing output
const testing = generateUniqueID(fName, lName);
console.log(testing);