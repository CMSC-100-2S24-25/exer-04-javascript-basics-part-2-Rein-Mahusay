const fName = "Alan";
const lName = "Turing";
const eMail = "aturing@w3c.com";
const age = 58;

import { generateUniqueID, addAccount } from './index.js';

const generate = addAccount(fName, lName, eMail, age);
console.log(generate);