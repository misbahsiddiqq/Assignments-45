var guestList = ["Misbah", "Fiza", "Noman", "Mohsin"];
var dontcome = guestList[1];
console.log(dontcome, "nahi askta");
guestList.splice(1, 1, "Amir");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, " Please join us on 9 march for a blasting wedding at Rani lawn.")); });
