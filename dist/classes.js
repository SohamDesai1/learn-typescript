"use strict";
class Vehicle {
    constructor(color) {
        this.color = color;
        this.color = color;
    }
    drive() {
        console.log("chugga chugga");
    }
    startDrivingProcess() {
        this.drive();
    }
    honk() {
        console.log("beep");
    }
}
const car = new Vehicle("orange");
car.startDrivingProcess();
console.log(car.color);
