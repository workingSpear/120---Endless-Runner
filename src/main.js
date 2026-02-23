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
let enemys_left = 0;
let round = 1;
let score = 0;
let highest_round = 1;
let highest_score = 0;

let textConfig = {
            fontFamily: 'Verdana',
            fontSize: '14px',
            color: '#ffffff',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
                left: 5,
                right: 5
            },
            wordWrap: { width: 300 }
        }

const game = new Phaser.Game(config)

let keyUp, keyDown, keyLeft, keyRight, keyShoot, keyReset