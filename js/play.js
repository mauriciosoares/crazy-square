var gameStates = gameStates || {};

gameStates.Play = function() {
    // silence is gold
};

gameStates.Play.prototype = {
    create: function() {
        this.game.add.sprite(20, 20, 'hero');
        console.log(stages);
    }
};