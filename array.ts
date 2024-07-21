
// This is defining just an empty array, you won't be able to add anything into this.
const justArray: [] = []

// Will not be able to add any data types other than strings into the array.
const stringArray: string[] = []
const anotherStringArray: Array<string> = [] // more common way

// Will not be able to add any data types other than number into the array.
const numberArray: number[] = []
const anotherNumberArray: Array<number> = [] // more commom way

// An array that accepts arrays of numbers.
const arrayOfNumberArrays: number[][] = [
    [123, 123, 123],
    [567, 567 ,567]
]

const arrayOfStrigsArrays: Array<Array<string>> =  []

arrayOfStrigsArrays.push(["asdf", "asdf", "asdf"])

console.log(arrayOfStrigsArrays)

export{}