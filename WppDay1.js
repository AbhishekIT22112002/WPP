// Write a JavaScript program to display the current day and time in the following format.

// Sample Output : 

// Today is : Tuesday.
// Current time is : 10 PM : 30 : 38


const date = new Date();

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const day = days[date.getDay()];

console.log(`Today is : ${day}.`);

const hours = date.getHours() % 12 === 0? 12 : date.getHours() % 12;

const minutes = date.getMinutes();

const seconds = date.getSeconds();

const AmPm = date.getHours() >= 12? "PM" : "AM";

console.log(`Current time is : ${hours} ${AmPm} : ${minutes} : ${seconds}.`);