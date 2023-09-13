'use strict';
var firstName = "matilda";
//This keyword usage;
const jonas = {
    year: 1991,
    calcAge: function(){
        console.log(this);
        console.log(2037 - this.year);
    },

    greet: () => {
        console.log(this);
        console.log(this.firstName); // var creates an object in global scope thats why :) another reason to not to use var
    },
    
 };
 const matilda = {
    year : 2017,
 };
 matilda.calcAge = jonas.calcAge
 matilda.calcAge();
 jonas.greet();
