"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let magicians = [
    "David Blaine",
    "David Copperfield",
    "Harry Houdini",
];
function show_magicianss(magicians) {
    magicians.forEach((element) => {
        console.log(element);
    });
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great " + magicians[i];
    }
}
make_great(magicians);
show_magicianss(magicians);
