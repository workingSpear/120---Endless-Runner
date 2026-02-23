class EnemySpawner extends Phaser.Physics.Arcade.Group
{
    constructor(scene){
        super(scene.physics.world, scene);

        this.createMultiple({
            frameQuantity: 4,
            key: 'enemy',
            active: false,
            visible: false,
            classType: Enemy
        });

        Pos1 = [width/4,height-height/8];
        Pos2 = [width - width/4,height-height/8];
        Pos3 = [width/8,height-height/4];
        Pos4 = [width - width/8,height-height/4];
    }
    // Code Refrenced from Phaser Example "Bullets Group"
    // https://phaser.io/examples/v3.85.0/physics/arcade/view/bullets-group

    begin_wave(x, y){
        all_enemys = this.getMatching('active', false);
        all_enemys.array.forEach(element => {
            element.spawn(x, y);
        });
    }
}