class Credits extends Phaser.Scene {
    constructor() {
        super('credits')
    }


    create() {
        this.add.text(width/2, height/8, "Credits", textConfig).setOrigin(0.5)
        textConfig.fontSize = 12;
        textConfig.align = "center"
        this.add.text(width/2, height/2.9, "Background music is royalty free by David Fesliyan", textConfig).setOrigin(0.5)
        
        this.add.text(width/2, height/2, "All sound effects are royalty free from pixabay.com", textConfig).setOrigin(0.5)
        this.add.text(width/2, height/1.15, "Press Any Key to go back.", textConfig).setOrigin(0.5)
        textConfig.fontSize = 14;
        this.input.keyboard.once('keydown', () => {
            this.sound.play('select')
            this.scene.start('menu');
        })
        
    }

    update() {
    }
}