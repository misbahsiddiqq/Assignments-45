// creting a gueslist array
let guestList = ["Misbah", "Ahmed", "Mohsin", "Faiza"];
//making list of guests who cant come
let wontcome = guestList[2];
//printing anme fo who cant come
console.log("He wont be able to make it");
// add or remove name in the array
guestList.splice(2, 2, "Mehreen");
//message print for a bigger table
console.log("Good news! we have got a bigger table for out dinner set up");
// adding a new guest on starting index of array
guestList.unshift("Ali");
//adding a value at the end of array index
guestList.push("Aniqa");
//ading a guest value at the middle index
let middleIndex = Math.floor(guestList.length / 2)
//adding a new guest to middle index array
guestList.splice(middleIndex, 0, "Osama");
//printing message for updated list of guests
console.log("updated list of our guest");
//sending a new invitiation message to all guests
guestList.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to have dinner with me?`));
