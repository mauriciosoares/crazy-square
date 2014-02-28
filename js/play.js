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

        // configs hero
        this.hero = this.game.add.sprite(-50, -50, 'hero');
        this.hero.body.gravity.y = 1000;

        this.initHero();

        // Draws the map
        this.drawMap(stages.maps[stages.current]);
    },

    update: function() {
        this.game.physics.collide(this.hero, this.floor);
    },

    initHero: function() {
        this.hero.x = stages.maps[stages.current].heroPosition.x;
        this.hero.y = stages.maps[stages.current].heroPosition.y;
    },

    drawMap: function(map) {
        this.floor.forEachAlive(function(floor) {
            floor.kill();
        });

        // loops though all map to build the blocks
        var yLength = map.matrix.length;
        for(y = 0; y < yLength; y += 1) {

            var xLength = map.matrix[y].length;
            for(x = 0; x < xLength; x += 1) {
                var floor;
                if(map.matrix[y][x] == 1) {
                     floor = this.floor.create(x * 30, y * 30, 'floor');
                     console.log(floor);
                     floor.body.immovable = true;
                }
            }
        }

        this.initHero();
    }
};