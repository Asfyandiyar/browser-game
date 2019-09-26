var menuState = {
	create: function() {
		var numKey=game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_0);
		numKey.onDown.addOnce(function() {
			localStorage.setItem('bestScore', 0);
		}, this);

		if (!localStorage.getItem('bestScore')) {
			// Then set the best score to 0
			localStorage.setItem('bestScore', 0);
		}
		// If the score is higher than the best score
		if (game.global.score > localStorage.getItem('bestScore')) {
			// Then update the best score
			localStorage.setItem('bestScore', game.global.score);
		}
		// Display the name of the game
		var nameLabel = game.add.text(game.world.centerX, -80, 'UpUp',
			{ font: '100px Arial', fill: '#ffffff' });
		nameLabel.anchor.setTo(0.5, 0.5);
		game.add.tween(nameLabel).to({y: 80}, 1000).easing(Phaser.Easing.Bounce.Out).start();

		var textScore = 'score \n' + game.global.score;
		var textBestScore = 'best score \n' + localStorage.getItem('bestScore')
			
		var scoreLabel = game.add.text(-100, game.world.centerY-50, textScore,
			{ font: '50px Arial', fill: '#ffffff', align: 'center' });
		scoreLabel.anchor.setTo(0.5, 0.5);
		game.add.tween(scoreLabel).to({x: game.world.centerX}, 1000).easing(Phaser.Easing.Bounce.Out).start();

		var bestScoreLabel = game.add.text(500, game.world.centerY+80, textBestScore,
			{font: '50px Arial', fill: '#ff5313', align: 'center'});
		bestScoreLabel.anchor.setTo(0.5, 0.5);
		game.add.tween(bestScoreLabel).to({x: game.world.centerX}, 1000).easing(Phaser.Easing.Bounce.Out).start();

		if (game.device.desktop) {
			var txt = 'press the up arrow key to start';
		} else {
			var txt = 'touch the screen to start';
		}
		// Explain how to start the game
		var startLabel = game.add.text(game.world.centerX, 680, txt,
			{ font: '25px Arial', fill: '#ffffff' });
		startLabel.anchor.setTo(0.5, 0.5);
		game.add.tween(startLabel).to({y: game.world.height-80}, 1000).easing(Phaser.Easing.Bounce.Out).start();

		var upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
		upKey.onDown.addOnce(this.start, this);
		if(!game.device.desktop)
			game.input.onDown.addOnce(this.start, this);
		},

	start: function() {
		// Start the actual game
		game.state.start('play');
	},
};