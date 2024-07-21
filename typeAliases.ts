// You can name the type of the data like this

// This is called object type annotation.
// This is useful when you have multiple values like this, you can just put it in a type aliases and just use it's name.
type User = {
    name: string
    email: string
    isActive: boolean
}

// NOT RECOMMENDED JUST EXAMPLES
type Mystring = string
type Mynum = number

// This is called a tuple
// You can only put in values with this specific order.
type Myarr = [string, number, boolean]

type cardNumber = {
    cardId: number
}

type cardDate = {
    cardDate: string
}
/* You can also define a type by using other defined types */
type cardDetails = cardNumber & cardDate

const card = ({cardDate, cardId}: cardDetails) => {
    console.log(cardId)
}

const cardInfo = {cardDate: "7 july 2023", cardId: 123}

card(cardInfo)

const createUser = (user: User): User => {
    /* return {} 
    will show an error since the function expects you to return the "User" data type*/

    return {name: "", email: "", isActive: true}
}

/* When using the function, the arguments passed in have to be "User" data type. */
const userInfo = (user: User) => {
    console.log("The user name is: " + user.name)
    console.log("Email: " + user.email)
    console.log("Active: " + user.isActive)
}

userInfo({name: "Francis", email: "fran.com", isActive: true})


// tuple type
const userArr = (user: Myarr) => {
    console.log(user[0])
    console.log(user[1])
    console.log(user[2])
}

userArr(["Francis", 19, false])

export {}