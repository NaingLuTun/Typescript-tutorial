// You write function parameters like this because it insure that the arguments will be the same type.

function addTwo(num: number) {
    /* num.toUpperCase(): this will show an error because you cannot use string functions on number data type.*/

    /* return "hello"  
    this is completely valid because it has nothing to do with the parameter's data type. But this is bad use.*/

    return num + 2
}

const getUpper = (val: string) => {
    return val.toUpperCase()
}

const signUpUser = (name: string, email: string, isPaid: boolean) => {
    console.log(`Username: ${name}`)
    console.log(`Email: ${email}`)
    console.log(`Is a paid user: ${isPaid}`)
}

// with default value
const loginUser = (name: string, email: string, isPaid: boolean = false) => {
    console.log(`Username: ${name}`)
    console.log(`Email: ${email}`)
    console.log(`Is a paid user: ${isPaid}`)
}

const myValue = addTwo(6) // this is completely valid, just to know.

addTwo(5)

// addTwo("5") an error will be shown if you call the function like this, because you set the function parameter to be number.

getUpper("francis the achiever")

// getUpper(3) an error will be show if you call the function like this, because you set the function parameter to be string.

signUpUser("Francis", "francislu7924@gmail.com", true)

/* signUpUser(123, true, "yes") 
or signUpUser("Francis", "francislu7924@gmail.com") 

an error will be show if you call the function like this, because you are using the wrong types of arguments and you only put 2 arguments when the function is expecting 3. */

loginUser("Francis", "francislu7924@gmail.com") 
// this is okay because you gave isPaid parameter a default value.

export {}