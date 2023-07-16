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
}

export default Bird