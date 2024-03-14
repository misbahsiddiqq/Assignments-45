let currentUserNames = ["Ali", "Mada", "Ayaz", "Fayaz", "Hussain", "Tariq", "yasir"]
let new_users= ["Ahmed", "Manzoor", "Madad", "Hadad", "Ayaz"];

//using foreach method
new_users.forEach(new_users=>{
    let new_usersLower = new_users.toLowerCase()

//using some method

let usernameTaken = currentUserNames.some(currentUserNames => currentUserNames.
    toLowerCase()=== new_usersLower);
    if(usernameTaken){
        console.log(`${new_users} you need to choose a diffrent username please because its already taken`);
    }
else {
    console.log(`${new_users} is the new memeber on board!!`)
    currentUserNames.push(new_users)
}    
});

console.log(new_users);

