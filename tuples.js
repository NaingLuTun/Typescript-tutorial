"use strict";
// Tuples
Object.defineProperty(exports, "__esModule", { value: true });
// This is just a union type
// In this array you can add any strings and numbers at any index
const user = [2, "batman"];
// This is a tuple
// You can only add a string and a number, and only in this order.
const newUser = ["hello", 3];
newUser[0] = "Hi";
// But you can use array functions on the tuples
// So you have to be cautious about this, since this will mess up the concept of tuples.
newUser.push("haha");
console.log(newUser);
