require('./editor.jsx')
require('pixi.js')



var app = new PIXI.Application(400, 400,
  {
    antialias: true,
    backgroundColor: 0xFFFFFF,
    resolution: 2,
    fps: 10,
  });
document.body.appendChild(app.view);

var fig1 = new PIXI.Graphics()
fig1.lineStyle(2, 0xAA0000)
fig1.drawCircle(30, 30, 5)
app.stage.addChild(fig1)

var fig2 = new PIXI.Graphics()
fig2.lineStyle(2, 0x00FF00)
fig2.drawCircle(30, 30, 3)
app.stage.addChild(fig2)

var fig3 = new PIXI.Graphics()
fig3.lineStyle(1, 0x0000FF)
fig3.drawCircle(30, 30, 2)
app.stage.addChild(fig3)

var trace = new PIXI.Graphics()
trace.lineStyle(1, 0)
app.stage.addChild(trace)

var fromPoint = (point) => () => point

var roundMotion = (target, steps, centre, radius) => {
  var sin = Math.sin
  var cos = Math.cos
  var r = radius
  var k = 0
  return () => {
    k = (k + 1 / steps) % 1
    var a = 2 * Math.PI * k
    var c = centre()
    target().set(c.x + r * cos(a), c.y + r * sin(a))
  }
}

var handlers = [
  roundMotion(fromPoint(fig1.position), 250, fromPoint({ x: 120, y: 120 }), 70),
  roundMotion(fromPoint(fig2.position), 100, fromPoint(fig1.position), 40),
  roundMotion(fromPoint(fig3.position), 20, fromPoint(fig2.position), 20),
]

// fig1.visible = false
// fig2.visible = false
// fig3.visible = false
handlers.forEach((h) => h())

var doIt = () => {
  trace.moveTo(fig3.x + 30, fig3.y + 30, 1)
  handlers.forEach((h) => h())
  trace.lineTo(fig3.x + 30, fig3.y + 30, 1)
}

app.ticker.add(doIt)
