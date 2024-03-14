// lower case
var personName = "Misbah siddiq";
console.log("lowercase:", personName.toLowerCase());
// upper case
console.log("uppercase:", personName.toLocaleUpperCase());
// titlecase
console.log("titlecase;", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
