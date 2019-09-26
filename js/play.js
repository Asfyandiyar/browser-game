var playState = {
	// Removed the preload function
	create: function() {
		// Removed background color and physics system
		this.hero=game.add.sprite(160, 490, 'hero');
		game.physics.arcade.enable(this.hero);
		this.hero.body.collideWorldBounds = true;
		this.hero.inputEnabled = true;
		this.hero.input.enableDrag(true);
	
		// If the game is running on a mobile device
		if (!game.device.desktop) {
			// Display the mobile inputs
			this.addMobileInputs();
		}
	
	this.keys = game.input.keyboard.createCursorKeys();
	this.words=game.add.group();
	game.global.score = 0;
	var textBestScore = 'best: ' + localStorage.getItem('bestScore');

	game.time.events.loop(game.global.letFrequency, this.addColOfWords, this);//400
	game.time.events.loop(3600000, this.addWin, this);
	
	this.scoreLabel = game.add.text(game.world.centerX, 140, '0',
		{ font: '70px Arial', fill: '#ffffff' });
	this.scoreLabel.anchor.setTo(0.5, 0.5);
	this.bestScore = game.add.text(game.world.width-100, 20, textBestScore,
		{font: '30px Arial', fill: '#ff5313'});
	this.bestScore.anchor.setTo(0.5, 0.5);
	},
	// No changes
	
	update: function() {
		this.handleKey();
		this.handleColissions();
	},
	
	handleColissions: function() {
		game.physics.arcade.overlap(this.hero, this.words, this.restartGame, null);
	},

	restartGame: function() {
		game.state.start('menu');
	},

	addWin: function() {
		this.words.setAll('body.enable', false, false, 0, false);
		this.words.visible=false;
		var winLabel = game.add.text(game.world.centerX, game.world.centerY,
			'Congratulations!', { font: '40px Arial', fill: '#ffffff' });
		winLabel.anchor.setTo(0.5, 0.5);
			
		if(game.device.desktop) 
			var text='press the SPACEBAR to continue';
		else 
			var text='touch the screen to continue';
		
		var endLabel = game.add.text(game.world.centerX, game.world.height-130,
			text, { font: '25px Arial', fill: '#ffffff' });
		endLabel.anchor.setTo(0.5, 0.5);
			
		var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		// When the 'upKey' is pressed, it will call the 'start' function once
		spaceKey.onDown.addOnce(this.end, this);
		if(!game.device.desktop)
			game.input.onDown.addOnce(this.end, this);
	},

	end: function() {
		game.state.start('menu');
	},

	addColOfWords: function() {
		if(game.global.timer) {
			var hole = Math.floor(Math.random()*6)+1;
		
		for(var i=0; i<10; i++)
			if(i!=hole&&i!=hole+1) 
				this.addOneWord(i*40+10, 0);
	}
},

	addOneWord: function(x, y) {
		this.word=game.add.sprite(x, y, 'word');
		this.words.add(this.word);
		game.physics.arcade.enable(this.word);
		this.word.body.gravity.y=game.global.wordSpeed;
		this.word.checkWorldBounds=true;
		this.word.outOfBoundsKill=true;
		if(this.words.bottom > game.world.height-240) {
			game.global.score += 1/8;
		this.scoreLabel.text = game.global.score;
		}
	},

	handleKey: function() {
		if(this.keys.right.isDown||this.moveRight) {
			this.move(1);
		}
		else if(this.keys.left.isDown||this.moveLeft) {
			this.move(-1);
		}
		else {
			this.move(0);
		}
	},

	move: function (direction) {
		var speed = game.global.lightningSpeed;
		this.hero.body.velocity.x=direction*speed;
	},

	addMobileInputs: function() {
		// Movement variables
		this.moveLeft = false;
		this.moveRight = false;
		// Add the move left button
		this.leftButton = game.add.sprite(-25, 0, 'left');
		this.leftButton.inputEnabled = true;
		this.leftButton.events.onInputOver.add(function(){this.moveLeft=true;}, this);
		this.leftButton.events.onInputOut.add(function(){this.moveLeft=false;}, this);
		this.leftButton.events.onInputDown.add(function(){this.moveLeft=true;}, this);
		this.leftButton.events.onInputUp.add(function(){this.moveLeft=false;}, this);
		// Add the move right button
		this.rightButton = game.add.sprite(225, 0, 'right');
		this.rightButton.inputEnabled = true;
		this.rightButton.events.onInputOver.add(function(){this.moveRight=true;}, this);
		this.rightButton.events.onInputOut.add(function(){this.moveRight=false;}, this);
		this.rightButton.events.onInputDown.add(function(){this.moveRight=true;}, this);
		this.rightButton.events.onInputUp.add(function(){this.moveRight=false;}, this);
	},
};