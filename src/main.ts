import { drawPipes } from "./pipes"
import Bird from "./BirdInstance";
import { birdDown, birdUp, drawBird, bird_contact_pipe, outOfBounds, birdScore } from "./bird";

let bird = new Bird()

let canvas = document.querySelector<HTMLCanvasElement>('#canvas')!

canvas.width = 400
canvas.height = 500
let ctx = canvas.getContext('2d')!
localStorage.getItem("highestScore") ==  null ? document.querySelector<HTMLSpanElement>('#highScore')!.textContent = `Highest Score : 0` : document.querySelector<HTMLSpanElement>('#highScore')!.textContent = `Highest Score : ${Number.parseInt(localStorage.getItem("highestScore")!)} `
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

let score = 0
let gameStarted=false
let birdWillGoDown: number, birdGoUp: number, gameStartInterval: number

// Draw InitialValue on canvas
ctx.fillStyle = 'black'
ctx.fillRect(0, 0, canvas.width, canvas.height)
for (let index = 0; index < starsArray.length; index++) {
  ctx.fillStyle = 'white'
  ctx.fillRect(starsArray[index][0], starsArray[index][1], 1, 1)
  drawBird(bird.position[0], bird.position[1], ctx)
}

function startAnimation() {
  // Background
  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  for (let index = 0; index < starsArray.length; index++) {
    ctx.fillStyle = 'white'
    ctx.fillRect(starsArray[index][0], starsArray[index][1], 1, 1)
    drawBird(bird.position[0], bird.position[1], ctx)
  }
  gameStartInterval = setInterval(() => {
    if (bird_contact_pipe(bird.position[0], bird.position[1], pipes, pipesGap) || outOfBounds(bird.position[1], canvas.height)) gameOver()
    if (birdScore(bird.position[0], pipes[0][0])) document.querySelector<HTMLSpanElement>('#score')!.textContent = `Score : ${++score}`
    drawPipes(pipes, pipesGap, starsArray, ctx, canvas.width, canvas.height)
    drawBird(bird.position[0], bird.position[1], ctx)
    // if reached the end, add another pipe end delete out of canvas pipe
    if (pipes[0][0] === -30) pipes.push([630, Math.floor(Math.random() * 15) * 10 + 150])
    if (pipes[0][0] === -65) pipes.shift()
  }, 10)
}

document.addEventListener('keydown', (event) => { if (event.code === 'ArrowUp') { mechanics(event) } })
document.addEventListener('mousedown', (event) => { mechanics(event) })

// mechanics
function mechanics(event: any) {
  event.preventDefault()
  // clear Timeout and Interval to prevent later unwanted movement
  clearTimeout(birdWillGoDown)
  clearInterval(birdGoUp)
  // loop calls birdUp each time with a bigger delay (Timeouts)
  for (let times = 0; times < 25; times++) {
    birdUp(times, bird)
  }
  birdWillGoDown = setTimeout(() => {
    birdGoUp = birdDown(bird)
  }, 175);
}

// Play
document.querySelector<HTMLImageElement>('#play')?.addEventListener('click', () => { gameStart() })
document.addEventListener('keypress', (event) => { if(event.code==='Space' && !gameStarted ) gameStart() })

function gameStart() {
  pipes = [[400, 200], [630, Math.floor(Math.random() * 15) * 10 + 150], [860, Math.floor(Math.random() * 15) * 10 + 150]]
  bird = new Bird()
  score = 0
  document.querySelector<HTMLSpanElement>('#score')!.textContent = `Score : 0`
  document.querySelector<HTMLImageElement>('.play-container')!.style.display = 'none'
  startAnimation()
  gameStarted=true
}

// game Over
function gameOver() {
  clearInterval(gameStartInterval)
  document.querySelector<HTMLImageElement>('.play-container')!.style.display = 'grid'
  document.querySelector<HTMLImageElement>('.play-container')!.style.opacity = '0'
  document.querySelector<HTMLImageElement>('.play-container')!.style.top = '75%'
  document.querySelector<HTMLImageElement>('#gameOver')!.innerHTML = `Game Over<br>Score : ${score}`
  setTimeout(() => {
    document.querySelector<HTMLImageElement>('.play-container')!.style.opacity = '1'
    document.querySelector<HTMLImageElement>('.play-container')!.style.top = '40%'
    setTimeout(() => {
      document.querySelector<HTMLImageElement>('.play-container')!.style.top = '50%'
      gameStarted=false
    }, 300)
  }, 500)
  let lclStr = localStorage.getItem("highestScore")!
  if (Number.isNaN(Number.parseInt(lclStr)) || Number.parseInt(localStorage.getItem("highestScore")!) < score) {
    localStorage.setItem("highestScore",score.toString())
    document.querySelector<HTMLSpanElement>('#highScore')!.textContent = `Highest Score : ${score}`    
  }
}
