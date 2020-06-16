/* -------------------------- Variables -------------------------- */
var hero = {
    top: 690,
    left: 310
}

var missiles = []

var enemies = [
    {left: 50, top: 10},
    {left: 150, top: 10},
    {left: 250, top: 10},
    {left: 350, top: 10},
    {left: 450, top: 10},
    {left: 550, top: 10},
    {left: 50, top: 80},
    {left: 150, top: 80},
    {left: 250, top: 80},
    {left: 350, top: 80},
    {left: 450, top: 80},
    {left: 550, top: 80}   
]

/* -------------------------- Functions -------------------------- */
document.onkeydown = function(e) {
    if (e.keyCode === 65) {     // "a" button
        hero.left = hero.left - 10;
        moveHero()
    }
    else if (e.keyCode === 68) {    // "d" button
        hero.left = hero.left + 10;
        moveHero()
    }
    else if (e.keyCode === 32) {    // space bar
        missiles.push({
            left: hero.left + 15,
            top: hero.top
        })
        drawMissiles()
    }
}

function moveHero() {
    document.getElementById("hero").style.left = hero.left + "px"
}

function drawMissiles() {
    document.getElementById("missiles").innerHTML = ""
    for (let missile = 0; missile < missiles.length; missile++) {
        document.getElementById("missiles").innerHTML += 
        `<div class="missile" style="left:${missiles[missile].left}px; top:${missiles[missile].top}px;"</div>`
    }
}

function moveMissiles() {
    for (let missile = 0; missile < missiles.length; missile++) {
        missiles[missile].top = missiles[missile].top - 12
    }
}

function drawEnemies() {
    document.getElementById("enemies").innerHTML = ""
    for (let enemy = 0; enemy < enemies.length; enemy++) {
        document.getElementById("enemies").innerHTML += `<div class="enemy" style="left:${enemies[enemy].left}px; top:${enemies[enemy].top}px;"</div>`
    }
}

function moveEnemies() {
    for (let enemy = 0; enemy < enemies.length; enemy++) {
        enemies[enemy].top = enemies[enemy].top + 1
    }
}

function collisionDetection() {
    for (let enemy = 0; enemy < enemies.length; enemy++) {
        for (let missile = 0; missile < missiles.length; missile++) {
            if (
                (missiles[missile].top <= enemies[enemy].top + 50) && 
                (missiles[missile].top > enemies[enemy].top) &&
                (missiles[missile].left >= enemies[enemy].left) &&
                (missiles[missile].left <= enemies[enemy].left + 50)
            ){
                enemies.splice(enemy, 1)
                missiles.splice(missile, 1)
                //score++
            }
        }
    if (
        (hero.top <= enemies[enemy].top + 50) && 
        (hero.top > enemies[enemy].top) &&
        (hero.left >= enemies[enemy].left) &&
        (hero.left <= enemies[enemy].left + 50)
    ){
        endGame()
    }
    }
}

function endGame() {
    clearInterval(gameLoop)
}

function gameLoop() {
    setInterval(gameLoop, 50)
    moveMissiles()
    drawMissiles()
    moveEnemies()
    drawEnemies()
    collisionDetection()
}

gameLoop()