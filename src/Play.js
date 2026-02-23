class Play extends Phaser.Scene {
    constructor() {
        super('play')
    }

    init() {
        this.playerShotCooldown = 100; // cooldown between shots in ms
        this.playerShotCooldownTimer = 0;

        this.enemyShotCooldown = 1500;
        this.enemyShotCooldownMin = 0;
        this.enemyShotCooldownTimer = 0;

        this.timeBetweenWaves = 1000;
        this.timeBetweenWavesTimer = 0;
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
        keyReset = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
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

        //player-Enemy col
        this.physics.add.collider(this.player, this.enemyGroup, (player, enemy) =>{
            this.endGame();
        })

        //player->enemyshot col handled in update, yes i know this is bad but it works
        // i should have probably just used groups for the enemy shots too

        //playerShot-Enemy col
        this.physics.add.collider(this.playerShotGroup, this.enemyGroup, (playerShot, enemy) =>{
            playerShot.kill();
            if(enemy.hit(5) <= 0){
                enemy.kill();
                enemys_left -= 1;
                if(enemys_left <= 0){
                    this.timeBetweenWavesTimer = this.timeBetweenWaves;
                    this.enemyShotCooldown = Math.max(this.enemyShotCooldown - 100, this.enemyShotCooldownMin);
                }
            }
        })
        
    }

    endGame(){
        this.scene.stop('play');
        this.anims.remove('enemyDefault');
        this.scene.start('menu')
    }

    update(time, delta) {
        if(this.timeBetweenWavesTimer > 0){
            this.timeBetweenWavesTimer -= delta;
            if(this.timeBetweenWavesTimer <= 0){
                this.enemyGroup.begin_wave();
            }
        }

        if(this.playerShotCooldownTimer > 0){
            this.playerShotCooldownTimer -= delta;
        }
        if(this.enemyShotCooldownTimer > 0){
            this.enemyShotCooldownTimer -= delta;
        }

        if(this.enemyShotCooldownTimer <= 0){
            this.enemyGroup.get_enemys().forEach((element)=>{
                let new_shot = new EnemyShot(this);
                new_shot.fire(element.x, element.y, this.player.x, this.player.y);
                //player-EnemyShot col
                this.physics.add.collider(this.player, new_shot, (player, shot) => {
                    this.endGame();
                })
            });
            this.enemyShotCooldownTimer = this.enemyShotCooldown;
        }

        this.player.update();
        if(keyShoot.isDown && this.playerShotCooldownTimer <= 0){
            this.playerShotGroup.fireBullet(this.player.x, this.player.y);
            this.playerShotCooldownTimer = this.playerShotCooldown;
        }
    }
}