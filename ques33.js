"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let ordinalnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < ordinalnumbers.length; i++) {
    if (ordinalnumbers[i] === 1) {
        console.log("1st");
    }
    else if (ordinalnumbers[i] === 2) {
        console.log("2nd");
    }
    else if (ordinalnumbers[i] === 3) {
        console.log("3rd");
    }
    else if (ordinalnumbers[i] === 4) {
        console.log("4th");
    }
    else if (ordinalnumbers[i] === 5) {
        console.log("5th");
    }
    else if (ordinalnumbers[i] === 6) {
        console.log("6th");
    }
    else if (ordinalnumbers[i] === 7) {
        console.log("7th");
    }
    else if (ordinalnumbers[i] === 8) {
        console.log("8th");
    }
    else if (ordinalnumbers[i] === 9) {
        console.log("9th");
    }
}
console.log("\n");
//SECOND WAY
ordinalnumbers.forEach(number => {
    let suffix = "th";
    if (number == 1) {
        suffix = "st";
    }
    else if (number == 2) {
        suffix = "nd";
    }
    else if (number == 3) {
        suffix = "rd";
    }
    console.log(`${number}${suffix}`);
});
