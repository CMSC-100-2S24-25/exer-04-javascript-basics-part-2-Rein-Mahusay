const fName = "Alan";
const lName = "Turing";
const eMail = "aturing@w3c.com";
const age = 58;
let data = [];

//import from the uuid package, found an instruction form the installation instruction
import { v4 as uuidv4 } from 'uuid';

const generateUniqueID = (fName, lName) => {
    //built-in codes
    const combine = fName.charAt(0).toLowerCase() + lName.toLowerCase();
    let uuid = uuidv4().toString();
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