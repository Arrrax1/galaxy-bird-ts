import Bird from "./BirdInstance";

let bird = new Bird()

function birdUp(i:number,bird:number[]) {
    setTimeout(() => {
        bird[1] = bird[1] - 1
    }, 7 * i);
}
function birdDown(birdInterval:number,bird:number[]) {
    birdInterval = setInterval(() => {
        bird[1] = bird[1] + 2
    }, 20);
}

function drawBird(x:number, y:number, ctx:any) {
    ctx.fillStyle = 'goldenrod'
    ctx.fillRect(x, y, 30, 30)
}

export {birdUp,birdDown,drawBird}