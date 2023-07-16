import { drawPipes } from "./pipes"

let canvas = document.querySelector<HTMLCanvasElement>('#canvas')!

canvas.width = 400
canvas.height = 500
let ctx = canvas.getContext('2d')!

// initial pipes
// need 3 pipes
let pipes = [[400, 200], [630, Math.floor(Math.random() * 15)*10 + 150],[860, Math.floor(Math.random() * 15)*10 + 150]]
// did that math to make it more different, since pipes seemed to be not so different
let pipesGap = 70

// BG stars
let starsArray:number[][] = []
for (let index = 0; index < 30; index++) {
    starsArray.push([Math.floor(Math.random() * 350) + 10, Math.floor(Math.random() * 450) + 10])
}

function start() {
  // Background
  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  for (let index = 0; index < starsArray.length; index++) {
      ctx.fillStyle = 'white'
      ctx.fillRect(starsArray[index][0], starsArray[index][1], 1, 1)
  }
  setInterval(()=>{
    drawPipes(pipes,pipesGap,starsArray,ctx,canvas.width,canvas.height)
    // if reached the end, add another pipe end delete out of canvas pipe
    if(pipes[0][0]===-30) pipes.push([630,Math.floor(Math.random() * 15)*10 + 150])
    if(pipes[0][0]===-65) pipes.shift()
  },10)
}
start()