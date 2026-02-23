class Menu extends Phaser.Scene {
    constructor() {
        super('menu')
    }

    init() {
        this.VEL = 100  // slime velocity constant
    }

    preload() {
        // make assets
        this.load.path = './assets/'
        this.load.image('playerShot', 'playerShot.png');
        this.load.image('enemyShot', 'EnemyShot.png');
        this.load.image('cherryParticle', 'cherryParticle.png');
        this.load.spritesheet('enemy', 'Enemy.png', {
            frameWidth: 32,
            frameHeight: 32
        })
        this.load.spritesheet('player', 'player.png', {
            frameWidth: 16,
            frameHeight: 16
        })
    }

    create() {
        this.add.text(width/2, height/8, "Escape from the Lunarians", textConfig).setOrigin(0.5)
        this.add.text(width/2, height/5.5, "月人から逃げ", textConfig).setOrigin(0.5)
        textConfig.fontSize = 12;
        this.add.text(0, height/2.9, "* Takes place shortly before the Tale of the Bamboo Cutter (竹取物語)", textConfig).setOrigin(0,1)
        this.add.text(0, height/1.6, "You are a Lunarian attempting to escape from the moon because you found life there far too boring. This is your cosmic adventure in an attempt to make it to earth while fighting off the Lunarians trying to take you back.", textConfig).setOrigin(0,1)
        textConfig.align = "center"
        this.add.text(width/2, height/1.38, "←↑↓→ to move\nR to Reset\nZ to Shoot", textConfig).setOrigin(0.5)
        this.add.text(width/2, height/1.15, "Shoot to Begin", textConfig).setOrigin(0.5)
        this.add.text(0, height, "Best Score: Round " + highest_round + " | " + highest_score + "pts", textConfig).setOrigin(0,1)
        textConfig.fontSize = 14;
        this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z).once('down', () => {
            this.scene.start('play');
        })
        
    }

    update() {
    }
}