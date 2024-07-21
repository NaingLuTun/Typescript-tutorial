// any

// any data type is when you don't assign a type or a value to a variable when you first define it.

// Don't use any, because when you're using any you're basically saying I don't want Typescript to check the type of the variable. This basically defeats the purpose of using Typescript.

// any example
let hero;

function getHero() {
    return "Thor"
}

hero = getHero()

console.log(hero)

// how you should actually write the above code
let heroTwo: string;

function getHeroTwo() {
    return "Hulk"
}

heroTwo = getHeroTwo()

console.log(heroTwo)



export {}