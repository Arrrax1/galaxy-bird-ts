import { drawPipes } from "./pipes"
import Bird from "./BirdInstance";
import { birdDown, birdUp, drawBird } from "./bird";

let bird = new Bird()

let canvas = document.querySelector<HTMLCanvasElement>('#canvas')!

canvas.width = 400
canvas.height = 500
let ctx = canvas.getContext('2d')!

// initial pipes
// need 3 pipes
let pipes = [[400, 200], [630, Math.floor(Math.random() * 15) * 10 + 150], [860, Math.floor(Math.random() * 15) * 10 + 150]]
// did that math to make it more different, since pipes seemed to be not so different
let pipesGap = 100

// BG stars
let starsArray: number[][] = []
for (let index = 0; index < 30; index++) {
  starsArray.push([Math.floor(Math.random() * 350) + 10, Math.floor(Math.random() * 450) + 10])
}

let birdWillGoDown:number,birdGoUp:number

function start() {
  // Background
  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  for (let index = 0; index < starsArray.length; index++) {
    ctx.fillStyle = 'white'
    ctx.fillRect(starsArray[index][0], starsArray[index][1], 1, 1)
    drawBird(bird.position[0], bird.position[1], ctx)
  }
  setInterval(() => {
    drawPipes(pipes, pipesGap, starsArray, ctx, canvas.width, canvas.height)
    drawBird(bird.position[0], bird.position[1], ctx)
    // if reached the end, add another pipe end delete out of canvas pipe
    if (pipes[0][0] === -30) pipes.push([630, Math.floor(Math.random() * 15) * 10 + 150])
    if (pipes[0][0] === -65) pipes.shift()
  }, 10)
}

document.addEventListener('keydown', (event) => {
  if(event.code === 'ArrowUp'){
    // clear Timeout and Interval to prevent later unwanted movement
    clearTimeout(birdWillGoDown)
    clearInterval(birdGoUp)
    // loop calls birdUp each time with a bigger delay (Timeouts)
    for (let times = 0; times < 25; times++) {
      birdUp(times,bird)
    }
    birdWillGoDown = setTimeout(() => {
      birdGoUp=birdDown(bird)
    }, 175);
  }
})

start()