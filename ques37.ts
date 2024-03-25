function makeeShirt(size: string = "large", message: string = "I love TypeScript"): void {
    console.log(`Making a ${size} shirt with the message: '${message}'.`);
}

//Large
makeeShirt();

//Medium 
makeeShirt("medium");

//Small with different message

makeeShirt("small", "Hello, World!");
