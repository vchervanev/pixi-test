import _ from './module1'
require('pixi.js')

var app = new PIXI.Application(300, 300, 
    { 
        antialias: true,
        backgroundColor: 0xAABBCC,
        resolution: 2
    });
document.body.appendChild(app.view);

var graphics = new PIXI.Graphics();

app.stage.interactive = true
app.stage.click = function(event) { console.log(event) }

// draw a circle, set the lineStyle to zero so the circle doesn't have an outline
graphics.lineStyle(0);
graphics.beginFill(0xFFFF00, 0.9);
graphics.drawCircle(30, 30, 30);
graphics.endFill();

app.stage.addChild(graphics);

var roundMotion = (graphics, steps, point, radius) => {
    var sin = Math.sin
    var cos = Math.cos
    var r = radius
    var k = 0
    return () => {
        k = (k + 1 / steps) % 1
        var a = 2*Math.PI*k
        graphics.position.set(point.x + r*cos(a), point.y + r*sin(a))
    }
}

app.ticker.add(roundMotion(graphics, 80, {x: 100, y: 100}, 50))
