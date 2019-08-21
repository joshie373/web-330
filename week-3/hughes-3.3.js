/*
============================================
; Title:  hughes-3.3.js
; Author: Richard Krasso
; Date:   21 August 2019
; Modified by: Joshua Hughes
; Description: demonstrates the singleton pattern
;===========================================
*/

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Same database instance? true

*/

// start program


//===============header include======================
//require header file
const header = require('../hughes-header.js');

//use header display function
console.log(header.display("Joshua", "Hughes", "Exercise 3.3"));

//line break
console.log("\n");
//===============header include======================

//database object
var DatabaseSingleton = (function() {
    var instance;
    function createInstance() {
        var postgresDatabase = new Object("Database instance initialized!");
        return postgresDatabase;
    }
    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();

//test function compares both database objects and checks to see if they are the same
function databaseSingletonTest()
{
    var oracle = DatabaseSingleton.getInstance();
    var postgres = DatabaseSingleton.getInstance();

    console.log("Same database instance? %s ", oracle === postgres);
}


//call test object
databaseSingletonTest();