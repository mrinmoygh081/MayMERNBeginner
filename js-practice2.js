// JS Revision Class
// console.log("Hello world!");

// Data Types
// String, Integer, Float, Boolean, BigInt, null
// Data Structures
// Object, Array, Map

// variables
// var, let, const
// var or let vs const
// var a = "Priyanka";
// console.log("first" + a);
// a = "Subho";
// console.log("second: " + a);

// const b = "Priyanka";
// b = "Subho";
// console.log(b);

// var vs let
// var -> global scope
// let -> block scope
// if (true) {
//   var a = "Riya";
// }
// console.log(a);

// let b = "Priyanka";
// b = "Subho";

// conditions;
// if (age >= 18) {
//   console.log(name + " have permission to drink");
// } else if (age <= 10) {
//   console.log(name + " is a kid.");
// } else {
//   console.log(name + " have no permission to drink");
// }
let name = "Rounak";
let age = 19;
// Ternary Operators
// age >= 18
//   ? console.log(name + " is " + age + " years old")
//   : console.log(name + " has no permission to drink");
// name + " is " + age + " years old"
// age >= 18
//   ? console.log(`${name} is ${age} years old`)
//   : console.log(name + " has no permission to drink");

// loops: for, while, do_while, forEach, .map, .filter, .reduce

// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// let even = [];
// a.forEach(function (item) {
//   if (item % 2 === 0) {
//     // console.log(item);
//     even.push(item);
//   }
// });
// even.pop();

let a = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
];
// if number is devided by 3 -> "fizz"
// if number is devided by 5 -> "buzz"
// if number is devided by 3 and 5 -> "fizzbuzz"

// result = [1, 2, "fizz", 4, "buzz", "fizz",,, 13, 14, "fizzbuzz", 16, 17, "fizz"]
// let result = [];
// a.forEach(function (i) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     result.push("FizzBuzz");
//   } else if (i % 3 === 0) {
//     result.push("Fizz");
//   } else if (i % 5 === 0) {
//     result.push("Buzz");
//   } else {
//     result.push(i);
//   }
// });

// console.log(result);

// let data = {
//   name: "Kuntal",
//   age: 24,
//   isAlcoholic: false,
//   favGame: ["PUBG", "FreeFire", "Call Of Duty"],
//   gfName: {
//     first: "Riya",
//     second: "Komala",
//     third: "Sundori",
//   },
// };
// // Kuntal whoes age is 24 loves PUBG, his second gf is Komala
// console.log(
//   `${data.name} whoes age is ${data.age} loves ${data.favGame[2]}, his second gf is ${data.gfName.second}`
// );

// let data = [
//   {
//     name: "Kuntal",
//     age: 24,
//   },
//   {
//     name: "Riya",
//     age: 19,
//   },
//   {
//     name: "Anirban",
//     age: 21,
//   },
//   {
//     name: "Tias",
//     age: 24,
//   },
//   {
//     name: "Mrinmoy",
//     age: 16,
//   },
// ];

// let res = [];
// data.forEach((item) => {
//   //   console.log(item.name + ": " + item.age);
//   if (item.age > 20) {
//     // console.log(item);
//     res.push(item);
//   }
// });
// let adult = data.map((item) => {
//   if (item.age > 20) {
//     return item;
//   }
//   //   let re = JSON.stringify(item) + "Not Adult";
//   return "Not Adult";
// });

// let adult = data.filter((item) => {
//   return item.age > 20;
// });
// let adult = data.filter((item) => item.age > 20);

// let all = data.map((item) => {
//   return item;
// });
// let all = data.map((item) => item);

// console.log(adult);
// console.log(all);

// function ageHandle(){

// }
// // arrow function
// const ageHandle = () => {

// }

// object or array  to string
// JSON.stringify(varableName);
// string to object or array
// JSON.parse(varableName)

let salary = [40000, 35000, 100000, 20000, 10000];
// let total = 0;
// for (let i = 0; i < salary.length; i++) {
//   total += salary[i];
// }

// first loop:                  0           40000 = 40000
// loop:                     40000          35000 = 75000
// loop:                     75000          100000 = 175000
// loop:                    175000          20000 = 195000
// loop:                    195000          10000 = 205000
// let total = salary.reduce((accumalator, currentValue) => {
//   return accumalator + currentValue;
// }, 0);
// // let total = salary.reduce(
// //   (accumalator, currentValue) => accumalator + currentValue,
// //   0
// // );

// console.log(total);

// Hoisting

printPlz();
function printPlz() {
  console.log("I'm printing myself");
}

// const printPlz = () => {
//   console.log("I'm printing myself");
// };

// console.log(aman);
// var aman;
