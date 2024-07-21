"use strict";
// Protected
Object.defineProperty(exports, "__esModule", { value: true });
// Protected properties are just like private but you can access through out all the extended classes, where with private you can't.
class Hero {
    constructor(heroName, heroUlti, heroAtkDmg, heroPhrase) {
        this.heroName = heroName;
        this.heroUlti = heroUlti;
        this.heroAtkDmg = heroAtkDmg;
        this.heroPhrase = heroPhrase;
    }
    set setHeroName(newHeroName) {
        this.heroName = newHeroName;
    }
    set setHeroUlti(newHeroUlti) {
        this.heroUlti = newHeroUlti;
    }
    set setHeroAtkDmg(newHeroAtkDmg) {
        this.heroAtkDmg = newHeroAtkDmg;
    }
    get getHeroName() {
        return this.heroName;
    }
    get getHeroUlti() {
        return this.heroUlti;
    }
    get getHeroAtkDmg() {
        return this.heroAtkDmg;
    }
}
// 
class HightAtkHero extends Hero {
    constructor() {
        // you can inherit properties like this, but private properties are not inheritable:
        super(...arguments);
        /*
        constructor(public heroPhrase: string, public readonly isHightAtkDmg: boolean = true) {
            super(heroPhrase)
        }
        */
        // Even without doing the above code, you already inherits the properties from Hero class
        this.isHightAtkDmg = true;
        /*
        This will show an error because "heroName" is a private property and can only be accessed in Hero class.
    
        giveHeroName() {
            return this.heroName
        }
        */
    }
    // You can access "heroAtkDmg" because it is a protected property.
    giveAtkDmg() {
        return this.heroAtkDmg + 30;
    }
}
const moskov = new HightAtkHero("Moskov", "Spear of destruction", 100, "revenge is best served cold!");
console.log(moskov.giveAtkDmg());
