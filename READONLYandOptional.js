"use strict";
/* readonly is used for values that you don't want to change */
Object.defineProperty(exports, "__esModule", { value: true });
const myUser = {
    _id: 7,
    name: "Francis",
    email: "fran.com",
    isActive: false
};
myUser.name = "Dominic";
