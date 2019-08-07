/*
============================================
; Title:  hughes-1.3.js
; Author: Joshua Hughes
; Date:   06 August 2019
; Description: Class refresher
;===========================================
*/

//===============header include======================
//require header file
const header = require('../hughes-header.js');

//use header display function
console.log(header.display("Joshua", "Hughes", "Exercise 1.3"));

//line break
console.log("\n");
//===============header include======================

/**
 * Params: none
 * Response: cellphone object
 * Description: cellphone object constructor
 */
function Cellphone(manufacturer){
    this.manufacturer = manufacturer;
    this.model = "S9";
    this.color = "Blue";
    this.price = "349.99";

    this.getModel = function(){
        return this.model;
    };

    this.getPrice = function(){
        return this.price;
    };

    this.getDetails = function(){
        return "Manufacturer: "+ this.manufacturer + "\n"+
        "Model: "+ this.getModel() + "\n"+
        "Color: "+ this.color + "\n"+
        "Price: $"+ this.getPrice() + "\n"
    };
}

var phone = new Cellphone("Samsung");

//output
console.log("-- DISPLAYING CELL PHONE DETAILS --");
console.log(phone.getDetails());

