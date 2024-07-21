interface Obj {
    myFunction(): string
}

const obj = {
    myFunction: (para:string):string => {
        return para
    },

    myFunction2(para:string):string {
        return para
    },

    myFunction3: function(para:string):string {
        return para
    },
}

obj.myFunction("francis")

type Pets = {
    type: string,
    name: string,
}

const bird: Pets = {type: "bird", name: "Chi Chi"}

const getBird = ({type, name}: Pets): Pets => {
    return {type, name}
}