// Basic data types 

// string 
let myName: string = 'John';
console.log(myName);


// number
let age: number = 25;
console.log(age);

// boolean
let isStudent: boolean = true;
console.log(isStudent);

// undefined
let myAge: undefined = undefined;
console.log(myAge);

// null 
let Name: null = null;
console.log(myName);

// array
let fruits: string[] = ['apple', 'banana', 'orange'];
fruits.push('grape');
console.log(fruits);

// tuple
let person: [string, number] = ['John', 25];
console.log(person);

// enum
enum Color {
  Red,
  Green,
  Blue,
}
let myColor: Color = Color.Green;
let otherColor: Color = Color.Blue;
console.log(myColor, otherColor);


// tuple 
let person1: [string, number, boolean, string, number,undefined,null] = ['John', 25, true, 'Male', 1.75,undefined,null];
console.log(person1);