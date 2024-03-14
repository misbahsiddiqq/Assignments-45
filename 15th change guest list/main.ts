let guestList = ["Misbah", "Fiza", "Noman", "Mohsin"];

let dontcome = guestList [1];

console.log(dontcome, "nahi askta");

guestList.splice(1, 1, "Amir");

guestList.forEach(guest => console.log(`Salam ${guest} Please join us on 9 march for a blasting wedding at Rani lawn.`));
