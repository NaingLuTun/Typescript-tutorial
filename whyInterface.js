"use strict";
// Why interfaces are important.
// You have to give the class properties that are defined in the interface when you're are implementing a class based on an interface.
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
// You can give more properties to the class than what is defined in the interface but cannot define the class with less than the properties defined in the interface.
class YouTube {
    constructor(cameraMode, filter, burst, swithCamer) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.swithCamer = swithCamer;
    }
}
class Facebook {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    // If the interface you're implementing your class on has a function, you have to define the same function inside the class too.
    createStory() {
        console.log("Story created");
    }
}
