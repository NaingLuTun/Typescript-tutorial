// Enums


// This is how you define a enum.
// The value of first variable in this enum is going to be 0 by default and the following variables are gonna have values in accending order.
// But you can assign any value to the variables inside enums.
enum SeatChoice {
    asile = "asile seat",
    /* If you set the variable to a string you have to also give the variables below it values. */
    middle = 8,
    /* If you give a custom number value to it like this, the variable's values below will automatically follow in accending order */
    window
}

// Defining enums like above is okay but it will create complex code in the javascript. So add a const to simplify the javascript code.

const enum FoodChoice {
    appetizer = "soy glazed chicken",
    mainDish = "medium rare steak",
    dessert = "chocolate cake"
}


const airSeat = SeatChoice.asile 
const meal = FoodChoice.mainDish

console.log(airSeat) // "asile seat"
console.log(meal) // "medium rare steak"
