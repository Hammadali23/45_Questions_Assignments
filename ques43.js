"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let magiciansss = [
    "David Blaine",
    "David Copperfield",
    "Harry Houdini",
];
let copymagician = [...magiciansss];
function show_magiciansss(magicians) {
    magicians.forEach((element) => {
        console.log(element);
    });
}
function Make_great(copymagician) {
    for (let i = 0; i < copymagician.length; i++) {
        copymagician[i] = "The Great " + copymagician[i];
    }
}
show_magiciansss(magiciansss);
console.log('\nThis is my modified array');
Make_great(copymagician);
show_magiciansss(copymagician);
