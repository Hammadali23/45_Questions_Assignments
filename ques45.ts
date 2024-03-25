interface CarInfo {
    manufacturer: string;
    modelName: string;
    [key: string]: string | number; // This allows for an arbitrary number of additional properties with string or number values
}

function createCar(manufacturer: string, modelName: string, additionalProps?: Partial<CarInfo>): CarInfo {
    // Initialize the car object with required properties
    let cars: CarInfo = { manufacturer, modelName };

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
