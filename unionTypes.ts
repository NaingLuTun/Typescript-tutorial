// Union type

// You can define union types like this with a pipe "|", you can add as many types as you like but not recommended since you want to be as strict as possible in typescript.
let score: number | string  = 33

// This is ok.
score = "23"

// This is not ok.
/* score = {} */

type User = {
    userName: string,
    userId: number,
}

type Admin = {
    adminName: string,
    adminId: number,
}


// You can use union type alias like this.

// the Francis variable can use either User type, or Admin type
let Francis: User | Admin = {
    userName: "Francis",
    userId: 3
}

Francis = {
    adminName: "Francis",
    adminId: 4
}

// Union type in a function
const randomPassword = (pw: number | string) => {
    // ps.toUpperCase() 
    // You can't directly do this even tho we define union type as number or string.

    // What you should do instead is:
    if(typeof pw === "string"){
        console.log(pw.toUpperCase())
    } else {
        console.log(pw * 20)
    }
}

randomPassword("baldeagle")
randomPassword(12345)



// Union type with type alias used in a function
const getDataId = (data: User | Admin) => {
    if ('userName' in data && 'userId' in data) {
        console.log(`data name is ${data.userName}`)
        console.log(`data id is ${data.userId}`)
    } else if ('adminName' in data && 'adminId' in data) {
        console.log(`data name is ${data.adminName}`)
        console.log(`data id is ${data.adminId}`)
    }
}

// Type assertion can be used to shorten it.

const getDataIdAssertionMethod = (data: User | Admin) => {
    console.log(`data name is ${(data as User).userName || (data as Admin).adminName}`)
    console.log(`data id is ${(data as User).userId || (data as Admin).adminId}`)
}

getDataId({userName: "Francis", userId: 1})
getDataIdAssertionMethod({adminName: "Francis", adminId: 5})

// array with union type
// This is how you define an array that can use both strings and number,
// you can add as many types as you like, but keep in mind that code needs to be strict in typescript.
const peopleCount: (string | number | boolean)[] = ["2", 3, "5", 7, true]

// This is ok but, will not work as you intended to. This sytax is saying, this is either an array with only "strings" in it or an array with only "numbers" in it.
const peopleCountTwo: string[] | number[] = [1, 3 ,4, 5]
export {}


