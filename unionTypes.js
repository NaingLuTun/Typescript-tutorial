"use strict";
// Union type
Object.defineProperty(exports, "__esModule", { value: true });
// You can define union types like this with a pipe "|", you can add as many types as you like but not recommended since you want to be as strict as possible in typescript.
let score = 33;
// This is ok.
score = "23";
// You can use union type alias like this.
// the Francis variable can use either User type, or Admin type
let Francis = {
    userName: "Francis",
    userId: 3
};
Francis = {
    adminName: "Francis",
    adminId: 4
};
// Union type in a function
const randomPassword = (pw) => {
    // ps.toUpperCase() 
    // You can't directly do this even tho we define union type as number or string.
    // What you should do instead is:
    if (typeof pw === "string") {
        console.log(pw.toUpperCase());
    }
    else {
        console.log(pw * 20);
    }
};
randomPassword("baldeagle");
randomPassword(12345);
// Union type with type alias used in a function
const getDataId = (data) => {
    if ('userName' in data && 'userId' in data) {
        console.log(`data name is ${data.userName}`);
        console.log(`data id is ${data.userId}`);
    }
    else if ('adminName' in data && 'adminId' in data) {
        console.log(`data name is ${data.adminName}`);
        console.log(`data id is ${data.adminId}`);
    }
};
// Type assertion can be used to shorten it.
const getDataIdAssertionMethod = (data) => {
    console.log(`data name is ${data.userName || data.adminName}`);
    console.log(`data id is ${data.userId || data.adminId}`);
};
getDataId({ userName: "Francis", userId: 1 });
getDataIdAssertionMethod({ adminName: "Francis", adminId: 5 });
// array with union type
// This is how you define an array that can use both strings and number,
// you can add as many types as you like, but keep in mind that code needs to be strict in typescript.
const peopleCount = ["2", 3, "5", 7, true];
// This is ok but, will not work as you intended to. This sytax is saying, this is either an array with only "strings" in it or an array with only "numbers" in it.
const peopleCountTwo = [1, 3, 4, 5];
