var game = new Phaser.Game(720, 450, Phaser.AUTO, '');

game.state.add('Load', gameStates.Load);
game.state.add('Play', gameStates.Play);

game.state.start('Load');