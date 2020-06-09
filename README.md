### Project 1

## Space Invaders style game
I would like to build a Space Invaders style game in which a user will control an object, with the ability to move side to side (probably using "a" and "d" buttons but maybe arrows). The user will use space bar to launch a projectile at “enemy” object that will be moving downwards from the top of the screen. The player must hit all enemies with projectiles before enemies reach the bottom of the playing area. If the enemies hit the player, or reach the bottom of the playing area, the player will lose one life, the enemies will restart at the top of the sceeen. When player lives reaches zero, a end game screen will be triggered that will display an endgame message, display the players score, as well a button to restart the game. 
I haven’t yet thought of a theme to take it away from Space Invaders, but I’m stewing on it.


## Tech:
HTML
CSS
Javascript
Canvas


## Initial Wireframes
<https://scott772250.invisionapp.com/freehand/Project-1-Wireframes-bduCPk72R>


## MVP
1. Players character generates on play area. Character can move from left to right across the width of the play area. Character can launch projectiles at enemies.
2. Enemies generate on play area. Drop down towards character. 
3. Player projectiles destroy enemy when hit.
4. Player looses one life when hit by enemy or enemy reaches bottom of play area.
5. When player looses a life, enemies start back at the top of screen.
6. End game screen, with message saying the game is over, player score, and a restart game button.
7. Start button to initialize the game. 


## Win/Lose Conditions
1. Player looses when number of lives reaches zero.
    - Lose life from being hit by enemy
    - Lose life from not hitting enemy before they reach bottom of play area.
2. Track score for successful hits.


## Stretch Goals
- Possibly limit projectiles to a finite number.
1. Add additional levels. After a certain number of enemies, level ends and a new level begins.
2. As player progresses, enemies move more and more quickly.
3. As player progresses, incease number of enemies on the screen. 
4. Track and log high scores.
5. Additional animations on enemy destruction and player fail.