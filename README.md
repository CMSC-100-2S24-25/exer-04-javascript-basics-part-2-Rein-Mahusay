[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/TP0ZkiLb)

# Week 4: ID Generation

**Name:** Rein Ezekiel Mahusay <br/>
**Program:** BS Computer Science <br/>
**Section:** CD-1L <br/>
**Student number:** 2023 - 13336 <br/>

## Key Takeaways

/ Packages are very helpful. The fs, uuid, and validator packages were convenient to use and with the additional keywords for help from the installation instructions are a lifesaver. They helped easily with random id generation, validations of every kind of input, and file operations. <br/>

/ Built-in codes are also a plus. I get to use them for string conversion, length restriction, character indexing, and lettercase altering. <br/>

/ Importing and exporting were kind of confusing. Since I enabled the modeule setting in the package.json, it kind of got more sensitive with exporting keywords. I first used default exporting, but it didn't work. I then used named exporting. It both works by adding export at the end with bundled up objects and inserting they keyword 'export' at the beginning of the functions. <br/>

Though at first, I keep getting errors even though I got the right import-export syntax. It was because of the variables, I needed to put it in test.js. Though even with that change, the default exporting still does not work. <br/>

Note : with export{}, 'node .' does not work. Though it runs when clicked the run code symbol at the upper right. However, when used 'export' at the beggining of every function, 'node .' works but the other does not. This is how it works in my device. <br/>

/ As for the file operations, I found a link on how AppendFileSync() works: (https://www.geeksforgeeks.org/node-js-fs-appendfilesync-function/) and successfully made it happen. To return true-false statements, first see if the data of the user is valid then add it to the text file. If not, then it does not need to append the data into the text file.


## References

- https://www.w3schools.com/jsref/jsref_charat.asp
- https://www.w3schools.com/jsref/jsref_tolowercase.asp
- https://bito.ai/resources/javascript-limit-string-length-javascript-explained/
- https://www.freecodecamp.org/news/check-if-string-is-empty-or-null-javascript/
- https://typedarray.org/convert-object-values-comma-separated-string-js/
- https://www.geeksforgeeks.org/node-js-fs-appendfilesync-function/