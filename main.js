// //No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
var userName1 = ["Misbah12", "Mohsin12", "Ali12", "Admin", "Ahmed12", "Mehreen12"];
//to remove or emmpty array
userName1 = [];
console.log(userName1);
if (userName1.length > 0) {
    for (var i = 0; i < userName1.length; i++)
        if (userName1[i] == "Admin") {
            console.log("Hello ".concat(userName1[i], " would you like to see a status report?"));
        }
        else {
            console.log(("\"Hello ".concat(userName1[i], " thank you for logging in again.\"")));
        }
}
else {
    console.log("We need to find some users");
}
