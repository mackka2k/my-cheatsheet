// Canvas API = a means for drawing graphics
//              used for animations, games, data visualization.

let canvas = document.getElementById('myCanvas')
let context = canvas.getContext('2d')

/*
// DRAW LINES
context.strokeStyle = 'purple'
context.lineWidth = 5
context.beginPath()
context.moveTo(0, 0)
context.lineTo(250, 250)
context.lineTo(250, 500)
context.moveTo(500, 0)
context.lineTo(250, 250)
context.stroke()
*/

/*
// DRAW TRIANGLE
context.strokeStyle = 'tomato'
context.fillStyle = 'purple'
context.lineWidth = 10
context.beginPath()
context.moveTo(250, 0)
context.lineTo(0, 250)
context.lineTo(500, 250)
context.lineTo(250, 0)
context.stroke()
context.fill()
*/

/*
// DRAW TRIANGLE
context.fillStyle = 'tomato'
context.fillRect(0, 0, 250, 250)
context.strokeStyle = 'black'
context.strokeRect(0, 0, 250, 250)

context.fillStyle = 'gold'
context.fillRect(0, 250, 250, 250)
context.strokeStyle = 'black'
context.strokeRect(0, 250, 250, 250)

context.fillStyle = 'green'
context.fillRect(250, 250, 250, 250)
context.strokeStyle = 'black'
context.strokeRect(250, 250, 250, 250)

context.fillStyle = 'pink'
context.fillRect(250, 0, 250, 250)
context.strokeStyle = 'black'
context.strokeRect(250, 0, 250, 250)
*/

/*
// DRAW CIRCLE
// (x, y, r, startAngle, endAngle, counterclockwise)
context.fillStyle = 'tomato'
context.strokeStyle = 'balck'
context.lineWidth = 10
context.beginPath()
context.arc(250, 250, 200, 0, Math.PI * 2)
context.stroke()
context.fill()
*/

// DRAW TEXT
context.font = '50px MV Boli'
context.fillStyle = 'tomato'
context.textAlign = 'center'
context.fillText('YOU WIN!', canvas.width / 2, canvas.width / 2)
