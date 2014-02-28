var gameStates = gameStates || {};

gameStates.Play = function() {
    // silence is gold
};

gameStates.Play.prototype = {
    create: function() {
        // Add Hero into the game;
        // this.game.add.sprite(20, 20, 'hero');

        // add floor as a group
        this.floor = this.game.add.group();

        // Draws the map
        this.drawMap(stages.maps[stages.current]);
    },

    update: function() {

    },

    drawMap: function(map) {
        this.floor.forEachAlive(function(floor) {
            floor.kill();
        });

        // loops though all map to build the blocks
        var yLength = map.length;
        for(y = 0; y < yLength; y += 1) {

            var xLength = map[y].length;
            for(x = 0; x < xLength; x += 1) {

                if(map[y][x] == 1) {
                    this.floor.create(x * 30, y * 30, 'floor');
                }
            }
        }
    }
};