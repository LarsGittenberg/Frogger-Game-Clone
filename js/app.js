// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Player Class skeleton/outline taken from walkthrough help by Matthew Cranford:
//https://matthewcranford.com/arcade-game-walkthrough-part-2-pseudo-code/

//hero class

//hero constructor
    //hero properties
        //x position
        //y position
        //sprite


//hero methods
    //update position
        //check for collision
        //check for win
    //render
        //sprite
        //x and y position
    //handle keyboard input
        //update player's x and y pos
    //reset hero

// Now write your own player class
var Player = function() {
    //player properties here
}
// This class requires an update(), render() and
// a handleInput() method.
Player.prototype.update = function() {
    //do something
}

Player.prototype.render = function() {
    //do something
}

Player.prototype.handleInput = function() {
    //do something
}

Player.prototype.reset = function() {
    //do reset
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [new Enemy()];

// Place the player object in a variable called player
var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
