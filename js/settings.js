var settingState = {
	create: function() {
		var nameLabel = game.add.text(game.world.centerX, 80, 'Settings',
		{ font: '50px Arial', fill: '#ffffff' });
		nameLabel.anchor.setTo(0.5, 0.5);
		
		var backButton = game.add.button(50, 20, 'backButton', this.toMenu, this);
		backButton.anchor.set(0.5, 0.5);
	},
	
	toMenu: function () {
		game.state.start('menu');
	},
};