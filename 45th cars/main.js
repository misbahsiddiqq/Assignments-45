function createCar(manufacturer, modelName, _a) {
    var string = _a.key, any = _a.any;
    var car = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    // Add additional details to the car object
    for (var key in details) {
        car[key] = details[key];
    }
    return car;
}
// Call the function with required information and additional details
var carInfo = createCar("Toyota", "Corolla", { color: "red", year: 2023, optionalFeature: "Sunroof" });
console.log(carInfo);
