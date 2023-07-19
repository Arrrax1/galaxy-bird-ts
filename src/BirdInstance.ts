import { Genome } from "../lib/neat-js/src/Genome";

class Bird {
    x: number;
    y: number;
    alive:boolean;
    brain:Genome;
    score:number;
    constructor() {
        this.x = 180
        this.y = 200
        this.alive = true
        this.brain = new Genome(2,1)
        this.score = 0
    }
    get position():[number,number]{
        return [this.x,this.y]
    }
}

export default Bird