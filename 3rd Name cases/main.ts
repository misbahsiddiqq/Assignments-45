// lower case

let personName = "Misbah siddiq";

console.log("lowercase:", personName.toLowerCase());

// upper case


console.log("uppercase:", personName.toLocaleUpperCase());

// titlecase

console.log("titlecase;",personName.replace(/\bw/g,c => c.toUpperCase()))