class Play extends Phaser.Scene {
    constructor() {
        super('play')
    }

    init() {
        this.VEL = 100  // slime velocity constant
    }

    preload() {
    }

    create() {
        //key binds
        let keys = this.input.keyboard.createCursorKeys();
        keyLeft = keys.left;
        keyRight = keys.right;
        keyUp = keys.up;
        keyDown = keys.down;
        keyShoot = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);


        this.player = new Player(this, width/2, height/2, 'slime');
    }

    update() {
        this.player.update();
    }
}