function describe_city(nameOfCity, country) {
    if (country === void 0) { country = " Pakistan"; }
    return " ".concat(nameOfCity, " is in ").concat(country);
}
var city1 = describe_city("Karachi");
var city2 = describe_city("Isb");
var city3 = describe_city("Lahore");
var city4 = describe_city("Larkana");
var city5 = describe_city("Junagadh", "india");
var city6 = describe_city("Nawabshah");
var city7 = describe_city("Peshawar");
console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
console.log(city5);
console.log(city6);
console.log(city7);
