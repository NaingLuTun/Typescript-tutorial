"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// This ensures that the function returns a number and not other types of data
const addTwo = (num) => {
    /* return "hello"
    this will show an error since you set the function to only return numbers */
    return num + 2;
};
/* const getValue = (myVal: number): string => {
    if(myVal > 5) {
        return true // will show an error since this is not returning a string.
    }
    return "200 ok"
} */
const getHello = (user) => {
    return `Hello ${user}`;
};
console.log(getHello("francis"));
const heroes = ["Morphling", "Shadow Fiend", "Lifestealer"];
/* if you check the data type of "hero" parameter Typescript already knows what data type it is. */
/* (hero): string ensures that the map function is returning only strings. You don't do it like this if you're gonna return other data types */
const avaHeroes = heroes.map((hero) => {
    return `${hero}: available`;
});
/* If you want to console log and don't want to return a value, use void, because console.log() returns void */
const consoleError = (err) => {
    console.log(err);
};
/* If you want to a function to handle errors and not return any value, you can use never, so that the Typescript knows this function never returns anything. */
const handleError = (err) => {
    throw new Error(err);
};
console.log(avaHeroes);
