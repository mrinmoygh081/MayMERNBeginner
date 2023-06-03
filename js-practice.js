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
var age = 19;
if (age > 18) {
  console.log("complete adult");
} else if (age == 18) {
  console.log("just become an adult");
} else {
  console.log("kid");
}
