//LG solution

//function that spits out number between 100-1000, which will be multiplied by 'dt',
//to determine how fast an enemy travels in our game
function randomRate() {
    var rate = Math.floor((Math.random() * 500) + 1);
    if (rate<200) {
        rate += 100;
    }
    else if (rate>300) {
        rate -= 100;
    }
    return rate;
};

//code to determine row positions/alignment of enemies, based on each row height being 83units
var rowDepth = [0, 83, 166, 249];
var yAdjustedPostion = [];
for (var i = 0; i<4; i++) {
    yAdjustedPostion.push(rowDepth[i]-20)//subtract 20 to compensate for misalignment
}
/* so yAdjustedPosition is now an array specifying positional rows [-20, 63, 146, 229],
for example, top row can be specified as yAdjustedPosition[0] --- we will use these
positional row values for our enemies.
Also, these y positional values are the same for the player object,
so that we can calculate collisions
*/

//function that spits out a num between 1-3, which will be fed into the randomize() fx of enemies
function randomRow() {
    var row = Math.floor((Math.random() * 3) + 1);
    return row;
}

// Enemies our player must avoid
var noOfEnemies = 3;
var noOfEnemiesRight = 2;

//win sound
var audioWin = new Audio('audio/tada.wav');

//collide sound
var audioCollide = new Audio('audio/bite.wav');

/* Our superclass, Enemy - this moves left to right!
*/
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = -101;//was -101
    //this.y = yAdjustedPostion[1];
    this.y = yAdjustedPostion[randomRow()];

    this.allEnemyLeftBoundary = -101;
    this.allEnemyRightBoundary = 505;

    //to establish an initial this.randomizedRate value, which will be changed by
    //update() method
    this.randomizedRate = randomRate();

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.collisionCheck();

    if (this.x<this.allEnemyRightBoundary) {
        this.x += this.randomizedRate*dt;
    }
    else {
    //reset position!!!!
        this.x = this.allEnemyLeftBoundary;
        this.randomize();
    }

};

Enemy.prototype.collisionCheck = function() {
        if (player.x < this.x + 60 &&
        player.x + 37 > this.x &&
        player.y < this.y + 25 &&
        30 + player.y > this.y) {
            window.requestAnimationFrame(function() {
                audioCollide.play();
                player.reset();
                for (let enemy of allEnemies) {
                    enemy.reset();
                }
                for (let enemyRight of allEnemiesRight) {
                    enemyRight.reset();
                }
            });//end requestanimationframe

        }//end if
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.randomize = function() {
    this.randomizedRate = randomRate();

    //randomRow is a fx that spits random num between 1-3
    this.y = yAdjustedPostion[randomRow()];
};

Enemy.prototype.reset = function() {
    //reset
    this.x = -101;
    this.randomize();
};



/*
Our EnemyRight Subclass! This enemy moves right to left! And this bug is blue-green!!
*/
var EnemyRight = function() {
    Enemy.call(this);
    this.sprite = 'images/enemy-bug-2.png';
    this.x = 500;//was -101 for superclass Enemy
    this.y = yAdjustedPostion[3];
}
EnemyRight.prototype = Object.create(Enemy.prototype);
EnemyRight.constructor = EnemyRight;



EnemyRight.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.collisionCheck();//delegates to Enemy.prototype object that has this method

    if (this.x>this.allEnemyLeftBoundary) {
        this.x -= this.randomizedRate*dt;
    }
    else {
    //reset position!!!!
        this.x = this.allEnemyRightBoundary;

        /* EnemyRight.prototype doesn't have randomize() method, but can
        delegate to Enemy.prototype, which does have a randomize() fx...
        which is why we can just call with the statement below:
        */
        this.randomize();
    }
};

EnemyRight.prototype.reset = function() {
    //reset
    this.x = 500;//was -101 for superclass Enemy
    this.randomize();
};


/*
LG note: Player Class skeleton/outline/psuedocode taken from walkthrough help by Matthew Cranford:
https://matthewcranford.com/arcade-game-walkthrough-part-2-pseudo-code/


hero class

hero constructor
    hero properties
        x position
        y position
        sprite


hero methods
    update position
        check for collision
        check for win
    render
        sprite
        x and y position
    handle keyboard input
        update player's x and y pos
    reset hero
*/

// Now write your own player class
var Player = function() {
    //player properties here
    this.sprite = 'images/char-pink-girl.png';
    this.rowUnit = 101;
    this.colUnit = 83;

    this.startx = this.rowUnit * 2;
    this.starty = (this.colUnit * 5) - 20 ;

    this.winY = -20;
    this.score = 0;

    this.x = this.startx;
    this.y = this.starty;

};

// This class requires an update(), render() and
// a handleInput() method.
Player.prototype.update = function(dt) {
    //check for collision - this implementation doesn't work, so needed the implementation
    //I made in Enemy.prototype.collisionCheck
/*
    for (var enemy of allEnemies) {
        console.log(Math.round(enemy.x) + ' ' + this.x)
        if (this.y === enemy.y) {
            if(this.x < (Math.round(enemy.x)+25) && this.x > (Math.round(enemy.x)-25)) {
                console.log('collide!');// log not consistent...maybe put this in enemy.update() method?
                alert('collide');
            }
        }
    }
*/
    //check for win
    if (player.y === player.winY) {
        //
        window.requestAnimationFrame(function() {

            player.winSound();
            player.reset();
            player.score++;
            alert('A win! Your score: ' + player.score);
            for (let enemy of allEnemies) {
                enemy.reset()
            };
            for (let enemyRight of allEnemiesRight) {
                enemyRight.reset();
            }

        });//end requestAnimationFrame
    }//end if
};

Player.prototype.render = function() {
    //do something
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(direction) {
    switch(direction) {
        case 'left':
            //if statement prevents too far left
            if (this.x>0) {
                this.x -= this.rowUnit;
            }
            break;
        case 'right':
            //if statement prevents too far right
            if(this.x<404) {
                this.x += this.rowUnit;
            }
            break;
        case 'up':
            //if statement prevents too far up
            if(this.y>0) {
                this.y -= this.colUnit;
            }
            break;
        case 'down':
            //if statement prevents too far down
            if(this.y<395) {
                this.y += this.colUnit;
            }
            break;
        default:
            //code block
    }//end switch
};

Player.prototype.winSound = function() {
    audioWin.play();
}

Player.prototype.reset = function() {
    //do reset
    this.x = this.startx;
    this.y = this.starty;
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
/*var allEnemies = [];
var bug1 = new Enemy();
allEnemies.push(bug1);
*/

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = new Array(noOfEnemies);
for (let i = 0; i < allEnemies.length; i++) {
    allEnemies[i] = new Enemy();
}

// Place all enemyRight objects in an array called allEnemiesRight
var allEnemiesRight = new Array(noOfEnemiesRight);
for (let i = 0; i < allEnemiesRight.length; i++) {
    allEnemiesRight[i] = new EnemyRight();
}


// Place the player object in a variable called player
var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        // LG tested keycode 32: 'quackquack'
    };

    player.handleInput(allowedKeys[e.keyCode]);
    /* LG NOTE using bracket instead of dot method for property access
    = this confused me for days!!!!
    */
    //console.log(e.keyCode);
    //console.log(e);
    //console.log(e.hasOwnProperty('code'));//still logs false, why?
    //console.log(e.code);
});
