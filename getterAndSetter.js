"use strict";
// getter and setter
Object.defineProperty(exports, "__esModule", { value: true });
// setter = special method that makes a property writeale
// getter = special method that makes a property readable
// validate and modify a value when reading/writing a property
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    // setter must have one parameter and must set a type to it.
    set setWidth(newWidth) {
        if (newWidth > 0) {
            this.width = newWidth;
        }
        console.error("Width must be a positive number");
    }
    set setHeight(newHeight) {
        if (newHeight > 0) {
            this.height = newHeight;
        }
        console.error("Height must be a positive number");
    }
    // getter method must return something
    get getWidth() {
        return this.width;
    }
    get getHeight() {
        return this.height;
    }
    get area() {
        return this.width * this.height;
    }
}
const rectangle = new Rectangle(12, 22);
console.log(rectangle.getWidth);
console.log(rectangle.getHeight);
console.log(rectangle.area);
