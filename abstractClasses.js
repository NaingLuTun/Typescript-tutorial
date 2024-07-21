"use strict";
// Abstract classes
Object.defineProperty(exports, "__esModule", { value: true });
// Abstract classes are very similar to interfaces, it defines what properties should a class must have.
// The main difference between abstract classes and interfaces are that you can fully define a function logic inside it. While in interfaces you can only declare what a function is going to return.
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    // You can define a full function logic inside abstract class
    getReelTime(reelTime) {
        // some complex calculation
        return reelTime;
    }
}
class Telegram extends TakePhoto {
    constructor(cameraMode, filter, canSentTexts) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.canSentTexts = canSentTexts;
    }
    createReel() {
        console.log("reel created");
    }
}
const telegram = new Telegram("test", "test", true);
console.log(telegram.getReelTime(34));
