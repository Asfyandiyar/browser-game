/* var game = new Phaser.Game(400, 600, Phaser.AUTO, null, {init: init, preload: preload, create: create, update: update});

/* var hero;
var word; 
var speed = 700;
/* var words;
var timer;
var timer2;
var timer3; */
//var score = 0;
/* var labelScore; */
//var recordScore = 0;
//var labelRecordScogame.stage.backgroundColor = '#45d6ff';re;
//var seconds = 0;
/* var labelSeconds; 
function init() {
	keys = game.input.keyboard.addKeys({ //
		left: Phaser.KeyCode.LEFT,
		right: Phaser.KeyCode.RIGHT
	});
}

function preload() {
	//game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  //game.scale.pageAlignHorizontally = true;
  //game.scale.pageAlignVertically = true;
	game.stage.backgroundColor = '#45d6ff';
	game.load.image('hero', 'images/hero3.png');
	game.load.image('word', 'images/word.png');
	game.load.image('zombie1', 'images/zomb11.png');
	game.load.image('zombie2', 'images/zomb21.png');
}

function create() {
	game.physics.startSystem(Phaser.Physics.ARCADE);
	hero=game.add.sprite(160, 490, 'hero');
	game.physics.arcade.enable(hero);
	hero.body.collideWorldBounds = true;
		words=game.add.group();
	timer = game.time.events.loop(500, addColOfWords);
	timer2 = game.time.events.loop(600000, addZombies);
	timer3 = game.time.events.loop(1000, getSeconds);
	labelScore=game.add.text(20, 20, "0",
				{font: "30px Arial", 	fill: "#ffffff"});
	labelSeconds=game.add.text(360, 20, "0", 
			{font: "30px Arial", 	fill: "#ffffff"});
	/* labelRecordScore=game.add.text(360, 20, "0",
				{font: "30px Arial", 	fill: "#ffffff"});
				labelRecordScore.text=recordScore; 
}

function update() {
	handleKey();
	handleColissions();
}

function getSeconds() {
	seconds++;
	labelSeconds.text=seconds;
}
 
function handleColissions() {
	game.physics.arcade.overlap(
	hero, words, restartGame, null);
} 

function restartGame() {
	score=0;
	seconds=0;
	game.state.restart();
}

function addZombies() {
	game.add.image(0, 10, 'zombie1');
	game.add.image(200, 10, 'zombie2');
	words.visible=false;
	words.enableBody=false;
}

function addColOfWords() {
	var hole = Math.floor(Math.random()*5)+1;
	
	for(var i=0; i<8; i++)
		if(i!=hole&&i!=hole+1) 
			this.addOneWord(i*60+10, 0);
	score += 1;
	labelScore.text = score;  
		
}

function addOneWord(x, y) {
	word=game.add.sprite(x, y, 'word');
	words.add(word);
	game.physics.arcade.enable(word);
	word.body.gravity.y=400;
	word.checkWorldBounds=true;
	word.outOfBoundsKill=true;
}

function handleKey() {
	if(this.keys.right.isDown) {
		this.move(1);
	}
	else if(this.keys.left.isDown) {
		this.move(-1);
	}
	else {
		this.move(0);
	}
}

function move(direction) {
	hero.body.velocity.x=direction*speed;
}

 */
var mainState = {

	preload: function() {
		game.load.image('hero', 'images/hero3.png');
	game.load.image('word', 'images/word.png');
	game.load.image('zombie1', 'images/zomb11.png');
	game.load.image('zombie2', 'images/zomb21.png');
	},
	
	create: function() {
		game.stage.backgroundColor = '#45d6ff';
		game.physics.startSystem(Phaser.Physics.ARCADE);
	this.hero=game.add.sprite(160, 490, 'hero');
	game.physics.arcade.enable(this.hero);
	this.hero.body.collideWorldBounds = true;
	this.keys = game.input.keyboard.createCursorKeys();
		this.words=game.add.group();
		
	game.time.events.loop(500, this.addColOfWords, this);
	game.time.events.loop(600000, this.addZombies, this);
	game.time.events.loop(1000, this.getSeconds, this);
	this.score=0;
	this.seconds=0;
	this.labelScore=game.add.text(20, 20, "0",
				{font: "30px Arial", 	fill: "#ffffff"});
	this.labelSeconds=game.add.text(360, 20, "0", 
			{font: "30px Arial", 	fill: "#ffffff"});
	}, 
	
	update: function() {
		this.handleKey();
		this.handleColissions();
	},
	
	getSeconds: function() {
	this.seconds++;
	this.labelSeconds.text=this.seconds;
},
 
handleColissions: function() {
	game.physics.arcade.overlap(
	this.hero, this.words, this.restartGame, null);
},

restartGame: function() {
	this.score=0;
	this.seconds=0;
	game.state.restart();
},

addZombies: function() {
	game.add.image(0, 10, 'zombie1');
	game.add.image(200, 10, 'zombie2');
	this.words.visible=false;
	this.words.enableBody=false;
},

addColOfWords: function() {
	var hole = Math.floor(Math.random()*5)+1;
	
	for(var i=0; i<8; i++)
		if(i!=hole&&i!=hole+1) 
			this.addOneWord(i*60+10, 0);
	this.score += 1;
	this.labelScore.text = this.score;  
		
},

addOneWord: function(x, y) {
	this.word=game.add.sprite(x, y, 'word');
	this.words.add(this.word);
	game.physics.arcade.enable(this.word);
	this.word.body.gravity.y=400;
	this.word.checkWorldBounds=true;
	this.word.outOfBoundsKill=true;
},

handleKey: function() {
	if(this.keys.right.isDown) {
		this.move(1);
	}
	else if(this.keys.left.isDown) {
		this.move(-1);
	}
	else {
		this.move(0);
	}
},

move: function (direction) {
	var speed = 100;
	this.hero.body.velocity.x=direction+speed;
},
};

var game = new Phaser.Game(400, 600, Phaser.AUTO, 'gameDiv');
game.state.add('main', mainState);
game.state.start('main');