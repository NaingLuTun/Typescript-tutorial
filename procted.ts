// Protected

// Protected properties are just like private but you can access through out all the extended classes, where with private you can't.

class Hero {
    constructor(private heroName: string, private heroUlti: string, protected heroAtkDmg: number, public heroPhrase: string){}

    set setHeroName(newHeroName: string) {
            this.heroName = newHeroName
    }

    set setHeroUlti(newHeroUlti: string) {
            this.heroUlti = newHeroUlti
    }

    set setHeroAtkDmg(newHeroAtkDmg: number) {
            this.heroAtkDmg = newHeroAtkDmg
    }

    get getHeroName(): string {
        return this.heroName
    }

    get getHeroUlti(): string {
        return this.heroUlti
    }

    get getHeroAtkDmg(): number {
        return this.heroAtkDmg
    }
}


// 
class HightAtkHero extends Hero {
    // you can inherit properties like this, but private properties are not inheritable:

    /* 
    constructor(public heroPhrase: string, public readonly isHightAtkDmg: boolean = true) {
        super(heroPhrase)
    }
    */

    // Even without doing the above code, you already inherits the properties from Hero class
    public readonly isHightAtkDmg: boolean = true

    // You can access "heroAtkDmg" because it is a protected property.
    giveAtkDmg() {
        return this.heroAtkDmg + 30 
    }

    /* 
    This will show an error because "heroName" is a private property and can only be accessed in Hero class.

    giveHeroName() {
        return this.heroName
    }
    */
   
}

const moskov = new HightAtkHero("Moskov", "Spear of destruction", 100, "revenge is best served cold!")

console.log(moskov.giveAtkDmg())

export{}