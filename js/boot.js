var bootState = {
	preload: function () {
		// Load the image
		game.load.image('progressBar', 'assets/progressBar.png');
	},
	create: function() {
		// Set some game settings
		game.stage.backgroundColor = '#45d6ff';
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.scale.pageAlignHorizontally = true;
		game.scale.pageAlignVertically = true;
			// If the device is not a desktop, so it's a mobile device
		if (!game.device.desktop) {
		// Set the type of scaling to 'show all'
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		// Add a blue color to the page, to hide the white borders we might have
		document.body.style.backgroundColor = '#45d6ff';
		// Set the min and max width/height of the game
		game.scale.minWidth = 250;
		game.scale.minHeight = 170;
		game.scale.maxWidth = 1000;
		game.scale.maxHeight = 680;
		// Center the game on the screen
	}
		
		// Start the load state
		game.state.start('load');
	}
};