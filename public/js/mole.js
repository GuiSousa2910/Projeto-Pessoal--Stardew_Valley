let currMoleTile;
let currPlantTile;
let currPlantTile2;
let currPlantTile3;
let score = 0;
var monstro = 1;
let gameOver = false;
let tempo = 1300;
let tempoMonstro = 1400;
var segundos = 0;
var segundosTotais = 0;

window.onload = function () {
    setGame();
};

function tempos() {
    segundos += 0.1;
    segundosTotais += 0.1;
}

function observa() {
    if (segundos.toFixed(1) == 0.5 && score >= 140) {
        setPlant3()
        setMole();
        setPlant2();
        setPlant();
        segundos = 0;
    }
    else if (segundos.toFixed(1) == 1 && (score >= 40 && score < 140)) {
        setPlant2();
        setMole();
        setPlant();
        segundos = 0;
    } else if (segundos.toFixed(1) >= 2 && score < 40) {

        setMole();
        setPlant();
        segundos = 0;
    } else if (segundos.toFixed(1) > 1 && score >= 40) {
        segundos = 0;
    }
}

function setGame() {
    for (let i = 0; i < 9; i++) {

        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener('click', selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(() => {
        tempos();

    }, 100);
    setInterval(observa, 100);
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function refresh() {
    window.location.reload();
}

function setMole() {
    if (gameOver) {
        document.getElementById('refresh').style.display = 'flex';
        return;
    }

    if (currMoleTile) {
        currMoleTile.innerHTML = '';
    }

    let mole = document.createElement('img');
    mole.src = 'assets/whackmole/junimo.png';

    let num = getRandomTile();

    if ((currPlantTile && currPlantTile.id == num) || (currPlantTile2 && currPlantTile2.id == num) || (currPlantTile3 && currPlantTile3.id == num)) {
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

    var plant = document.createElement('img');
    plant.src = 'assets/whackmole/Shadow_Brute.png';


    let num = getRandomTile();

    if ((currMoleTile && currMoleTile.id == num) || (currPlantTile2 && currPlantTile2.id == num) || (currPlantTile3 && currPlantTile3.id == num)) {
        return;
    }

    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);

}

function setPlant2() {
    if (gameOver) {
        return;
    }

    if (currPlantTile2) {
        currPlantTile2.innerHTML = '';
    }

    var plant2 = document.createElement('img');
    plant2.src = 'assets/whackmole/Shadow_Brute.png';


    let num = getRandomTile();

    if ((currMoleTile && currMoleTile.id == num) || (currPlantTile && currPlantTile.id == num) || (currPlantTile3 && currPlantTile3.id == num)) {
        return;
    }

    currPlantTile2 = document.getElementById(num);
    currPlantTile2.appendChild(plant2);
}

function setPlant3() {
    if (gameOver) {
        return;
    }

    if (currPlantTile3) {
        currPlantTile3.innerHTML = '';
    }

    var plant3 = document.createElement('img');
    plant3.src = 'assets/whackmole/Shadow_Brute.png';


    let num = getRandomTile();

    if ((currMoleTile && currMoleTile.id == num) || (currPlantTile && currPlantTile.id == num)|| (currPlantTile2 && currPlantTile2.id == num)) {
        return;
    }

    currPlantTile3 = document.getElementById(num);
    currPlantTile3.appendChild(plant3);
}

function selectTile() {
    if (gameOver) {
        console.log('perdi2');
        return;
    }

    if (this == currMoleTile) {
        console.log('apertei o bixo');
        score += 10;
        document.getElementById('score').innerHTML = score.toString();
        if (score >= 40) {
            tempo = 9000;
            tempoMonstro = 9000;
        }
    }
    else if (this == currPlantTile || this == currPlantTile2 || this == currPlantTile3) {
        console.log('perdi');
        document.getElementById('score').innerHTML = `GAME OVER: ${score.toString()}`;
        gameOver = true;
        fetch("/jogo1/cadastrar_jogo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({

                pontosServer: score,
                tempoServer: segundosTotais,
                idServer: sessionStorage.ID_USUARIO
            }),
        })
            .then(function (resposta) {
                console.log("resposta: ", resposta);

                if (resposta.ok) {




                } else {
                    throw "Houve um erro ao tentar realizar o cadastro!";
                }
            })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);

            });
    }
}
