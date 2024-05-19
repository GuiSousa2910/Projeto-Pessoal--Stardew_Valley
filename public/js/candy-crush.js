// DOMContentLoaded faz com que a função so seja ativada depois do HTML ser carregado
document.addEventListener('DOMContentLoaded', () => {

    // Declaração de variáveis para o tempo
    var segundos = 60;

    var qntLaranja = 0;
    var qntAmarelo = 0;
    var qntRosa = 0;
    var qntVerde = 0;
    var qntRoxo = 0;
    var qntBranco = 0;

    // Verifica se o tempo é maior que zero para iniciar o jogo
    if (segundos > 0) {

        // Seleciona elementos do DOM
        const grid = document.querySelector('.grid');
        const scoreDisplay = document.getElementById('score');
        const segundosDisplay = document.getElementById('segundos');

        // Define a largura da grade
        const width = 8;

        // Cria um array para armazenar as "doces"
        const squares = [];

        // Inicializa a pontuação
        let score = 0;

        // Função para decrementar o tempo
        function decrementar() {
            segundos--;
            segundosDisplay.innerHTML = segundos; // Atualiza o display do tempo
            // console.log(qntAmarelo + ' AMARELO');
            // console.log(qntBranco + ' BRANCO');
            // console.log(qntVerde + ' VERDE');
            // console.log(qntRosa + ' ROSA');
            // console.log(qntLaranja + ' LARANJA');
            // console.log(qntRoxo + ' ROXO');
        }

        // Define um intervalo para decrementar o tempo a cada segundo
        var decrementando = setInterval(decrementar, 1000);

        // Array de cores para as "doces"
        const candyColor = [
            'url(../assets/junimos/junimo-vermelho.png)',
            'url(../assets/junimos/junimo-amarelo.png)',
            'url(../assets/junimos/junimo-branco.png)',
            'url(../assets/junimos/junimo-laranja.png)',
            'url(../assets/junimos/junimo-roxo.png)',
            'url(../assets/junimos/junimo-verde.png)'
        ];

        // Função para criar o tabuleiro de "doces"
        function createBoard() {
            for (let i = 0; i < width * width; i++) {
                const square = document.createElement('div');  // Cria uma div para cada "doce"
                square.setAttribute('draggable', true); // Define a div como arrastável
                square.style.cursor = 'grab'; // Define o cursor para um cursor de "pegar"
                square.setAttribute('id', i); // Define um ID único para cada div
                let randomColor = Math.floor(Math.random() * candyColor.length); // Math.floor arredonda o numero para baixo 
                square.style.backgroundImage = candyColor[randomColor]; // Define o background da div com a cor aleatória
                grid.appendChild(square); // Adiciona a div à grade
                squares.push(square); // Adiciona a div ao array de "doces"
            }
        }

        // Chama a função para criar o tabuleiro
        createBoard();

        // Variáveis para armazenar dados sobre as "doces" durante o arrastar e soltar
        let colorBeingDragged;
        let colorBeingReplaced;
        let squareIdBeingDragged;
        let squareIdBeingReplaced;

        // forEach percorre cada elemento da lista squares e adiciona eventos de arrastar e soltar a cada "doce"
        squares.forEach(square => square.addEventListener('dragstart', dragStart)); // faz com que a cada fez que pegar o quadrado ative a função
        squares.forEach(square => square.addEventListener('dragend', dragEnd)); // dragend fim da operação de arrastar, independentemente do sucesso
        squares.forEach(square => square.addEventListener('dragover', dragOver)); // faz com que seja ativada quando o elemento esta sendo arrastado
        squares.forEach(square => square.addEventListener('dragenter', dragEnter)); // faz com que seja ativada quando o elemento arrastado entra na area do quadrado
        squares.forEach(square => square.addEventListener('dragleave', dragLeave)); // faz com que a cada seja ativada quando o elemento arrastado sai na area do quadrado
        squares.forEach(square => square.addEventListener('drop', dragDrop)); // soltar bem-sucedido em uma zona de destino válida

        // Função para o início do arrastar
        function dragStart() {
            // console.log(colorBeingDragged); // pego o nome da cor que esta sendo pega
            // console.log(this.id + ' Eu sou o dragStart'); // Imprime o ID da div que está sendo arrastada
            colorBeingDragged = this.style.backgroundImage; // Armazena a cor da div que está sendo arrastada
            squareIdBeingDragged = parseInt(this.id); // pega o id do item que esta sendo pego
        }

        // Função para quando o elemento está sendo arrastado sobre outro elemento
        function dragOver(e) {
            e.preventDefault(); // permite personalizar a interação do usuario com a pagina
            // console.log(this.id + ' Eu sou o dragOver');
        }

        // Função para quando o elemento arrastado entra na área de outro elemento
        function dragEnter() {
            // console.log(this.id + ' Eu sou o dragEnter');
        }

        // Função para quando o elemento arrastado sai da área de outro elemento
        function dragLeave() {
            // console.log(this.id + ' Eu sou o dragLeave');
        }

        // Função para quando o elemento arrastado é solto em outro elemento
        function dragDrop() {
            // console.log(this.id + ' Eu sou o dragDrop');
            colorBeingReplaced = this.style.backgroundImage; // pega a cor que vai ser trocada, o this fala do id do quadrado, fala sobre aquele quadrado em especifico
            squareIdBeingReplaced = parseInt(this.id); // aqui fala qual o quadrado que vai ser substituido com o this tambem
            this.style.backgroundImage = colorBeingDragged; // faz com que a cor que esta sendo pega seja trocada com a foi solta em cima
            squares[squareIdBeingDragged].style.backgroundImage = colorBeingReplaced; // Troca a cor da div que estava sendo arrastada pela cor da div que foi solta
        }
        function dragEnd() {
            // console.log(this.id + ' Eu sou o dragEnd');

            // Define os movimentos válidos para a "doce"
            let validMoves = [
                squareIdBeingDragged - 1, // Esquerda
                squareIdBeingDragged - width, // Acima
                squareIdBeingDragged + 1, // Direita
                squareIdBeingDragged + width, // Abaixo
            ]; // faz com que os movimentos validos sejam so os que sao arrastados para perto

            // Verifica se o movimento é válido
            let validMove = validMoves.includes(squareIdBeingReplaced);

            // Se o movimento é válido, limpa o ID da div que está sendo trocada
            if (squareIdBeingReplaced && validMove) {
                squareIdBeingReplaced = null;
            }

            //caso o movimento nao seja valido ele pega a cor e faz com que ela fique no lugar
            else if (squareIdBeingReplaced && !validMove) {
                squares[squareIdBeingReplaced].style.backgroundImage = colorBeingReplaced;
                squares[squareIdBeingDragged].style.backgroundImage = colorBeingDragged;
            }

            // Se o movimento não é válido, troca a cor de volta para a posição original da div
            else {
                squares[squareIdBeingDragged].style.backgroundImage = colorBeingDragged;
            }
        }

        // Função para mover as "doces" para baixo
        function moveDown() {
            for (i = 0; i < 55; i++) {
                // Verifica se a "doce" abaixo está vazia
                if (squares[i + width].style.backgroundImage === '') { // ve se alguma cor em volta é igual a nada

                    // Move a "doce" para baixo
                    squares[i + width].style.backgroundImage = squares[i].style.backgroundImage;
                    squares[i].style.backgroundImage = '';

                    // Verifica se a "doce" está na primeira linha e se está vazia
                    const firstRow = [0, 1, 2, 3, 4, 5, 6, 7,];
                    const isFirstRow = firstRow.includes(i);
                    if (isFirstRow && squares[i].style.backgroundImage === '') {

                        // Gera uma cor aleatória e coloca na posição vazia
                        let randomColor = Math.floor(Math.random() * candyColor.length);
                        squares[i].style.backgroundImage = candyColor[randomColor]; // substitui o branco por uma outra cor aleatoria
                    }
                }
            }
        }

        // validando as linhas de quatro
        function checkRowForFour() {
            for (i = 0; i < 60; i++) {
                let rowOfFour = [i, i + 1, i + 2, i + 3]; // estipula oq é uma linha de 4
                let decidedColor = squares[i].style.backgroundImage; // Define a cor da linha
                const isBlack = squares[i].style.backgroundImage === ''; // Verifica se a "doce" está vazia

                const notValid = [5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53, 54, 55]; // Define uma lista de posições inválidas para a linha

                if (notValid.includes(i)) {
                    continue; // se tiver algum item da array ele continua
                }

                // Verifica se todas as "doces" da linha têm a mesma cor e não estão vazias
                if (rowOfFour.every(i => squares[i].style.backgroundImage === decidedColor && !isBlack)) {
                    score += 4;

                    if (decidedColor == 'url("../assets/junimos/junimo-laranja.png")') {
                        qntLaranja += 4;
                        console.log(qntLaranja + ' LARANJA LINHA 4');
                    }

                    else if (decidedColor == 'url("../assets/junimos/junimo-vermelho.png")') {
                        qntRosa += 4;
                        console.log(qntRosa + ' ROSA LINHA 4');
                    }

                    else if (decidedColor == 'url("../assets/junimos/junimo-amarelo.png")') {
                        qntAmarelo += 4;
                        console.log(qntAmarelo + ' AMARELO LINHA 4');
                    }

                    else if (decidedColor == 'url("../assets/junimos/junimo-branco.png")') {
                        qntBranco += 4;
                        console.log(qntBranco + ' BRANCO LINHA 4');
                    }

                    else if (decidedColor == 'url("../assets/junimos/junimo-roxo.png")') {
                        qntRoxo += 4;
                        console.log(qntRoxo + ' ROXO LINHA 4');
                    }

                    else if (decidedColor == 'url("../assets/junimos/junimo-verde.png")') {
                        qntVerde += 4;
                        console.log(qntRoxo + ' VERDE LINHA 4');
                    }

                    scoreDisplay.innerHTML = score;

                    // Remove as "doces" da linha
                    rowOfFour.forEach(i => {
                        squares[i].style.backgroundImage = '';
                    });
                }
            }
        }
        checkRowForFour();

        // validando as colunas de quatro
        function checkColumnForFour() {
            for (i = 0; i < 47; i++) {
                let columnOfFour = [i, i + width, i + width * 2, i + width * 3]; // Define uma coluna de quatro "doces"
                let decidedColor = squares[i].style.backgroundImage; // Define a cor da coluna
                const isBlack = squares[i].style.backgroundImage === ''; // Verifica se a "doce" está vazia

                // Verifica se todos os índices da coluna estão dentro dos limites do tabuleiro
                if (columnOfFour.every(index => index >= 0 && index < squares.length)) {

                    // Verifica se todas as "doces" da coluna têm a mesma cor e não estão vazias
                    if (columnOfFour.every(i => squares[i].style.backgroundImage === decidedColor && !isBlack)) {
                        score += 4;

                        if (decidedColor == 'url("../assets/junimos/junimo-laranja.png")') {
                            qntLaranja += 4;
                            console.log(qntLaranja + ' LARANJA COLUNA 4');
                        }

                        else if (decidedColor == 'url("../assets/junimos/junimo-vermelho.png")') {
                            qntRosa += 4;
                            console.log(qntRosa + ' ROSA COLUNA 4');
                        }

                        else if (decidedColor == 'url("../assets/junimos/junimo-amarelo.png")') {
                            qntAmarelo += 4;
                            console.log(qntAmarelo + ' AMARELO COLUNA 4');
                        }

                        else if (decidedColor == 'url("../assets/junimos/junimo-branco.png")') {
                            qntBranco += 4;
                            console.log(qntBranco + ' BRANCO COLUNA 4');
                        }

                        else if (decidedColor == 'url("../assets/junimos/junimo-roxo.png")') {
                            qntRoxo += 4;
                            console.log(qntRoxo + ' ROXO COLUNA 4');
                        }

                        else if (decidedColor == 'url("../assets/junimos/junimo-verde.png")') {
                            qntVerde += 4;
                            console.log(qntVerde + ' VERDE COLUNA 4');
                        }

                        scoreDisplay.innerHTML = score;

                        // Remove as "doces" da coluna
                        columnOfFour.forEach(i => {
                            squares[i].style.backgroundImage = '';
                        });
                    }
                }
            }
        }
        checkColumnForFour();

        // validando as linhas de tres
        function checkRowForThree() {
            for (i = 0; i < 61; i++) {
                let rowOfThree = [i, i + 1, i + 2]; // estipula oq é uma linha de 3
                let decidedColor = squares[i].style.backgroundImage;
                const isBlack = squares[i].style.backgroundImage === '';

                const notValid = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55]; // faz com que ele nao desapareca com itens de fora
                if (notValid.includes(i)) {
                    continue; // se tiver algum item da array ele continua
                }

                if (rowOfThree.every(i => squares[i].style.backgroundImage === decidedColor && !isBlack)) {
                    score += 3;

                    if (decidedColor == 'url("../assets/junimos/junimo-vermelho.png")') {
                        qntRosa += 3;
                        console.log(qntRosa + ' Rosa LINHA 3');
                    }

                    else if (decidedColor == 'url("../assets/junimos/junimo-laranja.png")') {
                        qntLaranja += 3;
                        console.log(qntLaranja + ' Laranja LINHA 3');
                    }


                    else if (decidedColor == 'url("../assets/junimos/junimo-amarelo.png")') {
                        qntAmarelo += 3;
                        console.log(qntAmarelo + ' Amarelo LINHA 3');
                    }

                    else if (decidedColor == 'url("../assets/junimos/junimo-branco.png")') {
                        qntBranco += 3;
                        console.log(qntBranco + ' Branco LINHA 3');
                    }

                    else if (decidedColor == 'url("../assets/junimos/junimo-roxo.png")') {
                        qntRoxo += 3;
                        console.log(qntRoxo + ' Roxo LINHA 3');
                    }

                    else if (decidedColor == 'url("../assets/junimos/junimo-verde.png")') {
                        qntVerde += 3;
                        console.log(qntVerde + ' Verde LINHA 3');
                    }

                    scoreDisplay.innerHTML = score;
                    rowOfThree.forEach(i => {
                        squares[i].style.backgroundImage = '';
                    });
                }
            }
        }
        checkRowForThree();

        // validando as colunas de tres
        function checkColumnForThree() {
            for (i = 0; i < 47; i++) {
                let columnOfThree = [i, i + width, i + width * 2];
                let decidedColor = squares[i].style.backgroundImage;
                const isBlack = squares[i].style.backgroundImage === '';

                if (columnOfThree.every(i => squares[i].style.backgroundImage === decidedColor && !isBlack)) {
                    score += 3;

                    if (decidedColor == 'url("../assets/junimos/junimo-laranja.png")') {
                        qntLaranja += 3;
                        console.log(qntLaranja + ' Laranja COLUNA 3');
                    }

                    else if (decidedColor == 'url("../assets/junimos/junimo-vermelho.png")') {
                        qntRosa += 3;
                        console.log(qntRosa + ' Rosa COLUNA 3');
                    }

                    else if (decidedColor == 'url("../assets/junimos/junimo-amarelo.png")') {
                        qntAmarelo += 3;
                        console.log(qntAmarelo + ' Amarelo COLUNA 3');
                    }

                    else if (decidedColor == 'url("../assets/junimos/junimo-branco.png")') {
                        qntBranco += 3;
                        console.log(qntBranco + ' Branco COLUNA 3');
                    }

                    else if (decidedColor == 'url("../assets/junimos/junimo-roxo.png")') {
                        qntRoxo += 3;
                        console.log(qntRoxo + ' Roxo COLUNA 3');
                    }

                    else if (decidedColor == 'url("../assets/junimos/junimo-verde.png")') {
                        qntVerde += 3;
                        console.log(qntVerde + ' Verde COLUNA 3');
                    }
                    scoreDisplay.innerHTML = score;
                    columnOfThree.forEach(i => {
                        squares[i].style.backgroundImage = '';
                    });
                }
            }
        }
        checkColumnForThree();


        window.setInterval(function () {
            moveDown();
            checkColumnForFour();
            checkRowForFour();
            checkRowForThree();
            checkColumnForThree();
        }, 100);

        // function refresh() {
        //     window.location.reload();
        // }

        // window.onclick.getElementById('refresh') = function(){
        //     refresh()
        // }

        function parar() {
            if (segundos <= 0) {
                console.log('deu false no de fora');
                segundos = 1;
                squares.forEach(square => square.removeEventListener('dragstart', dragStart));
                squares.forEach(square => square.removeEventListener('dragend', dragEnd));
                squares.forEach(square => square.removeEventListener('dragover', dragOver));
                squares.forEach(square => square.removeEventListener('dragenter', dragEnter));
                squares.forEach(square => square.removeEventListener('dragleave', dragLeave));
                squares.forEach(square => square.removeEventListener('drop', dragDrop));
                clearInterval(decrementando);
                clearInterval(verificando);
                document.getElementById('refresh').style.display = 'flex';

                fetch("/jogo2/cadastrar_jogoCC", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({

                        pontosCCServer: score,
                        verdeServer: qntVerde,
                        brancoServer: qntBranco,
                        rosaServer: qntRosa,
                        roxoServer: qntRoxo,
                        amareloServer: qntAmarelo,
                        laranjaServer: qntLaranja,
                        idCCServer: sessionStorage.ID_USUARIO
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

        let verificando = setInterval(parar, 100);
    }


});
