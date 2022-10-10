class Title extends Sprite {
    constructor(x, y) {
        super(x, y)
    }
}

class Sprite {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    draw(canvas, context) {
        
    }
}

class IntroScreen {
    constructor(text) {

        self.sprites = [
        ]
    }

}

class Game {
    constructor() {
        this.mode = 0
        this.fps = 1
    }

    setMode(mode) {
        this.mode = mode
        if(mode) {
            this.setTimer()
        } else {
            this.clearTimer()
        }
    }

    clearTimer() {
        clearInterval(this.tick)
    }

    setTimer() {
        ((game) => {
            game.tick = setInterval(() => {
                game.refresh();
            }, 1000/game.fps);
        })(this)
    }

    refresh() {
        console.log('hi')
    }
}

var game = new Game();

function draw() {
    game.setMode(1)
    const canvas = document.getElementById('the_canvas')
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save()
    ctx.font = '48px serif';
    ctx.rotate(Math.PI*2*angle/360)
    angle += 10
    ctx.restore()
    ctx.fillText('Hello world', 10, 50);
}
