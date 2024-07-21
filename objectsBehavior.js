"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User = {
    name: "Francis",
    email: "francislu7924@gmail.com",
    isActive: true
};
// The error you're encountering in TypeScript is due to the way you are trying to destructure and type the parameters in the createUser function. TypeScript expects you to define the type of the object being destructured, not the individual properties directly in the parameter list.
/* const createUser = ({name: string, isPaid: boolean}) => {

} */
// This is how you define the type of objects values.
const createUser = ({ name, isPaid }) => {
};
/* createUser({name: "Francis", isPaid: true, email: "francis.com"})  */
// this will show an error since you're passing more values than required.
// but there's a weird behavior with objects
const newUser = { name: "Dominic", isPaid: false, email: "dominic.com" };
createUser(newUser);
// If you use the function like this, no error will be shown. You don't want to use the function like this. This is just a demostration of weird behavior of objects in Typescript.
/* this ensures the function to return an object with values in it. */
const createCourse = () => {
    return { name: "Angular", price: 3 };
};
