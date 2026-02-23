class Play extends Phaser.Scene {
    constructor() {
        super('play')
    }

    init() {
        this.playerShotCooldown = 100; // cooldown between shots in ms
        this.playerShotCooldownTimer = 0;
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

        // create shots
        this.playerShotGroup = new PlayerShotGroup(this);   
       

        this.player = new Player(this, width/2, height/2, 'slime');

        //create anims
        this.anims.create({
            key: 'enemyDefault',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('enemy', {
                start: 0,
                end: 6
            })
        })

        //create enemys
        this.enemyGroup = new EnemySpawner(this);
        this.enemyGroup.begin_wave();
        this.enemyGroup.playAnimation('enemyDefault')

        
    }

    update(time, delta) {
        if(this.playerShotCooldownTimer > 0){
            this.playerShotCooldownTimer -= delta;
        }
        this.player.update();
        if(keyShoot.isDown && this.playerShotCooldownTimer <= 0){
            this.playerShotGroup.fireBullet(this.player.x, this.player.y);
            this.playerShotCooldownTimer = this.playerShotCooldown;
        }
    }
}