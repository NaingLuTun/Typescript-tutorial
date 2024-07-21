"use strict";
const obj = {
    myFunction: (para) => {
        return para;
    },
    myFunction2(para) {
        return para;
    },
    myFunction3: function (para) {
        return para;
    },
};
obj.myFunction("francis");
const bird = { type: "bird", name: "Chi Chi" };
const getBird = ({ type, name }) => {
    return { type, name };
};
