class PlayerShotGroup extends Phaser.Physics.Arcade.Group
{
    constructor(scene){
        super(scene.physics.world, scene);

        this.createMultiple({
            frameQuantity: 30,
            key: 'playerShot',
            active: false,
            visible: false,
            classType: PlayerShot
        });
    }
    // Code Refrenced from Phaser Example "Bullets Group"
    // https://phaser.io/examples/v3.85.0/physics/arcade/view/bullets-group

    fireBullet(x, y){
        // gets the first 3 deadshots that have it's active set to false, aka dead bullets
        var deadShots = this.getMatching('active', false).slice(0,3);
        if(deadShots.length == 3 && deadShots[0] && deadShots[1] && deadShots[2]){
            deadShots[0].setType(1);
            deadShots[0].fire(x, y);
            deadShots[1].setType(2);
            deadShots[1].fire(x, y);
            deadShots[2].setType(3);
            deadShots[2].fire(x, y);
        }
    }
}