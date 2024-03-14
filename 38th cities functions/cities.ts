function describe_city(nameOfCity: string, country: string = " Pakistan"){
return ` ${nameOfCity} is in ${country}`
}

let city1 = describe_city("Karachi")
let city2 = describe_city("Isb")
let city3 = describe_city("Lahore")
let city4 = describe_city("Larkana")
let city5 = describe_city("Junagadh", "india")
let city6 = describe_city("Nawabshah")
let city7 = describe_city("Peshawar");

console.log(city1)
console.log(city2)
console.log(city3)
console.log(city4)
console.log(city5)
console.log(city6)
console.log(city7);