// DOMContentLoaded faz com que a função so seja ativada depois do HTML ser carregado
document.addEventListener('DOMContentLoaded', () => {

    var segundos = 60;
    var tempo = 100;
    var tempo2 = 1000;

    if (segundos > 0) {
        const grid = document.querySelector('.grid');
        const scoreDisplay = document.getElementById('score');
        const segundosDisplay = document.getElementById('segundos');
        const width = 8;
        const squares = [];
        let score = 0;

        function decrementar() {
            segundos--;
            segundosDisplay.innerHTML = segundos;
            console.log(segundos);
        }

        var decrementando = setInterval(decrementar, 1000);

        const candyColor = [
            'url(../assets/junimos/junimo-vermelho.png)',
            'url(../assets/junimos/junimo-amarelo.png)',
            'url(../assets/junimos/junimo-branco.png)',
            'url(../assets/junimos/junimo-laranja.png)',
            'url(../assets/junimos/junimo-roxo.png)',
            'url(../assets/junimos/junimo-verde.png)'
        ];

        function createBoard() {
            for (let i = 0; i < width * width; i++) {
                const square = document.createElement('div'); // cria divs
                square.setAttribute('draggable', true); // draggable faz com que o item seja pegavel
                square.style.cursor = 'grab';
                square.setAttribute('id', i); // setou um id para cada div
                let randomColor = Math.floor(Math.random() * candyColor.length); // Math.floor arredonda o numero para baixo
                square.style.backgroundImage = candyColor[randomColor]; // faz com que o back do quadrado dependa da cor gerada no Math.random
                grid.appendChild(square); // colocam o square com divs filhas
                squares.push(square);
            }
        }

        createBoard();

        // variaveis neutras
        let colorBeingDragged;
        let colorBeingReplaced;
        let squareIdBeingDragged;
        let squareIdBeingReplaced;

        // forEach percorre cada elemento da lista squares
        squares.forEach(square => square.addEventListener('dragstart', dragStart)); // faz com que a cada fez que pegar o quadrado ative a função
        squares.forEach(square => square.addEventListener('dragend', dragEnd)); // dragend fim da operação de arrastar, independentemente do sucesso
        squares.forEach(square => square.addEventListener('dragover', dragOver)); // faz com que seja ativada quando o elemento esta sendo arrastado
        squares.forEach(square => square.addEventListener('dragenter', dragEnter)); // faz com que seja ativada quando o elemento arrastado entra na area do quadrado
        squares.forEach(square => square.addEventListener('dragleave', dragLeave)); // faz com que a cada seja ativada quando o elemento arrastado sai na area do quadrado
        squares.forEach(square => square.addEventListener('drop', dragDrop)); // soltar bem-sucedido em uma zona de destino válida

        function dragStart() {
            console.log(colorBeingDragged); // pego o nome da cor que esta sendo pega
            console.log(this.id + ' Eu sou o dragStart');
            colorBeingDragged = this.style.backgroundImage;
            squareIdBeingDragged = parseInt(this.id); // pega o id do item que esta sendo pego
        }
        function dragOver(e) {
            e.preventDefault(); // permite personalizar a interação do usuario com a pagina
            console.log(this.id + ' Eu sou o dragOver');
        }
        function dragEnter() {
            console.log(this.id + ' Eu sou o dragEnter');
        }
        function dragLeave() {
            console.log(this.id + ' Eu sou o dragLeave');
        }
        function dragDrop() {
            console.log(this.id + ' Eu sou o dragDrop');
            colorBeingReplaced = this.style.backgroundImage; // pega a cor que vai ser trocada, o this fala do id do quadrado, fala sobre aquele quadrado em especifico
            squareIdBeingReplaced = parseInt(this.id); // aqui fala qual o quadrado que vai ser substituido com o this tambem
            this.style.backgroundImage = colorBeingDragged; // faz com que a cor que esta sendo pega seja trocada com a foi solta em cima
            squares[squareIdBeingDragged].style.backgroundImage = colorBeingReplaced;
        }
        function dragEnd() {
            console.log(this.id + ' Eu sou o dragEnd');

            let validMoves = [
                squareIdBeingDragged - 1,
                squareIdBeingDragged - width,
                squareIdBeingDragged + 1,
                squareIdBeingDragged + width,
            ]; // faz com que os movimentos validos sejam so os que sao arrastados para perto
            let validMove = validMoves.includes(squareIdBeingReplaced);

            if (squareIdBeingReplaced && validMove) {
                squareIdBeingReplaced = null;
            } else if (squareIdBeingReplaced && !validMove) {
                //caso o movimento nao seja valido ele pega a cor e faz com que ela fique no lugar
                squares[squareIdBeingReplaced].style.backgroundImage = colorBeingReplaced;
                squares[squareIdBeingDragged].style.backgroundImage = colorBeingDragged;
            } else {
                squares[squareIdBeingDragged].style.backgroundImage = colorBeingDragged;
            }
        }

        function moveDown() {
            for (i = 0; i < 55; i++) {
                if (squares[i + width].style.backgroundImage === '') { // ve se alguma cor em volta é igual a nada
                    squares[i + width].style.backgroundImage = squares[i].style.backgroundImage; // se for ela substitui pelo de cima
                    squares[i].style.backgroundImage = '';
                    const firstRow = [0, 1, 2, 3, 4, 5, 6, 7,];
                    const isFirstRow = firstRow.includes(i);
                    if (isFirstRow && squares[i].style.backgroundImage === '') {
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
                let decidedColor = squares[i].style.backgroundImage;
                const isBlack = squares[i].style.backgroundImage === '';

                const notValid = [5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53, 54, 55]; // faz com que ele nao desapareca com itens de fora
                if (notValid.includes(i)) {
                    continue; // se tiver algum item da array ele continua
                }

                if (rowOfFour.every(i => squares[i].style.backgroundImage === decidedColor && !isBlack)) {
                    score += 4;
                    scoreDisplay.innerHTML = score;
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
                let columnOfFour = [i, i + width, i + width * 2, i + width * 3];
                let decidedColor = squares[i].style.backgroundImage;
                const isBlack = squares[i].style.backgroundImage === '';

                if (columnOfFour.every(index => index >= 0 && index < squares.length)) {
                    if (columnOfFour.every(i => squares[i].style.backgroundImage === decidedColor && !isBlack)) {
                        score += 4;
                        scoreDisplay.innerHTML = score;
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

        function refresh() {
            window.location.reload();
        }

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

            }
        }

        let verificando = setInterval(parar, 100);
    }


});
