// Player prefab
class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame)
    scene.physics.add.existing(this);
    scene.add.existing(this); // adds to existing, displayList, updateList
    this.setOrigin(0.5,0.5);
     
    // move Vars
    this.moveSpeed = 250.0;
    this.moveDir;

    this.setCollideWorldBounds(true)
  }

  get_move_direction(){
    this.moveDir = new Phaser.Math.Vector2(0,0);
    // gets X direction
    if(keyLeft.isDown) {
      this.moveDir.x = -1.0;
    } else if (keyRight.isDown){
      this.moveDir.x = 1.0;
    }

    // gets Y direction
    if(keyDown.isDown) {
      this.moveDir.y = 1.0;
    } else if (keyUp.isDown){
      this.moveDir.y = -1.0;
    }

    // normalize to prevent faster accel on diags
    this.moveDir.normalize();
  }

  update(time, delta) {
    this.get_move_direction();
   // console.log(keyDown.isDown)

    // apply mag
    this.moveDir.scale(this.moveSpeed);

    // set speed
    this.setVelocity(this.moveDir.x, this.moveDir.y);
  }
}