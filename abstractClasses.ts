// Abstract classes

// Abstract classes are very similar to interfaces, it defines what properties should a class must have.

// The main difference between abstract classes and interfaces are that you can fully define a function logic inside it. While in interfaces you can only declare what a function is going to return.

abstract class TakePhoto {
    constructor(public cameraMode: string, public filter: string){}

    abstract createReel(): void

    // You can define a full function logic inside abstract class
    getReelTime(reelTime:number):number {
        // some complex calculation

        return reelTime
    }
}

class Telegram extends TakePhoto {
    constructor(public cameraMode: string, public filter: string, public canSentTexts: boolean){
        super(cameraMode, filter)
    }

    createReel(): void {
        console.log("reel created")
    }
}

const telegram = new Telegram("test", "test", true)

console.log(telegram.getReelTime(34))

export {}