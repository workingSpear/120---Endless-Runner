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

        this.Pos1 = [width/4,height/8];
        this.Pos2 = [width - width/4,height/8];
        this.Pos3 = [width/8,height/4];
        this.Pos4 = [width - width/8,height/4];
    }
    // Code Refrenced from Phaser Example "Bullets Group"
    // https://phaser.io/examples/v3.85.0/physics/arcade/view/bullets-group

    begin_wave(){
        let all_enemys = this.getMatching('active', false);
        all_enemys[0].spawn(this.Pos1[0], this.Pos1[1]);
        all_enemys[1].spawn(this.Pos2[0], this.Pos2[1]);
        all_enemys[2].spawn(this.Pos3[0], this.Pos3[1]);
        all_enemys[3].spawn(this.Pos4[0], this.Pos4[1]);
        enemys_left = 4;
    }

    get_enemys(){   
        let all_enemys = this.getMatching('active', true);
        return all_enemys
    }
}