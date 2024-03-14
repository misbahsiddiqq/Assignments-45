var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function makeGreat(magicians) {
    // Make a copy of the original array
    var greatMagicians = __spreadArray([], magicians, true);
    // Modify the copied array by adding "the Great" to each magician's name
    for (var i = 0; i < greatMagicians.length; i++) {
        greatMagicians[i] += " the Great";
    }
    // Return the modified array
    return greatMagicians;
}
function showMagicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
var magicians = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
// Call makeGreat() with a copy of the original array
var greatMagicians = makeGreat(__spreadArray([], magicians, true));
// Show the original array
console.log("Original magicians:");
showMagicians(magicians);
// Show the modified array
console.log("\nGreat magicians:");
showMagicians(greatMagicians);
