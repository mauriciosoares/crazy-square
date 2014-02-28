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

    },

    create: function() {
        game.state.start('Play');
    }
};