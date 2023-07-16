type posArray = [number,number]
class Bird {
    x: number;
    y: number;
    constructor() {
        this.x = 180
        this.y = 200
    }
    get position():number[]{
        return [this.x,this.y]
    }
    set position(x:posArray){
        this.x=x[0]
        this.y=x[1]
    }
}

export default Bird