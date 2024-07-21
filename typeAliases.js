"use strict";
// You can name the type of the data like this
Object.defineProperty(exports, "__esModule", { value: true });
const card = ({ cardDate, cardId }) => {
    console.log(cardId);
};
const cardInfo = { cardDate: "7 july 2023", cardId: 123 };
card(cardInfo);
const createUser = (user) => {
    /* return {}
    will show an error since the function expects you to return the "User" data type*/
    return { name: "", email: "", isActive: true };
};
/* When using the function, the arguments passed in have to be "User" data type. */
const userInfo = (user) => {
    console.log("The user name is: " + user.name);
    console.log("Email: " + user.email);
    console.log("Active: " + user.isActive);
};
userInfo({ name: "Francis", email: "fran.com", isActive: true });
// tuple type
const userArr = (user) => {
    console.log(user[0]);
    console.log(user[1]);
    console.log(user[2]);
};
userArr(["Francis", 19, false]);
