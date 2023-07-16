class Bird {
    x: number;
    y: number;
    alive:boolean
    constructor() {
        this.x = 180
        this.y = 200
        this.alive = true
    }
    get position():[number,number]{
        return [this.x,this.y]
    }
}

export default Bird