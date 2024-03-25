"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeeShirt(size = "large", message = "I love TypeScript") {
    console.log(`Making a ${size} shirt with the message: '${message}'.`);
}
//Large
makeeShirt();
//Medium 
makeeShirt("medium");
//Small with different message
makeeShirt("small", "Hello, World!");
