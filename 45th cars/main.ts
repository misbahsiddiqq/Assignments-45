function createCar(manufacturer: string, modelName: string, { key: string , any }): { manufacturer: string, modelName: string, [key: string]: any } {
    const car: { manufacturer: string, modelName: string, [key: string]: any } = {
        manufacturer,
        modelName
    };

    // Add additional details to the car object
    for (const key in details) {
        car[key] = details[key];
    }

    return car;
}

// Call the function with required information and additional details
const carInfo = createCar("Toyota", "Corolla", (color: "red", year: 2023, optionalFeature: "Sunroof" });
console.log(carInfo);
