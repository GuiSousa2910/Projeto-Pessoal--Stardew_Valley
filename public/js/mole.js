let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;

window.onload = function () {
    setGame();
};

function setGame() {
    for (let i = 0; i < 9; i++) {

        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener('click', selectTile);
        document.getElementById("board").appendChild(tile);
    }

    if (score <= 40) {
        setInterval(setMole, 800);
        setInterval(setPlant, 1200);
    }
    else if (score > 40 && score <= 150) {
        setInterval(setMole, 600);
        setInterval(setPlant, 1000);
    }
    else if (score > 150 && score <= 200) {
        setInterval(setMole, 400);
        setInterval(setPlant, 700);
    }
    else if (score > 300) {
        setInterval(setMole, 300);
        setInterval(setPlant, 700);
    }
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {

    if (gameOver) {
        return;
    }

    if (currMoleTile) {
        currMoleTile.innerHTML = '';
    }

    let mole = document.createElement('img');
    mole.src = '../public/assets/whackmole/junimo.png';

    let num = getRandomTile();

    if (currPlantTile && currPlantTile.id == num) {
        return;
    }
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}

function setPlant() {
    if (gameOver) {
        return;
    }

    if (currPlantTile) {
        currPlantTile.innerHTML = '';
    }

    let plant = document.createElement('img');
    plant.src = '../public/assets/whackmole/Shadow_Brute.png';

    let num = getRandomTile();
    if (currMoleTile && currMoleTile.id == num) {
        return;
    }
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);

}

function selectTile() {
    if (gameOver) {
        return;
    }

    if (this == currMoleTile) {
        score += 10;
        document.getElementById('score').innerHTML = score.toString();
    }
    else if (this == currPlantTile) {
        document.getElementById('score').innerHTML = `GAME OVER: ${score.toString()}`;
        gameOver = true;
    }
}