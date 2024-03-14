
//making an array of countries in non alphabetic order into original order
let countriestoVisit:string[] = ["China", "Denmark", "Brazil", "Argentine"];
console.log("Original array:", countriestoVisit);
//print the message in alphabetic order wihout modifying the real array
console.log("Alphabetical order", [...countriestoVisit].sort());
//show that the array is still in its original order
console.log("still in original order:", countriestoVisit);
//print an array in reverse order without modifyiig the actual array
console.log("reverse order", [...countriestoVisit].reverse());
//show that the array is still in its original order
console.log("still in original order:", countriestoVisit);
//we have changed teh original array now
console.log("original array Revered:", countriestoVisit.reverse());
//print the array to show that its back to its original order
console.log("Back to original order:", countriestoVisit.reverse());
//print the message to show its order has been changed into alphabetic order
console.log("sorted in alphabetical order:", countriestoVisit.sort());
// finally printing again back into reverse mode
console.log("original array Revered again:", countriestoVisit.reverse());



