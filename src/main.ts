import { drawPipes } from "./pipes"
import Bird from "./BirdInstance";
import { birdDown, birdUp, drawBird, bird_contact_pipe, outOfBounds, birdScore } from "./bird";

const population = 10
let bird: Bird[] = new Array<Bird>(population)

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

let score = 0
let gameStarted = false
let birdWillGoDown: number, birdGoUp: number, gameStartInterval: number

// Draw InitialValue on canvas
ctx.fillStyle = 'black'
ctx.fillRect(0, 0, canvas.width, canvas.height)
for (let index = 0; index < starsArray.length; index++) {
  ctx.fillStyle = 'white'
  ctx.fillRect(starsArray[index][0], starsArray[index][1], 1, 1)
}

function startAnimation() {
  // Background
  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  for (let index = 0; index < starsArray.length; index++) {
    ctx.fillStyle = 'white'
    ctx.fillRect(starsArray[index][0], starsArray[index][1], 1, 1)
  }
  for (let index = 0; index < population; index++) {
    drawBird(bird[index].position[0], bird[index].position[1], ctx)
  }
  gameStartInterval = setInterval(() => {
    drawPipes(pipes, pipesGap, starsArray, ctx, canvas.width, canvas.height)
    let isGameOver=true
    for (let index = 0; index < population; index++) {
      if (!bird[index].alive) continue
      isGameOver = (bird_contact_pipe(bird[index].position[0], bird[index].position[1], pipes, pipesGap) || outOfBounds(bird[index].position[1], canvas.height)) && isGameOver
      if (bird_contact_pipe(bird[index].position[0], bird[index].position[1], pipes, pipesGap) || outOfBounds(bird[index].position[1], canvas.height)) bird[index].alive = false
      if (birdScore(bird[index].position[0], pipes[0][0])) document.querySelector<HTMLSpanElement>('#score')!.textContent = `Score : ${++score}`
      drawBird(bird[index].position[0], bird[index].position[1], ctx)
    }
    if (isGameOver) gameOver()
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
    birdUp(times, bird[0])
  }
  birdWillGoDown = setTimeout(() => {
    birdGoUp = birdDown(bird[0])
  }, 175);
}

// Play
document.querySelector<HTMLImageElement>('#play')?.addEventListener('click', () => { gameStart() })
document.addEventListener('keypress', (event) => { if (event.code === 'Space' && !gameStarted) gameStart() })

function gameStart() {
  pipes = [[400, 200], [630, Math.floor(Math.random() * 15) * 10 + 150], [860, Math.floor(Math.random() * 15) * 10 + 150]]
  for (let index = 0; index < population; index++) {
    bird[index] = new Bird()
  }

  score = 0
  document.querySelector<HTMLSpanElement>('#score')!.textContent = `Score : 0`
  document.querySelector<HTMLImageElement>('.play-container')!.style.display = 'none'
  startAnimation()
  gameStarted = true
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
      gameStarted = false
    }, 300)
  }, 500)
}