// getter and setter

// setter = special method that makes a property writeale
// getter = special method that makes a property readable


// validate and modify a value when reading/writing a property


class Rectangle {
    constructor(private width: number, private height: number){}


    // setter must have one parameter and must set a type to it.
    set setWidth(newWidth: number){
        if(newWidth > 0) {
            this.width = newWidth
        }
        console.error("Width must be a positive number")
    }

    set setHeight(newHeight: number){
        if(newHeight > 0) {
            this.height = newHeight
        }
        console.error("Height must be a positive number")
    }

    // getter method must return something
    get getWidth():number {
        return this.width
    }

    get getHeight(): number {
        return this.height
    }

    get area(): number {
        return this.width * this.height
    }
}

const rectangle = new Rectangle(12, 22)


console.log(rectangle.getWidth)
console.log(rectangle.getHeight)
console.log(rectangle.area)

export {}