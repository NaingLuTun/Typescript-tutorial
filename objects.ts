// objects

// This is how you simply assign object type
const myObj: object = {
    userName: "Francis",
    id: 12,
    isMale: true,
}

// You can just define it like this also, typescript already knows it's an object type
const myObjTwo = {
    userName: "Naing Lu Tun",
    id: 13,
    isMale: true,
}

// Object type annotation

type Achiever = {
    achieverName: string,
    id: number,
    isHighlyIntelligent: boolean,
}

// Object type annotation is use if you want a object to follow certain structures on objects.

const achieverData: Achiever = {
    achieverName: "Francis",
    id: 1,
    isHighlyIntelligent: true
}

export {}
