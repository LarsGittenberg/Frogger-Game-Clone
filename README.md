
# OOJS Concepts: An Arcade Game Project

- Project: constructing a web-browser based arcade game via HTML5 Canvas and JS.
- This project is a student submission for [Udacity's Front End Web Development Nanodegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001).
- Starter project has been cloned from GitHub [here](https://github.com/udacity/frontend-nanodegree-arcade-game).
- You can view Udacity's rubric/instructions for students in the [Udacity Rubric](https://review.udacity.com/#!/projects/2696458597/rubric).
- The student doesn't build the game from scratch. Much of the HTML5 canvas rendering code has been setup, but the game characters and their Object Oriented JavaScript properties will need to be coded by the student - this forms the bulk of the challenge. This [game setup guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true) was provided for the student.



## Table of Contents

- [Instructions](#instructions)
- [Game Goal](#gamegoal)
- [Game Behavior](#gamebehavior)
- [Acknowledgments](#acknowledgements)



## Instructions
Clone or download this project onto your computer. You will not need to have access to the internet for the game to work. You will need a browser to open and play index.html. For basic functionality, the following files are needed:
- index.html
- js/app.js
- js/engine.js
- js/resources.js
- css/style.css

Additionally, you'll also need to include all of the assets from the audio and most assets from the images folder.


All files listed above are already included in this repository.
If you change the folder structure, you will need to change the file path src/href calls.

## <a name="gamegoal"></a>Game Goal
- The goal is to use the up/down/left/right arrow keys on your keyboard to move the pink-haired heroine up to the top-most 'water zone' on the gameboard, without colliding with enemy bugs.

## <a name="gamebehavior"></a>Game Behavior
- arrow keys move the player
- red bugs move left to right, appearing on random rows with random speeds
- green bugs move right to left, appearing on random rows with random speeds
- when player collides with an enemy bug, the game resets, game emits 'chomp' sound
- when player reaches the top 'water zone', game emits 'victory' sound, the player receives a point. An alert window will notify the player of their 'win' and their current score. Closing the alert window allows player to continue, game resets keeping track of player wins/score

## <a name="acknowledgments"></a>Acknowledgements
Special thanks to Matthew Cranford for help in initial setup of player build in his [class/psuedo-code walkthrough](https://matthewcranford.com/arcade-game-walkthrough-part-2-pseudo-code/)



