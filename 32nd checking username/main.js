var currentUserNames = ["Ali", "Mada", "Ayaz", "Fayaz", "Hussain", "Tariq", "yasir"];
var new_users = ["Ahmed", "Manzoor", "Madad", "Hadad", "Ayaz"];
//using foreach method
new_users.forEach(function (new_users) {
    var new_usersLower = new_users.toLowerCase();
    //using some method
    var usernameTaken = currentUserNames.some(function (currentUserNames) { return currentUserNames.
        toLowerCase() === new_usersLower; });
    if (usernameTaken) {
        console.log("".concat(new_users, " you need to choose a diffrent username please because its already taken"));
    }
    else {
        console.log("".concat(new_users, " is the new memeber on board!!"));
        currentUserNames.push(new_users);
    }
});
console.log(new_users);
