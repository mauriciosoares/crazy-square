/*
* Game: Crazy Square
* Creator: Mauricio Soares
*/

var gameStates = gameStates || {};

gameStates.Load = function() {
    // silence is gold
};

gameStates.Load.prototype = {
  preload: function() {
    // Adds all images
    this.game.load.image('hero', 'assets/hero.jpg');
    this.game.load.image('floor', 'assets/floor.jpg');
    this.game.load.image('win', 'assets/win.png');
    this.game.load.image('enemy', 'assets/enemy.png');
  },

  create: function() {
    game.state.start('Play');
  }
};