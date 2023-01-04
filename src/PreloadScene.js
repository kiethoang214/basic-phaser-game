import { Scene } from "phaser";
import logoImg from '../assets/logo.png';

class PreloadScene extends Scene {
    constructor() {
        super('preload');
    }

    preload() {
        this.load.image('logo', logoImg);
        this.load.image('spark', 'assets/blue.png');
    }

    create() {
        const logo = this.add.image(400, 300, 'logo');
        logo.setDepth(99);

        var particles = this.add.particles('spark');

        var emitter = particles.createEmitter();
    
        emitter.setPosition(400, 300);
        emitter.setSpeed(200);
        emitter.setBlendMode(Phaser.BlendModes.ADD);

        this.input.on('pointerdown', () => this.scene.start('game'))
    }
}

export default PreloadScene;