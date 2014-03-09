var gameStates = gameStates || {};

gameStates.Play = function() {
  // silence is gold
};

gameStates.Play.prototype = {
  create: function() {
    // add floor as a group
    this.floor = this.game.add.group();
    this.enemy = this.game.add.group();

    // configs Win
    this.win = this.game.add.sprite(-50, -50, 'win');
    this.win.body.immovable = true;

    // configs hero
    this.hero = this.game.add.sprite(-50, -50, 'hero');
    this.hero.body.gravity.y = 1000;

    var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    spaceKey.onDown.add(this.jumpHero, this);

    // when hero leave bounds
    this.hero.events.onOutOfBounds.add(this.killHero, this);

    // Draws the map
    this.drawMap(stages.maps[stages.current]);

    this.direction = 0;
  },

  update: function() {
    // makes hero collide with the ground
    this.game.physics.collide(this.hero, this.floor, this.invertDirection, null, this);

    // wins when touch the win mark
    this.game.physics.overlap(this.hero, this.win, this.nextStage, null, this);

    // kills hero when he touches the enemy
    this.game.physics.overlap(this.hero, this.enemy, this.killHero, null, this);

    this.hero.body.velocity.x = this.direction;
  },

  invertDirection: function(hero, floor) {
    // invert direction according to touch event
    if(hero.body.touching.right) {
      // makes hero go to left
      this.direction = -150;
    }else if(hero.body.touching.left) {
      this.direction = 150;
    }
  },

  killHero: function() {
    this.initHero();
  },

  initHero: function() {
    // little trick
    setTimeout(function() {
      this.direction = 0;
    }.bind(this), 1);

    this.hero.x = stages.maps[stages.current].heroPosition.x;
    this.hero.y = stages.maps[stages.current].heroPosition.y;
    setTimeout(function() {
      this.direction = stages.maps[stages.current].heroPosition.direction;
    }.bind(this), 1000);
  },

  jumpHero: function() {
    if(this.hero.body.touching.down) {
      this.hero.body.velocity.y = -450;
    }
  },

  drawMap: function(map) {
    this.floor.forEachAlive(function(floor) {
      floor.kill();
    });

    this.enemy.forEachAlive(function(enemy) {
      enemy.kill();
    });

    if(this.win) {

    }

    // loops though all map to build the blocks
    var yLength = map.matrix.length;
    for(y = 0; y < yLength; y += 1) {

      var xLength = map.matrix[y].length;
      for(x = 0; x < xLength; x += 1) {
        var floor,
          win,
          posX = x * 30,
          posY = y * 30;

        if(typeof map.matrix[y][x] == 'number') {
          if(map.matrix[y][x] !== 0) {
            floor = this.floor.create(posX, posY, 'floor');
            floor.body.immovable = true;
            floor.scale.x = map.matrix[y][x];
          }
        } else {
          if(map.matrix[y][x] == 'W') {
            this.win.x = posX;
            this.win.y = posY;
          } else if(map.matrix[y][x] == 'E') {
            enemy = this.enemy.create(posX, 20 + (posY), 'enemy');
            enemy.body.immovable = true;
          }
        }
      }
    }

    this.initHero();
  },

  nextStage: function() {
    stages.current += 1;
    this.drawMap(stages.maps[stages.current]);
  }
};