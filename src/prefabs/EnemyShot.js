class EnemyShot extends Phaser.Physics.Arcade.Sprite
{
    constructor(scene, x, y){
        super(scene, x, y, 'enemyShot')
        this.maxVel = 100
        scene.physics.add.existing(this);
        scene.add.existing(this);

        this.setScale(0.8)
        this.setOrigin(0.5,0.5)
    }

    // Code Refrenced from Phaser Example "Bullets Group"
    // https://phaser.io/examples/v3.85.0/physics/arcade/view/bullets-group



    fire(StartX,StartY,EndX,EndY)
    {
        // move bullet to x,y removing any previous velo/accel
        this.x = StartX;
        this.y = StartY;
        let bulletDir = new Phaser.Math.Vector2(EndX-StartX, EndY-StartY).normalize();
        let bulletVel = bulletDir.scale(this.maxVel);
        this.rotation = Math.PI/2 + Phaser.Math.Angle.BetweenPoints({x: StartX, y: StartY}, {x: EndX, y: EndY})
        console.log(this.rotation)
        //this.body.setVelocity(bulletVel);
        this.body.setVelocity(bulletVel.x,bulletVel.y);
    }

    preUpdate(time, delta){
        super.preUpdate(time, delta);
        if(this.y >= height || this.y <= 0 || this.x >= width + 32 || this.x <= -32){
            this.destroy();
        }
    }
}