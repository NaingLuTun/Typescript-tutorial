// Interface

// This is how you define an interface

interface User {
    email: string,
    readonly userId: number
    googleId?: number
    startLesson: () => string 
    // This is one way to define a function, that is going to return a string.

    startExam(): string
    // This is also one way to define a function.

    getCoupon(couponName: string, value: number): number
}
// This is called reopening the interface. It just simply means adding more to the interface
interface User {
    githubToken: string
}

// You can also inherit properties from other interfaces like this.
interface Admin extends User {
    role: "admin" | "technical analysis" | "developer"
}



const francis: Admin = {
    email:"nainglu.com", 
    userId:1,
    githubToken: "github.io",
    role: "admin",
    
    // This ":string" is just to show an example that you can set it like this, but unnecessary
    startLesson():string {
        return "Lesson started"
    },

    startExam() {
        return "Exam started"
    },

    // You don't have to match the parameters name with the arguments, it is okay as long as we're giving the right type of value.
    getCoupon(name: "francis", off: 30) {
        return off
    }
}

francis.startExam