"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// This is defining just an empty array, you won't be able to add anything into this.
const justArray = [];
// Will not be able to add any data types other than strings into the array.
const stringArray = [];
const anotherStringArray = []; // more common way
// Will not be able to add any data types other than number into the array.
const numberArray = [];
const anotherNumberArray = []; // more commom way
// An array that accepts arrays of numbers.
const arrayOfNumberArrays = [
    [123, 123, 123],
    [567, 567, 567]
];
const arrayOfStrigsArrays = [];
arrayOfStrigsArrays.push(["asdf", "asdf", "asdf"]);
console.log(arrayOfStrigsArrays);
