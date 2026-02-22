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
        this.load.spritesheet('slime', 'slime.png', {
            frameWidth: 16,
            frameHeight: 16
        })
    }

    create() {
        
    }

    update() {
        this.scene.start('play');
    }
}