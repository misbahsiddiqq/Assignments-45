function orderSandwich(...items: string[]): void {
    console.log("Sandwich Order:");
    if (items.length === 0) {
        console.log(" - Just bread, huh? That's a plain sandwich!");
    } else {
        for (const item of items) {
            console.log(` - ${item}`);
        }
    }
    console.log("--------------------");
}

// Call the function with different numbers of arguments
orderSandwich("Ham", "Cheese", "Lettuce", "Tomato");
orderSandwich("Turkey", "Swiss", "Mayo");
orderSandwich("PB", "J");