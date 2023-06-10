// console.log("Hello world!");

// data type: string, integer, boolean, bigInt, undefined, null, array, object
// variables
var name = "Mrinmoy Ghosh";
var age = 26;
var isDeveloper = false;
var salary = 999999999999;
var isGF;
var isGoodLooing = null;
//index          0        1     2   3
var hobbies = ["chess", "food", 7, true];
// array - length: 4
// console.log(hobbies[1]);
var myProfile = {
  name: "Mrinmoy",
  age: 26,
  hobbies: ["chess", "food2", 7, true],
  nextData: {
    name: "Santanu",
    age: 26,
    hobbies: ["chess", "great", 7, "player"],
  },
};

// Santanu is great chess player
// var str1 = `${myProfile.nextData.name} is ${myProfile.nextData.hobbies[1]} ${myProfile.nextData.hobbies[0]} ${myProfile.nextData.hobbies[3]}`;
// var str =
//   myProfile.nextData.name +
//   " is " +
//   myProfile.nextData.hobbies[1] +
//   " " +
//   myProfile.nextData.hobbies[0] +
//   " " +
//   myProfile.nextData.hobbies[3];
// console.log(str);

// array of objects
// var customers = [
//   {
//     customerName: "Mrinmoy",
//     customerType: "Online",
//     duePayment: 100,
//   },
//   {
//     customerName: "Mrinmoy",
//     customerType: "Online",
//     duePayment: 100,
//   },
//   {
//     customerName: "Mrinmoy",
//     customerType: "Online",
//     duePayment: 100,
//   },
//   {
//     customerName: "Mrinmoy",
//     customerType: "Online",
//     duePayment: 100,
//   },
// ];

// 2D Array: Array of Array
// var data1 = [
//   [1, 2, 3], // 0
//   [4, 5, 6], // 1
//   [8, 9, 10], // 2
//   //0 1   2
// ];
// console.log(data1[1][2]);

var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // return odd numbers : HW
var odd = [1, 3, 5, 7, 9];

// if age >= 18 "adult" : "kid"
// var age = 19;
// if (age > 18) {
//   console.log("complete adult");
// } else if (age == 18) {
//   console.log("just become an adult");
// } else {
//   console.log("kid");
// }

// looping : for, while, do-while, forEach, map, filter, reduce
// 1 3 5

// if number is devided by 3 -> "fizz"
// if number is devided by 5 -> "buzz"
// if number is devided by 3 and 5 -> "fizzbuzz"
// 1 2 fizz 4 buzz 5 fizz ... 14 fizzbuzz

// var a = 1;
// while (a <= 20) {
//   if (a % 5 === 0 && a % 3 === 0) {
//     console.log("FizzBuzz");
//   } else if (a % 3 === 0) {
//     console.log("Fizz");
//   } else if (a % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(a);
//   }
//   a++;
// }

// HW apply FizzBuzz in for loop
// for (var a = 1; a <= 10; a += 2) {
//   console.log(a);
// }

// var a = 1;
// do {
//   console.log(a);
//   a++;
// } while (false);

// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// a.forEach(function (item) {
//   console.log(item);
// });

// let students = [
//   {
//     name: "John",
//     age: 21,
//   },
//   {
//     name: "Mrinmoy",
//     age: 12,
//   },
//   {
//     name: "Utsa",
//     age: 35,
//   },
//   {
//     name: "Biru",
//     age: 17,
//   },
// ];
// let adults = [];

// students.forEach(function (item) {
//   // console.log(item);
//   if (item.age >= 18) {
//     adults.push(item.name);
//   }
// });
// console.log(adults);

// function writing(name) {
//   console.log(name + " is good developer"); // concatenation
// }
// // console.log(students.length);
// for (var i = 0; i < students.length; i++) {
//   writing(students[i].name);
// }

// JS with ES6

// variables
// var  -  let -  const

// let vs const

// const c = 0;

// var vs let
// var works in global scope but let only works in block scope
// if (true) {
//   let a = 10;
// }
// console.log(a);

// Hoisting;
// function something1(name) {
//   console.log("Hello world!", name);
// }

// something("Ayan");

// // arrow function
// const something = (name) => {
//   console.log("Hello world!" + name);
// };

// turnary operators
// if (1 == 0 && 2 == 2) {
//   console.log("statement is true");
//   if (true) {
//     console.log("second statement is true");
//   }
// } else {
//   console.log("statement is false");
// }

// turnary operators=   conditions ? "true statements" : "false statements"
// 1 == 1 && 2 == 2
//   ? console.log("statement is true")
//   : console.log("statement is false");

// const something = () => {
//   console.log("statement is true");
// };

// something();

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result = [];

// forEach function return nothing
// data.forEach(function (item) {
//   if (item % 2 == 1) {
//     result.push(item);
//   }
// });
// console.log(result);

// console.log("================================================");

// map function return an array
let newVal = data.map((item) => {
  if (item % 2 == 0) {
    return "Fizz";
  }
  return item;
});
console.log(newVal);

// let students = [
//   {
//     name: "John",
//     age: 21,
//   },
//   {
//     name: "Mrinmoy",
//     age: 12,
//   },
//   {
//     name: "Utsa",
//     age: 35.5,
//   },
//   {
//     name: "Biru",
//     age: 17.5,
//   },
// ];

// let names = [];
// students.map((item) => {
//   names.push(item.name);
// });
// console.log(names);

// const adults = students.filter((item) => item.age >= 18);
// console.log(adults);

// const earnings = [20000, 30000, 25000, 50000, 100000, 10];
// /// 0           20000 = 20000
// /// 20000       30000 = 50000
// /// 50000       25000 = 75000
// /// 75000       50000 = 125000
// /// 125000      100000 = 225000
// /// 225000      10     = 225010
// let ans = earnings.reduce((accumalator, currentValue) => {
//   // console.log(currentValue);
//   return accumalator + currentValue;
// }, 5000);
// console.log(ans);
