"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let current_users = ["Asad", "Hammad", "Abdullah", "Umair", "Bilal", "Hamza"];
let new_users = ["Bilal", "Hamza", "Ahmad", "Rashid", "Umer", "Javed"];
const currentUsersLower = current_users.map(user => user.toLowerCase());
new_users.forEach(user => {
    const lowercaseUser = user.toLowerCase();
    if (currentUsersLower.includes(lowercaseUser)) {
        console.log(`Sorry, the username '${user}' is already taken. Please choose a different one.`);
    }
    else {
        console.log(`The username '${user}' is available.`);
    }
});
