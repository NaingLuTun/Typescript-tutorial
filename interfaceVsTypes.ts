// Interface vs Types

type Hero = {
    heroName: string,
    heroId: number,
    heroPower: number,
    heroUltimateAvailable: boolean
}

// Extending types

type Moskov = Hero & {
    passive: string
}

// You don't have to give all properties of the type when you are defining a function parameter. You can just give it the properties you're going to use. (not related to interface vs types)
const getHero = ({heroName}: Moskov) => {
    console.log(heroName) 
}

// You have to give all properties of the type when calling the function. (not related to interface vs types)
getHero({heroName: "Moskov", heroId: 45, heroPower: 9000, heroUltimateAvailable: true ,passive: "strike through"})


/* 
    type Hero = {
        heroPrimaryAttribute: string
    }

    YOU CANNOT ADD OR CHANGE A TYPE AFTER BEING CREATED

*/


// Extending interfaces

interface DotaHero {
    heroName: string,
    heroDifficulty: number,
    heroType: string,
}

interface ShadowFiend extends DotaHero {
    hasPassive: boolean
}

// You can add but cannot change properties of interfaces after creating them

interface DotaHero {
    heroPrimaryAttribute: string
}


// You don't have to give all properties of the interface when you are defining a function parameter. You can just give it the properties you're going to use. (not related to interface vs types)
const getDotaHero = ({hasPassive}: ShadowFiend) => {
    console.log(hasPassive)
}

// You have to give all properties of the interface when calling the function. (not related to interface vs types)
getDotaHero({heroName: "Shadow Fiend", heroDifficulty: 5, heroType: "damage", hasPassive: true, heroPrimaryAttribute: "agility"})





export {}