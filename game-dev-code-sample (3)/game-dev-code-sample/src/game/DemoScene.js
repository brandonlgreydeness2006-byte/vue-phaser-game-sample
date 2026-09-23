import Phaser from 'phaser';
export default class DemoScene extends Phaser.Scene {
  constructor(onCollected) { super('demo'); this.onCollected = onCollected; this.count = 0; }
  create() {
    this.add.text(24,20,'Collect the stars',{fontFamily:'Arial',fontSize:'22px',color:'#ffffff'});
    this.player = this.add.rectangle(100,240,34,34,0x55c2ff); this.physics.add.existing(this.player); this.player.body.setCollideWorldBounds(true);
    this.cursors=this.input.keyboard.createCursorKeys(); this.keys=this.input.keyboard.addKeys('W,A,S,D');
    this.stars=this.physics.add.staticGroup();
    [[220,120],[390,330],[560,150],[690,370],[730,90]].forEach(([x,y])=>{const s=this.add.star(x,y,5,7,15,0xffd166); this.physics.add.existing(s,true); this.stars.add(s);});
    this.physics.add.overlap(this.player,this.stars,(_,star)=>{star.destroy(); this.count++; this.onCollected(this.count);});
  }
  update(){ const b=this.player.body; b.setVelocity(0); const speed=220; if(this.cursors.left.isDown||this.keys.A.isDown)b.setVelocityX(-speed); else if(this.cursors.right.isDown||this.keys.D.isDown)b.setVelocityX(speed); if(this.cursors.up.isDown||this.keys.W.isDown)b.setVelocityY(-speed); else if(this.cursors.down.isDown||this.keys.S.isDown)b.setVelocityY(speed); b.velocity.normalize().scale(speed); }
}
