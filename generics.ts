// Generics

// Generics allow you to create reusable components that can work with any data type. By using generics you can define functions, classes and interfaces that can work with variety of types while maintaining strong type check.

// This how you use generics
// This <Type> syntax is the generic, it insures that the function returns the same data type as the arguments passed in.

const productInfo = <Type>(val: Type): Type => {
    return val
}

interface IPad {
    deviceType: string,
    deviceId: number
}

interface Bottle {
    bottleType: string,
    isMadeWithStainlessSteel: boolean,
}

productInfo<IPad>({deviceType: "mobliePhone", deviceId: 223})
productInfo<Bottle>({bottleType: "stanley cup", isMadeWithStainlessSteel: true})


// In react people will often write it like this <T,> to make sure other developers know it is a generic and not a jsx syntax.
const searchProducts = <T,>(products: Array<T>): T => {
    return products[2]
}

const simpleProductsArray = ["skin care", "electronics", "foods"]

const searchProductsWithSimpleArray = searchProducts<string>(simpleProductsArray)


interface Products {
    id: number,
    type: string,
    hasDiscount: boolean,
}

const products: Array<Products> = [
    {id: 1, type: "skin care", hasDiscount: true },
    {id: 2, type: "electronics", hasDiscount: true },
    {id: 1, type: "pet foods", hasDiscount: true },

]
const searchProductsWithInterface = searchProducts<Products>(products)

// You can use multiple generics like this too.

interface Database  {
    connection: string,
    userName: string,
    password: string,
}

const databaseFunction = <T, U extends Database>(valueOne: T, valueTwo: U): object => {
    return {
        valueOne,
        valueTwo
    }
}

databaseFunction("testOne", {connection: "testConnection", userName: "testUserName", password: "testPw"})

