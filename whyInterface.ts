// Why interfaces are important.

interface TakePhoto {
    cameraMode: string
    filter: string
    burst: number
}

interface Story {
    createStory() : void
}

// You have to give the class properties that are defined in the interface when you're are implementing a class based on an interface.
class Instagram implements TakePhoto {
    constructor(public cameraMode: string, public filter: string, public burst: number){}
}

// You can give more properties to the class than what is defined in the interface but cannot define the class with less than the properties defined in the interface.
class YouTube implements TakePhoto {
    constructor(public cameraMode: string, public filter: string, public burst: number, public swithCamer: string) {
        
    }
}


class Facebook implements TakePhoto, Story {
    constructor(public cameraMode: string, public filter: string, public burst: number){}

    // If the interface you're implementing your class on has a function, you have to define the same function inside the class too.
    createStory(): void {
        console.log("Story created")
    }
}