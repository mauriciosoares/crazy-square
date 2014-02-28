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
    },

    create: function() {
        game.state.start('Play');
    }
};