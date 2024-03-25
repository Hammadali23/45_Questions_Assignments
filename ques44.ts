function makeSandwich(...ingredients: string[]): void {
    // Check if any ingredients were provided
    if (ingredients.length === 0) {
        console.log("Please specify at least one ingredient for your sandwich.");
        return;
    }

    // Create a summary of the sandwich order
    const summary = `Your sandwich will include: ${ingredients.join(', ')}.`;
    console.log(summary);
}

// Call the function with different numbers of ingredients
makeSandwich("ham", "cheese", "tomato");
makeSandwich("peanut butter", "jelly");
makeSandwich("turkey", "avocado", "bacon", "lettuce", "tomato")