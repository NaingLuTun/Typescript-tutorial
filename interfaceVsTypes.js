"use strict";
// Interface vs Types
Object.defineProperty(exports, "__esModule", { value: true });
// You don't have to give all properties of the type when you are defining a function parameter. You can just give it the properties you're going to use. (not related to interface vs types)
const getHero = ({ heroName }) => {
    console.log(heroName);
};
// You have to give all properties of the type when calling the function. (not related to interface vs types)
getHero({ heroName: "Moskov", heroId: 45, heroPower: 9000, heroUltimateAvailable: true, passive: "strike through" });
// You don't have to give all properties of the interface when you are defining a function parameter. You can just give it the properties you're going to use. (not related to interface vs types)
const getDotaHero = ({ hasPassive }) => {
    console.log(hasPassive);
};
// You have to give all properties of the interface when calling the function. (not related to interface vs types)
getDotaHero({ heroName: "Shadow Fiend", heroDifficulty: 5, heroType: "damage", hasPassive: true, heroPrimaryAttribute: "agility" });
