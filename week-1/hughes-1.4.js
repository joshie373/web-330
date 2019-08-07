/*
============================================
; Title:  hughes-1.4.js
; Author: Joshua Hughes
; Date:   06 August 2019
; Description: Duck Typing
;===========================================
*/

//===============header include======================
//require header file
const header = require('../hughes-header.js');

//use header display function
console.log(header.display("Joshua", "Hughes", "Exercise 1.4"));

//line break
console.log("\n");
//===============header include======================

//car contructor
function Car(model){
    this.model = model;
}
//add start prototype to constructor
Car.prototype.start = function(){
    console.log("Car added to the racetrack!");
};

//Truck Constructor
function Truck(model, year){
    this.model = model;
    this.year = year;
}

//add start prototype to constructor
Truck.prototype.start = function(){
    console.log("Truck added to the racetrack!");
};

//Jeep Constructor
function Jeep(model, year, color){
    this.model = model;
    this.year = year;
    this.color = color;
}

//add start prototype to constructor
Jeep.prototype.start = function(){
    console.log("Jeep added to the racetrack!");
};

//create vehicle classes
var mustang = new Car("Mustang");
var tundra = new Truck("Tundra", "2019");
var wrangler =  new Jeep("Wrangler", "2016", "Orange");

//initiate empty racetrack array
var racetrack = [];


function driveIt(vehicle){
    vehicle.start();
    racetrack.push(vehicle);
};

//pass classes through driveIt function
driveIt(mustang);
driveIt(tundra);
driveIt(wrangler);

//show racetrack
console.log("\n-- The following vehicles have been added to the racetrack --");
for(var i = 0; i < racetrack.length; i++){
    
    //--begin process to check other object properties, and assign them to blank values if undefined--
    var model = racetrack[i].model;
    var year = racetrack[i].year;
    var color = racetrack[i].color;
    if((typeof year === "undefined") && (typeof color === "undefined")){
        color = "";
        year = "";
    }
    else if(typeof color === "undefined"){
        year = year + " ";
        color = "";
    }
    else {
        year = year + " ";
        color = color + " ";
    }
    //--end additional properties handling--

    console.log(racetrack[i].constructor.name + ": " + color + year + model);
}