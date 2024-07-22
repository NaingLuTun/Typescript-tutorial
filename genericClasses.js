"use strict";
// This is how you use generics with classes
class Sellable {
    constructor(data) {
        this.data = data;
    }
    set type(newData) {
        this.data = newData;
    }
    get type() {
        return this.data;
    }
}
const sellableProducts = new Sellable("fruits");
sellableProducts.type = "electronics";
// sellableProducts.type = 34  (You can't do this now, since you set the initial type to be string)
console.log(sellableProducts.type);
// With interface
const sellableQuiz = new Sellable({ name: "react quiz", type: "react" });
console.log(sellableQuiz.type);
