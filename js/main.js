var hero = {
    top: 700,
    left: 550
}

var missiles = []

var enemies = [
    { left: 200, top: 100 },
    { left: 300, top: 100 },
    { left: 400, top: 100 },
    { left: 500, top: 100 },
    { left: 600, top: 100 },
    { left: 700, top: 100 },
    { left: 800, top: 100 },
    { left: 900, top: 100 },
    { left: 200, top: 175 },
    { left: 300, top: 175 },
    { left: 400, top: 175 },
    { left: 500, top: 175 },
    { left: 600, top: 175 },
    { left: 700, top: 175 },
    { left: 800, top: 175 },
    { left: 900, top: 175 }
]

document.onkeydown = function(e) {
    console.log(e.keyCode)

    if (e.keyCode === 65) {
        hero.left = hero.left - 10;
        moveHero()
    }
    else if (e.keyCode === 68) {
        hero.left = hero.left + 10;
        moveHero()
    }
    else if (e.keyCode === 32) {
        console.log("fire")
        missiles.push({
            left: hero.left + 15,
            top: hero.top
        })
        drawMissiles()
        console.log()
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
        missiles[missile].top = missiles[missile].top - 5
    }
}

function drawEnemies() {
    document.getElementById("enemies").innerHTML = ""
    for (let enemy = 0; enemy < enemies.length; enemy++) {
        document.getElementById("enemies").innerHTML += 
        `<div class="enemy" style="left:${enemies[enemy].left}px; top:${enemies[enemy].top}px;"</div>`
    }
}

function moveEnemies() {
    for (let enemy = 0; enemy < enemies.length; enemy++) {
        enemies[enemy].top = enemies[enemy].top + 3
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
                console.log("hit!")
                enemies.splice(enemy, 1)
                missiles.splice(missile), 1
            }
        }
    }
}

function gameLoop() {
    setTimeout(gameLoop, 50)
    moveMissiles()
    drawMissiles()
    moveEnemies()
    drawEnemies()
    collisionDetection()
}

gameLoop()