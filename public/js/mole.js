let currMoleTile;
let currPlantTile;
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

        setMole();
        setPlant();
        segundos = 0;
    }
    else if (segundos.toFixed(1) == 1 && (score >= 40 && score < 140)) {

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

    var plant = document.createElement('img');
    plant.src = 'assets/whackmole/Shadow_Brute.png';


    let num = getRandomTile();

    if (currMoleTile && currMoleTile.id == num) {
        return;
    }

    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);

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
    else if (this == currPlantTile) {
        console.log('perdi');
        document.getElementById('score').innerHTML = `GAME OVER: ${score.toString()}`;
        gameOver = true;
        fetch("/usuarios/cadastrar_jogo", {
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
