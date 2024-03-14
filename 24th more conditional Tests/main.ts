//define variables


//Trying conditional testing in strings variables
let apple ="apple";
let uppercaseApple ="APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["Orange", "Apple", "Banana"];

//test for equality and inequality
console.log("apple is wuqal to apple?");
console.log(apple == "apple");

console.log("\nis apple is not equal to apple?");
console.log(apple != "apple");

//tests using lowercase 
console.log("\nIS APPLE equals to apple after converting it to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");

console.log("\nIS APPLE not equals to apple after converting it to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");

//equals to and not equals to
console.log("\nis ten equal to twenty?")
console.log(ten== twenty );

console.log("\nis ten not equal to twenty?\n")
console.log(ten!= twenty );

//Greater and less than
console.log("\nis ten greater than twenty?\n")
console.log(ten > twenty );

console.log("\nis ten greater than zero?\n")
console.log(ten < 0 );

//greater than or equals to
console.log("\nIs ten greater than or equals to 5?");
console.log(10 >= 5);

//less than or equals to
console.log("\nIs ten less than or equals to 5?");
console.log(10 <= 5);

//tests using "and" & "or" operators
console.log("\nIs twenty is not equals to ten and twenty is greater than 10?");
console.log(twenty != ten && twenty > 10);

//using && "and"
console.log("\nIs twenty is equals to 10 and twenty is greater than 10?");
console.log(twenty == ten && twenty > 10);

//using ||"OR"
console.log("\ntwenty is greater than 50 OR twenty is equals to 20");
console.log(20 > 50 || 20 == 20);

//test weather an item is included in an array 
console.log("\nIsOrange included in the array?");
console.log(fruits.includes("Orange"));

//!Test weather an item is not in an array
console.log("\nIs orange does not include in the array?");
console.log(!fruits.includes("orange"));


