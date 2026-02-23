class PlayerShot extends Phaser.Physics.Arcade.Sprite
{
    constructor(scene, x, y){
        super(scene, x, y, 'playerShot')
        this.maxVel = 500
        // 1 = straight shot
        // 2 = left straight shot
        // 3 = right straight shot
        this.type = 1

        this.setScale(0.8)
    }

    // Code Refrenced from Phaser Example "Bullets Group"
    // https://phaser.io/examples/v3.85.0/physics/arcade/view/bullets-group

    setType(type){
        this.type = type;
    }

    fire(x,y)
    {
        // move bullet to x,y removing any previous velo/accel
        this.body.reset(x,y);

        this.setActive(true);
        this.setVisible(true);
        if(this.type == 1){
            this.setVelocityY(-this.maxVel);
        }
        else if(this.type == 2){
            this.setVelocity(-this.maxVel, 0);
        }
        else if(this.type == 3){
            this.setVelocity(this.maxVel, 0);
        }
        
    }

    preUpdate(time, delta){
        super.preUpdate(time, delta);
        if(this.type == 2 || this.type == 3){
            this.body.velocity.x = Phaser.Math.Linear(this.body.velocity.x, 0, 0.13)
            this.body.velocity.y = Phaser.Math.Linear(this.body.velocity.y, -500, 0.05)
        }
        

        if(this.y <= -48){
            this.kill();
        }
    }

    kill(){
        this.setActive(false);
        this.setVisible(false);
    }
}