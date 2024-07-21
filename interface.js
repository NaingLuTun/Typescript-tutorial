"use strict";
// Interface
const francis = {
    email: "nainglu.com",
    userId: 1,
    githubToken: "github.io",
    role: "admin",
    // This ":string" is just to show an example that you can set it like this, but unnecessary
    startLesson() {
        return "Lesson started";
    },
    startExam() {
        return "Exam started";
    },
    // You don't have to match the parameters name with the arguments, it is okay as long as we're giving the right type of value.
    getCoupon(name, off) {
        return off;
    }
};
francis.startExam;
