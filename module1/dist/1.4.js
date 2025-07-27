"use strict";
// Basic data types 
// string 
let myName = 'John';
console.log(myName);
// number
let age = 25;
console.log(age);
// boolean
let isStudent = true;
console.log(isStudent);
// undefined
let myAge = undefined;
console.log(myAge);
// null 
let Name = null;
console.log(myName);
// array
let fruits = ['apple', 'banana', 'orange'];
fruits.push('grape');
console.log(fruits);
// tuple
let person = ['John', 25];
console.log(person);
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let myColor = Color.Green;
let otherColor = Color.Blue;
console.log(myColor, otherColor);
// tuple 
let person1 = ['John', 25, true, 'Male', 1.75, undefined, null];
console.log(person1);
