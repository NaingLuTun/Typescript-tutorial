// string

let greetings: string = "Francis" 
// this is how you can declare variables in typescript, but no need to use it if you don't have to, because Typescript automatically does it for you.

// "variable-name: type(all lower case) = value"

// these are also valid. Typescript automatically knows what type of data to assign to the variable by the detecting value.
let greetinsTwo = "Dominic"
let myNum = 6

/* greetings = 7  */
// shows error cannot reassign string type to a number value

/* myNum.toUpperCase()  */
// shows error cannot use function on type of data that doesn't have that function

console.log(greetings)

export {}


// number

/* number is for numbers like 42.JavaScript does not have a special runtime value for integers, so there's no equivalent to int or float - everything is simply number.

interview question: How do we define integers or float in typescript?
answer: We don't, we just call them numbers. */

let userId: number = 334466


// boolean

let isLoggedIn: boolean = false

