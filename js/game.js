// Initialise Phaser
var game = new Phaser.Game(400, 600, Phaser.AUTO, 'gameDiv');
// Define our 'global' variable
game.global = {
score: 0,
second: 0,
wordSpeed: 1000,//1000
lightningSpeed: 800,//800
letFrequency: 400,//400
timer: true
};

// Add all the states
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
//game.state.add('settings', settingState);
game.state.add('play', playState);

// Start the 'boot' state
game.state.start('boot');