/*
============================================
; Title:  hughes-3.2.js
; Author: Richard Krasso
; Date:   20 August 2019
; Modified by: Joshua Hughes
; Description: demonstrates database objects and factories
;===========================================
*/

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Oracle {
    username: '<username>',
    password: '<password>',
    server: '<server>',
    version: '<version>'
 }

 Informix {
    username: '<username>',
    password: '<password>',
    server: '<server>'
 }

*/
// start program


//===============header include======================
//require header file
const header = require('../hughes-header.js');

//use header display function
console.log(header.display("Joshua", "Hughes", "Exercise 3.2"));

//line break
console.log("\n");
//===============header include======================

//postgres class
function Postgres(properties) {
 this.username = properties.username || "admin";
 this.password = properties.password || "s3cret";
 this.server = properties.server || "localhost:5432";
}

//MySql class
function MySql(properties) {
 this.username = properties.username || "ca-admin";
 this.password = properties.password || "ca-s3cret";
 this.server = properties.server || "localhost:8000";
 this.version = properties.version || 5.7
}

//Oracle database class
function Oracle(properties){
    this.username = properties.username || 'root';
    this.password = properties.password || 'p@55w0rd';
    this.server = properties.server || 'localhost:5454';
    this.version = properties.version || '16.1';
}

//Informix database class
function Informix(properties){
    this.username = properties.username || 'root';
    this.password=  properties.password || 'p@55w0rd';
    this.server = properties.server || 'localhost:3030';
}

//create databaseFactory empty constructor
function DatabaseFactory() {};

//set prototype default database class to mySql
DatabaseFactory.prototype.databaseClass = MySql;

//define createDatabase protoype 
DatabaseFactory.prototype.createDatabase = function(properties) {

    //control statements to determine database used
    switch (properties.databaseType) {
        case 'Postgres':
            this.databaseClass = Postgres;
            break;
        case 'MySql':
            this.databaseClass = MySql;
            break;
        case 'Oracle':
            this.databaseClass = Oracle;
            break;
        case 'Informix':
            this.databaseClass = Informix;
            break;
    }

    return new this.databaseClass(properties);
};

//postgres factory and database prototype
var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
 databaseType: "Postgres",
 username: "admin",
 password: "SuperSecret"
});


//mySql factory and database prototype
var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
 databaseType: 'MySQL',
 username: "default",
 password: "password"
});

//oracle factory and database prototype
var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
    databaseType: 'Oracle',
    username: "user",
    password: "sensitive"
});

//informix factory and database prototype
var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
    databaseType: "Informix",
    username: "person",
    password: "encrypted"
});

//output 
console.log(oracle);
console.log(informix);

