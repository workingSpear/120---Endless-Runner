// Player prefab
class Enemy extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'enemy')
    scene.physics.add.existing(this);
    scene.add.existing(this); // adds to existing, displayList, updateList
    this.setOrigin(0.5,0.5);
    this.HP = 100
     
    // move Vars
  }
  hit(damage){
    this.HP -= damage;
    return this.HP;
  }

  spawn(x, y){
    this.body.reset(x,y);
    this.setActive(true);
    this.setVisible(true);
  }

  kill(){
    this.body.reset(-32,32);
    this.setActive(false);
    this.setVisible(false);
  }
}