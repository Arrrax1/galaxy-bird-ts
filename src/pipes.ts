export function drawPipes(pipesArray:number[][], gap:number, starsArray:number[][],ctx:any,canvas_width:number,canvas_height:number) {
    // Background
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvas_width, canvas_height)
    for (let index = 0; index < starsArray.length; index++) {
        ctx.fillStyle = 'white'
        ctx.fillRect(starsArray[index][0], starsArray[index][1], 1, 1)
    }
    // Draw pipes TOP
    ctx.fillStyle = '#1E90FF'
    ctx.fillRect(pipesArray[0][0], 0, 50, pipesArray[0][1])
    ctx.fillRect(pipesArray[1][0], 0, 50, pipesArray[1][1])
    ctx.fillRect(pipesArray[2][0], 0, 50, pipesArray[2][1])
    // Decorate pipes
    ctx.fillStyle = '#82EEFD'
    ctx.fillRect(pipesArray[0][0], 0, 8, pipesArray[0][1])
    ctx.fillRect(pipesArray[1][0], 0, 8, pipesArray[1][1])
    ctx.fillRect(pipesArray[2][0], 0, 8, pipesArray[2][1])
    ctx.fillRect(pipesArray[0][0] + 15, 0, 3, pipesArray[0][1])
    ctx.fillRect(pipesArray[1][0] + 15, 0, 3, pipesArray[1][1])
    ctx.fillRect(pipesArray[2][0] + 15, 0, 3, pipesArray[2][1])
    ctx.fillStyle = '#1560BD'
    ctx.fillRect(pipesArray[0][0] + 45, 0, 5, pipesArray[0][1])
    ctx.fillRect(pipesArray[1][0] + 45, 0, 5, pipesArray[1][1])
    ctx.fillRect(pipesArray[2][0] + 45, 0, 5, pipesArray[2][1])
    ctx.fillRect(pipesArray[0][0] - 5, pipesArray[0][1] - 10, 60, 10)
    ctx.fillRect(pipesArray[1][0] - 5, pipesArray[1][1] - 10, 60, 10)
    ctx.fillRect(pipesArray[2][0] - 5, pipesArray[2][1] - 10, 60, 10)
    ctx.fillStyle = '#1E90FF'
    ctx.fillRect(pipesArray[0][0] - 5, pipesArray[0][1] - 7, 55, 7)
    ctx.fillRect(pipesArray[1][0] - 5, pipesArray[1][1] - 7, 55, 7)
    ctx.fillRect(pipesArray[2][0] - 5, pipesArray[2][1] - 7, 55, 7)
    ctx.fillStyle = '#82EEFD'
    ctx.fillRect(pipesArray[0][0] - 5, pipesArray[0][1] - 7, 3, 7)
    ctx.fillRect(pipesArray[1][0] - 5, pipesArray[1][1] - 7, 3, 7)
    ctx.fillRect(pipesArray[2][0] - 5, pipesArray[2][1] - 7, 3, 7)
    ctx.fillRect(pipesArray[0][0] + 2, pipesArray[0][1] - 7, 2, 7)
    ctx.fillRect(pipesArray[1][0] + 2, pipesArray[1][1] - 7, 2, 7)
    ctx.fillRect(pipesArray[2][0] + 2, pipesArray[2][1] - 7, 2, 7)
    // Draw pipes Bottom
    ctx.fillStyle = '#1E90FF'
    ctx.fillRect(pipesArray[0][0], pipesArray[0][1] + gap, 50, canvas_height - pipesArray[0][1] + gap) // start is : TopPipe.height+gap(gap)--the height is canvas size-Y
    ctx.fillRect(pipesArray[1][0], pipesArray[1][1] + gap, 50, canvas_height - pipesArray[1][1] + gap)
    ctx.fillRect(pipesArray[2][0], pipesArray[2][1] + gap, 50, canvas_height - pipesArray[2][1] + gap)
    // Decorate Bottom pipes
    // Long Pipe decoration
    ctx.fillStyle = '#82EEFD'
    ctx.fillRect(pipesArray[0][0], pipesArray[0][1] + gap, 8, canvas_height - pipesArray[0][1] + gap)
    ctx.fillRect(pipesArray[1][0], pipesArray[1][1] + gap, 8, canvas_height - pipesArray[1][1] + gap)
    ctx.fillRect(pipesArray[2][0], pipesArray[2][1] + gap, 8, canvas_height - pipesArray[2][1] + gap)
    ctx.fillRect(pipesArray[0][0] + 15, pipesArray[0][1] + gap, 3, canvas_height - pipesArray[0][1] + gap)
    ctx.fillRect(pipesArray[1][0] + 15, pipesArray[1][1] + gap, 3, canvas_height - pipesArray[1][1] + gap)
    ctx.fillRect(pipesArray[2][0] + 15, pipesArray[2][1] + gap, 3, canvas_height - pipesArray[2][1] + gap)
    ctx.fillStyle = '#1560BD'
    ctx.fillRect(pipesArray[0][0] + 45, pipesArray[0][1] + gap, 5, canvas_height - pipesArray[0][1] + gap)
    ctx.fillRect(pipesArray[1][0] + 45, pipesArray[1][1] + gap, 5, canvas_height - pipesArray[1][1] + gap)
    ctx.fillRect(pipesArray[2][0] + 45, pipesArray[2][1] + gap, 5, canvas_height - pipesArray[2][1] + gap)
    // tube's endpoint' decoration
    ctx.fillRect(pipesArray[0][0] - 5, pipesArray[0][1] + gap, 60, 10)
    ctx.fillRect(pipesArray[1][0] - 5, pipesArray[1][1] + gap, 60, 10)
    ctx.fillRect(pipesArray[2][0] - 5, pipesArray[2][1] + gap, 60, 10)
    ctx.fillStyle = '#1E90FF'
    ctx.fillRect(pipesArray[0][0] - 5, pipesArray[0][1] + gap, 56, 7)
    ctx.fillRect(pipesArray[1][0] - 5, pipesArray[1][1] + gap, 56, 7)
    ctx.fillRect(pipesArray[2][0] - 5, pipesArray[2][1] + gap, 56, 7)
    ctx.fillStyle = '#82EEFD'
    ctx.fillRect(pipesArray[0][0] - 5, pipesArray[0][1] + gap, 3, 7)
    ctx.fillRect(pipesArray[1][0] - 5, pipesArray[1][1] + gap, 3, 7)
    ctx.fillRect(pipesArray[2][0] - 5, pipesArray[2][1] + gap, 3, 7)
    ctx.fillRect(pipesArray[0][0] + 2, pipesArray[0][1] + gap, 2, 7)
    ctx.fillRect(pipesArray[1][0] + 2, pipesArray[1][1] + gap, 2, 7)
    ctx.fillRect(pipesArray[2][0] + 2, pipesArray[2][1] + gap, 2, 7)
    // move pipesArray
    pipesArray[0][0] = pipesArray[0][0] - 1
    pipesArray[1][0] = pipesArray[1][0] - 1
    pipesArray[2][0] = pipesArray[2][0] - 1
}