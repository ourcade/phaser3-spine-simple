var config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 }
		}
	},
	scene: {
		preload: preload,
		create: create
	},
	plugins: {
		scene: [
			{ key: 'SpinePlugin', plugin: window.SpinePlugin, mapping: 'spine' }
		]
	}
};

var game = new Phaser.Game(config);

function preload ()
{
	this.load.setPath('assets/spine/')
	this.load.spine('boy', 'spineboy.json', 'spineboy.atlas')
}

function create ()
{
	const spineBoy = this.add.spine(400, 600, 'boy', 'idle', true)

	spineBoy.scaleX = 0.5
	spineBoy.scaleY = 0.5
}
