/* readonly is used for values that you don't want to change */

/* optional (?) is for values that can be included or not included when using the data type */

type User =  {
    readonly _id: number
    name: string
    email: string
    isActive: boolean
    creditCardInfo?: number
}

const myUser: User = {
    _id: 7,
    name: "Francis",
    email: "fran.com",
    isActive: false
}

type cardNumber = {
    cardNumber: number
}

type cardDate = {
    cardDate: string
}

/* You can also define a type by using other defined types */
type cardDetails = cardNumber & cardDate

myUser.name = "Dominic"

/* myUser._id = 5 */
/* You cannot change the value of readonly values */

export{}