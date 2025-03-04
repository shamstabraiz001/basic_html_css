//Use indexOf() to find the position of a specific color in your array.

let colors = ["red", "blue", "green", "yellow", "orange"];
let colorToFind = "green";
let position = colors.indexOf(colorToFind);
if (position !== -1) {
    console.log(`The color ${colorToFind} is found at index: ${position}`);
} else {
    console.log(`The color ${colorToFind} is not found in the array.`);
}

//Use concat() to combine your colors array with another array of 3 more colors.

let allColors = colors.concat("purple", "pink", "brown");

console.log(allColors);

//Use push() to add a new color to the end of your array.
colors.push("black");
console.log(colors);


//Use pop() to remove the last color from your array.
let lastColor = colors.pop();
console.log("pop:", colors);
console.log("removed Color:", lastColor);


// shift() to remove the first color from your array.
let firstColor = colors.shift();
console.log("shift:", colors);
console.log("removed Color:", firstColor);


//unshift() to add a new color to the beginning of your array.
colors.unshift("white");
console.log("unshift:", colors);


// Use slice() to create a new array with the 2nd and 3rd elements from your colors array
let sliceColor = colors.slice(2, 3);
console.log("slice:", sliceColor);
console.log(colors);


//Use splice() to remove 2 elements from the middle of your array and replace them with 3 new colors.
colors.splice(3, 2, "sky-blue", "dark", "light-blue");
console.log("splice:", colors);
let numbers = [5, 8, 12, 3, 15, 7, 3, 11, 13, 26, 3];


//Create an array of numbers and use find() to locate the first number greater than 10.
let findNumbers = numbers.find((item) => item > 10);
console.log("find:", findNumbers);
//Use filter() to create a new array containing only even numbers from your numbers array.
let evenNumbers = numbers.filter((item) => item % 2 === 0);
console.log("filter:", evenNumbers);
// Loops and Iteration
// Use a traditional for loop to log each color in your array along with its index.
// Use forEach() to log each color in uppercase.
// Using the given webDevelopment array:
// Use filter() to separate "basic" and "Advance" students
// Use map() to extract just the names from each filtered array
let webDevelopment = [
    { Name: "Daniyal", class: "basic" },
    { Name: "saliha", class: "basic" },
    { Name: "Sameer", class: "Advance" },
    { Name: "Sartaj", class: "Advance" },
    { Name: "Naji", class: "basic" },
    { Name: "shoaib", class: "Advance" },
    { Name: "Mumtaz", class: "basic" }
];
let Basic = webDevelopment.filter(item => item.class === "basic");
console.log(Basic);
let Advance = webDevelopment.filter(item => item.class === "Advance");
console.log(Advance);
let std = webDevelopment.map(items => items.class.basic === "name");
console.log(std);