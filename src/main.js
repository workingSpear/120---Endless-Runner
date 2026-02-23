// Code Practice: Slime World
// Name: 
// Date: 

let config = {
    type: Phaser.AUTO,
    render: {
        pixelArt: true
    },
    width: 240,
    height: 320,
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    },
    zoom: 2,
    scene: [ Menu, Play ]
}

let width = 240;
let height = 320;

const game = new Phaser.Game(config)

let keyUp, keyDown, keyLeft, keyRight, keyShoot, keyReset