// This is how you use generics with classes

interface Quiz {
    name:string,
    type: string,
}

interface Course {
    name: string,
    subject: string,
}

class Sellable<T> {
    constructor(private data: T){}

    set type(newData: T) {
        this.data = newData
    }

    get type(): T {
        return this.data
    }
}

const sellableProducts = new Sellable("fruits")
sellableProducts.type = "electronics"

// sellableProducts.type = 34  (You can't do this now, since you set the initial type to be string)

console.log(sellableProducts.type)

// With interface
const sellableQuiz = new Sellable<Quiz>({name: "react quiz", type: "react"})

console.log(sellableQuiz.type)