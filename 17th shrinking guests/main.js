// creting a gueslist array
var guestList = ["Misbah", "Ahmed", "Mohsin", "Faiza"];
//making list of guests who cant come
var wontcome = guestList[2];
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
var middleIndex = Math.floor(guestList.length / 2);
//adding a new guest to middle index array
guestList.splice(middleIndex, 0, "Osama");
//printing message for updated list of guests
console.log("updated list of our guest");
//sending a new invitiation message to all guests
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would you like to have dinner with me?")); });
// printing a message for only two guests
console.log("Unfortunately, the new dinner table wont be arriving on time, thus i can only invite two people on dinner with me");
//using while-loop to remove guest from the array until two names remaining
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    console.log("Sorry ".concat(removeGuest, ", I cant invite you to dinner"));
}
//inviting those two whos still invited
console.log("Invitation to the last two guests");
guestList.forEach(function (lasttwo) { return console.log("luckily ".concat(lasttwo, ", You still are invited to the dinner")); });
// removing last two guests as well
guestList.pop();
guestList.pop();
console.log("Empty list", guestList);
