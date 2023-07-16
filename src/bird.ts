import Bird from "./BirdInstance";
import rocketPath from "/assets/spaceShip.png" ;
let rocket = document.createElement('img')
rocket.src=rocketPath

function birdUp(i:number,bird:Bird) {
    setTimeout(() => {
        bird.y = bird.position[1] - 1
    }, 7 * i);
}
function birdDown(bird:Bird):number {
    return setInterval(() => {
        bird.y = bird.position[1] + 3
    }, 18);
}

function drawBird(x:number, y:number, ctx:any) {
    // ctx.fillStyle = 'goldenrod'
    // ctx.fillRect(x, y, 30, 30)
    ctx.drawImage(rocket,x,y,40,30)
    ctx.drawImage(rocket,x+32,y,8,6)
    ctx.drawImage(rocket,x+32,y+24,8,6)
}

function bird_contact_pipe(birdX:number,birdY:number,pipes:number[][],gap:number):boolean {
    // pipes[0][0]+(48) because of pipe width
    // birdX+40 because of rocket width
    // then without +40 to check position of both head and end of rocket
    if ((birdX+40 > pipes[0][0] && birdX+40 < pipes[0][0]+48) || (birdX > pipes[0][0] && birdX < pipes[0][0]+48)){
      //birdY+30 because of rocket height
      if (birdY < pipes[0][1] || birdY+30 > pipes[0][1] + gap ) {
        return true
      }
    }
    // test each pipe separately
    if ((birdX+40 > pipes[1][0] && birdX+40 < pipes[1][0]+48) || (birdX > pipes[1][0] && birdX < pipes[1][0]+48)) {
      if (birdY < pipes[1][1] || birdY+30 > pipes[1][1] + gap ) {
        return true
      }
    }
    return false
  }

function outOfBounds(birdY:number,height:number):boolean {
    //+30 for height
    return (birdY<1 || birdY+30>height) ?  true : false
}

function birdScore(birdX:number,pipe1X:number) {
    // for first pipe it'll work fine then
    // basically we wait till the second pipe becomes the first pipe and test
    // pipe1X+50 because we test after we pass the pipe
    return birdX===pipe1X+50 ? true : false
}

export {birdUp,birdDown,drawBird,bird_contact_pipe,outOfBounds,birdScore}