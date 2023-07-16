import Bird from "./BirdInstance";
import rocketPath from "../src/assets/spaceShip.png" ;
let rocket = document.createElement('img')
rocket.src=rocketPath

function birdUp(i:number,bird:Bird) {
    setTimeout(() => {
        bird.y = bird.position[1] - 1
    }, 7 * i);
}
function birdDown(bird:Bird):number {
    return setInterval(() => {
        bird.y = bird.position[1] + 2
    }, 15);
}

function drawBird(x:number, y:number, ctx:any) {
    // ctx.fillStyle = 'goldenrod'
    // ctx.fillRect(x, y, 30, 30)
    ctx.drawImage(rocket,x,y,40,30)
}

export {birdUp,birdDown,drawBird}