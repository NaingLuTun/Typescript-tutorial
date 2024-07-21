"use strict";
// classes
Object.defineProperty(exports, "__esModule", { value: true });
// This is how you can define a class
class User {
    // These needs to be pre-define so that typescript knows what this.email, this.name, this.theme and this.userId types.
    constructor(email, name, theme, userPw) {
        // Private means you can only use this value inside the class, and cannot use outside of the class.
        this.userId = 12;
        this.email = email; // this value will go into the constructor (email: string)
        this.name = name; // this value will go into the constructor (name: string)
        this.theme = theme;
        this.userPw = userPw;
    }
    sayHello() {
        console.log(`Hello ${this.name}, this is your email: ${this.email}`);
    }
    getUserId() {
        console.log(`Your id is ${this.userId}`);
    }
}
// This makes defining classes shorter
class Hero {
    constructor(heroName, heroPower, heroId = 12) {
        this.heroName = heroName;
        this.heroPower = heroPower;
        this.heroId = heroId;
    }
    getHeroInfo() {
        console.log(`Hero Name: ${this.heroName}`);
        console.log(`Hero Power: ${this.heroPower}`);
        console.log(`Hero Id: ${this.heroId}`);
    }
}
const francisLu = new User("francis.com", "francis", "darkTheme", "francisLuPassword453");
francisLu.name = "Achiever";
/* francisLu.userId // You can't do this since userId is private.
   francisLu.userPw = "francisLuNewPassword123" // You can't do this since userPw is readonly.
   francisLu.userId = 45 // You can't do this since userId is readonly and private.
*/
francisLu.sayHello();
francisLu.getUserId();
const moskov = new Hero("Moskov", "strike through");
moskov.getHeroInfo();
