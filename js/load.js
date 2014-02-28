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
        this.game.load.image('hero', 'assets/hero.jpg');
    },

    create: function() {
        game.state.start('Play');
    }
};