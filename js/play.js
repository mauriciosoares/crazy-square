var gameStates = gameStates || {};

console.log(gameStates);
gameStates.Play = function() {
    // silence is gold
};

gameStates.Play.prototype = {
    create: function() {
        console.log('Start Game');
    }
};