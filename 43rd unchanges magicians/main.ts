function makeGreat(magicians: string[]): string[] {
    // Make a copy of the original array
    const greatMagicians: string[] = [...magicians];
    
    // Modify the copied array by adding "the Great" to each magician's name
    for (let i = 0; i < greatMagicians.length; i++) {
        greatMagicians[i] += " the Great";
    }
    
    // Return the modified array
    return greatMagicians;
}

function showMagicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

const magicians: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];

// Call makeGreat() with a copy of the original array
const greatMagicians: string[] = makeGreat([...magicians]);

// Show the original array
console.log("Original magicians:");
showMagicians(magicians);

// Show the modified array
console.log("\nGreat magicians:");
showMagicians(greatMagicians);