// Code Practice: Slime World
// Name: Kait Srivastav
// Date: 02/20/2026
// Game Title: Escape From The Lunarians / 月人から逃げ
// Approximate Hours: 10 Hours
// Credits: See Credits Page for asset credits. There are no non-example or non-documentation credits
// Creative Tilt: Athetic: I am very happy with the enemy assets and I also added a particle trail on the player that begins when they reach their high score. It allows the player to easily figure out if they are at a new highscore without having to glance at the UI.
// Creative TIlt: Technical: I learned how to use Phaser's "Groups" for arcade physics in order to create object pooling to better optimize the player's shots. I also used object pooling to manage my enemy data and I felt it quite condensed the code that way.

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
    scene: [ Menu, Credits, Play ]
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
            align: 'left',
            padding: {
                top: 5,
                bottom: 5,
                left: 5,
                right: 5
            },
            wordWrap: { width: 240 }
        }

const game = new Phaser.Game(config)

let keyUp, keyDown, keyLeft, keyRight, keyShoot, keyReset