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

//LG Player Class skeleton/outline taken from walkthrough help by Matthew Cranford:
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
    this.sprite = 'images/char-pink-girl.png';
    this.moveInRow = 101;
    this.moveInCol = 83;

    this.startx = this.moveInRow * 2;
    this.starty = (this.moveInCol * 5) -5 ;

    this.x = this.startx;
    this.y = this.starty;


}
// This class requires an update(), render() and
// a handleInput() method.
Player.prototype.update = function(dt) {
    //do something
}

Player.prototype.render = function() {
    //do something
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function(direction) {
    //do something
    console.log(direction);
switch(direction) {
    case 'left':
        if (this.x>0) {
            this.x -= this.moveInRow;
        }
        break;
    case 'right':
        if(this.x<404) {
            this.x += this.moveInRow;
        }
        break;
    case 'up':
        this.y -= this.moveInCol;
        break;
    case 'down':
        this.y += this.moveInCol;
        break;
    default:
        //code block
}

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
        40: 'down',
        // LG tested keycode 32: 'quackquack'
    };

    player.handleInput(allowedKeys[e.keyCode]);
    /* LG NOTE using bracket instead of dot method for property access
    = this confused me for days!!!!
    */
    console.log(e.keyCode);
    console.log(e);
    console.log(e.hasOwnProperty('location'));// log false
    console.log(e.code);
});
