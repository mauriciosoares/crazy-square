var gameStates = gameStates || {};

gameStates.Play = function() {
    // silence is gold
};

gameStates.Play.prototype = {
    create: function() {
        // add floor as a group
        this.floor = this.game.add.group();

        // configs hero
        this.hero = this.game.add.sprite(-50, -50, 'hero');
        this.hero.body.gravity.y = 1000;

        var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.add(this.jumpHero, this);

        // Draws the map
        this.drawMap(stages.maps[stages.current]);

        // some conditions
        this.direction = 200;
        console.log(this.hero.body.touching);
    },

    update: function() {
        this.game.physics.collide(this.hero, this.floor, this.invertDirection, null, this);

        this.hero.body.velocity.x = this.direction;
    },

    invertDirection: function(hero, floor) {
        // invert direction according to touch event
        if(hero.body.touching.right) {
            // makes hero go to left
            this.direction = -200;
        }else if(hero.body.touching.left) {
            this.direction = 200;
        }
    },

    initHero: function() {
        this.hero.x = stages.maps[stages.current].heroPosition.x;
        this.hero.y = stages.maps[stages.current].heroPosition.y;
    },

    jumpHero: function() {
        this.hero.body.velocity.y = -430;
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
                     floor.body.immovable = true;
                }
            }
        }

        this.initHero();
    }
};