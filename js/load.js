var loadState = {
	preload: function () {
		// Add a 'loading...' label on the screen
		var loadingLabel = game.add.text(game.world.centerX, 350, 'Loading...',
	  	{ font: '30px Arial', fill: '#ffffff' });
		loadingLabel.anchor.setTo(0.5, 0.5);
		// Display the progress bar
		var progressBar = game.add.sprite(game.world.centerX, 400, 'progressBar');
		progressBar.anchor.setTo(0.5, 0.5);
		game.load.setPreloadSprite(progressBar);
		// Load all our assets
		game.load.image('hero', 'assets/hero_new.png');
		game.load.image('word', 'assets/word.png');
		// game.load.image('zombie1', 'assets/zomb11.png');
		// game.load.image('zombie2', 'assets/zomb21.png');
		// game.load.audio('die', 'assets/die.wav');
		// game.load.image('rightButton', 'assets/buttons.png');
	 //  game.load.image('leftButton', 'assets/buttons.png');
		// game.load.image('settingButton', 'assets/setButton.png');
		// game.load.image('backButton', 'assets/backButton.png');
	},
	create: function() {
		// Go to the menu state
		game.state.start('menu');
	}
};