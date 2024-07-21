// classes

// This is how you can define a class
class User {
    email: string 
    name: string
    readonly userPw: string

    // public is set automatically by default to all properties. Public means you can use this property outside of the class.
    public theme: string

    // Private means you can only use this value inside the class, and cannot use outside of the class.
    private readonly userId = 12

    // These needs to be pre-define so that typescript knows what this.email, this.name, this.theme and this.userId types.
    

    constructor(email: string, name: string, theme: string, userPw: string) {
        this.email = email // this value will go into the constructor (email: string)
        this.name = name // this value will go into the constructor (name: string)
        this.theme = theme
        this.userPw = userPw
    }

    sayHello() {
        console.log(`Hello ${this.name}, this is your email: ${this.email}`)
    }

    getUserId() {
        console.log(`Your id is ${this.userId}`)
    }
}


// This makes defining classes shorter

class Hero {
    constructor(
        public heroName: string, 
        public heroPower: string, 
        private readonly heroId = 12
    ){}

    getHeroInfo() {
        console.log(`Hero Name: ${this.heroName}`)
        console.log(`Hero Power: ${this.heroPower}`)
        console.log(`Hero Id: ${this.heroId}`)
    }
}

const francisLu = new User("francis.com", "francis", "darkTheme", "francisLuPassword453")

francisLu.name = "Achiever"

/* francisLu.userId // You can't do this since userId is private.
   francisLu.userPw = "francisLuNewPassword123" // You can't do this since userPw is readonly.
   francisLu.userId = 45 // You can't do this since userId is readonly and private.
*/

francisLu.sayHello()
francisLu.getUserId()

const moskov = new Hero("Moskov", "strike through")

moskov.getHeroInfo()

export {}