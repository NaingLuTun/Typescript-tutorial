"use strict";
// Enums
// This is how you define a enum.
// The value of first variable in this enum is going to be 0 by default and the following variables are gonna have values in accending order.
// But you can assign any value to the variables inside enums.
var SeatChoice;
(function (SeatChoice) {
    SeatChoice["asile"] = "asile seat";
    /* If you set the variable to a string you have to also give the variables below it values. */
    SeatChoice[SeatChoice["middle"] = 8] = "middle";
    /* If you give a custom number value to it like this, the variable's values below will automatically follow in accending order */
    SeatChoice[SeatChoice["window"] = 9] = "window";
})(SeatChoice || (SeatChoice = {}));
const airSeat = SeatChoice.asile;
const meal = "medium rare steak" /* FoodChoice.mainDish */;
console.log(airSeat); // "asile seat"
console.log(meal); // "medium rare steak"
