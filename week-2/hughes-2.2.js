/*
============================================
; Title:  hughes-2.2.js
; Author: Joshua Hughes
; Date:   13 August 2019
; Description: Prototypes
;===========================================
*/

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 The person's full name is '<fullname>.'
 The person's age is '<age>.'

*/
// start program


//===============header include======================
//require header file
const header = require('../hughes-header.js');

//use header display function
console.log(header.display("Joshua", "Hughes", "Exercise 2.2"));

//line break
console.log("\n");
//===============header include======================

var person = {
    getAge: function(){
        return this.age;
    }
};

var josh = Object.create(person, {

    "age": {
        "value": "29",
        enumerable: true
    },
    
    "fullname": {
        "value": "Joshua Hughes"
    }
});


console.log("The person's full name is "+josh.fullname+".");
console.log("The person's age is "+josh.getAge()+".");



// end program
