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
    segundosTotais /= 10;
    // console.log(segundos);
}

function observa() {
    if (segundos.toFixed(1) == 0.5 && score >= 140) {
        // console.log('cai no if 3');
        setMole();
        setPlant();
        segundos = 0;
    }
    else if (segundos.toFixed(1) == 1 && (score >= 40 && score < 140)) {
        // console.log('cai no if 1');
        setMole();
        setPlant();
        segundos = 0;
    } else if (segundos.toFixed(1) >= 2 && score < 40) {
        // console.log('cai no if 2');
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

// function guardar(score, segundosTotais) {
//     var instrucaoSql = `
//     INSERT INTO jogo (pontos, tempo) VALUES ('${score}', '${segundosTotais}');
// `;
//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

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

// if (score <= 40) {
//     while (score <= 40) {
//         setInterval(setMole, 1300);
//         setInterval(setPlant, 1400);
//     }
// }
// else if (score > 40 && score < 150) {
//     while (score < 150) {
//         setInterval(setMole, 1500);
//         setInterval(setPlant, 1200);
//     }
//     monstro += 1;
// }
// else if (score >= 150 && score < 300) {
//     setInterval(setMole, 1000);
//     setInterval(setPlant, 1100);
//     monstro += 1;
// }
// else if (score >= 300) {
//     setInterval(setMole, 950);
//     setInterval(setPlant, 1000);
//     monstro += 1;
// }

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
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/usuario.js
                pontosServer: score,
                tempoServer: segundosTotais
            }),
        })
            .then(function (resposta) {
                console.log("resposta: ", resposta);

                if (resposta.ok) {
                    // setTimeout(() => {
                    //     window.location = "decisao.html";
                    // }, "2000");

                } else {
                    throw "Houve um erro ao tentar realizar o cadastro!";
                }
            })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);

            });
    }

}
// window.onchange = function () {
//     setTimeout(setMole, tempo);
//     setTimeout(setPlant, tempoMonstro);
// };