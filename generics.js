"use strict";
// Generics
// Generics allow you to create reusable components that can work with any data type. By using generics you can define functions, classes and interfaces that can work with variety of types while maintaining strong type check.
// This how you use generics
// This <Type> syntax is the generic, it insures that the function returns the same data type as the arguments passed in.
const productInfo = (val) => {
    return val;
};
productInfo({ deviceType: "mobliePhone", deviceId: 223 });
productInfo({ bottleType: "stanley cup", isMadeWithStainlessSteel: true });
// In react people will often write it like this <T,> to make sure other developers know it is a generic and not a jsx syntax.
const searchProducts = (products) => {
    return products[2];
};
const simpleProductsArray = ["skin care", "electronics", "foods"];
const searchProductsWithSimpleArray = searchProducts(simpleProductsArray);
const products = [
    { id: 1, type: "skin care", hasDiscount: true },
    { id: 2, type: "electronics", hasDiscount: true },
    { id: 1, type: "pet foods", hasDiscount: true },
];
const searchProductsWithInterface = searchProducts(products);
const databaseFunction = (valueOne, valueTwo) => {
    return {
        valueOne,
        valueTwo
    };
};
databaseFunction("testOne", { connection: "testConnection", userName: "testUserName", password: "testPw" });
