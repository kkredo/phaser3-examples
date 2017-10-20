var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#000',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('spark', 'assets/particles/blue.png');
}

function create ()
{
    var particles = this.add.particles('spark');

    var emitter = particles.createEmitter({
        x: 400,
        y: 300,
        angle: { min: 180, max: 360 },
        speed: 400,
        gravity: { x: 0, y: 350 },
        lifespan: 4000,
        quantity: 6,
        scale: { min: 0.1, max: 1 },
        blendMode: Phaser.BlendModes.ADD
    });

    console.log(emitter);
}
