"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createCar(manufacturer, modelName, additionalProps) {
    // Initialize the car object with required properties
    let cars = { manufacturer, modelName };
    // If there are additional properties, add them to the car object
    if (additionalProps) {
        cars = { ...cars, ...additionalProps };
    }
    return cars;
}
// Example calls to the function
const car1 = createCar('Toyota', 'Corolla', { color: 'red', year: 2020 });
console.log(car1);
const car2 = createCar('Ford', 'Mustang', { color: 'blue', transmission: 'manual' });
console.log(car2);
const car3 = createCar('Tesla', 'Model S', { color: 'white', autopilot: 'true' });
console.log(car3);
