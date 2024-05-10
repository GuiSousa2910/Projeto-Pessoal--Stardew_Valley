const opcoes = [
    { nome: 'abigail', tituloPresentes: 'Presentes Favoritos:', fotoPresente1: '../assets/presentes/Amethyst.png', descricao1: 'Ametista', fotoPresente2: '../assets/presentes/Blackberry_Cobbler.png', descricao2: 'Mexido de amoras', fotoPresente3: '../assets/presentes/Monster_Compendium.png', descricao3: 'Compêndio de Monstros', fotoPresente4: '../assets/presentes/Banana_Pudding.png', descricao4: 'Pudim de Banana', fotoPresente5: '../assets/presentes/Pufferfish.png', descricao5: 'Baiacu', fotoPresente7: '../assets/presentes/Spicy_Eel.png', descricao7: 'Enguia picante', seta: '../assets/seta direita.png', imagem: '../assets/personagens/Abigail.png' },

    { nome: 'ajudante', seta: '../assets/seta direita.png', fotoPresente1: '../assets/presentes/Maionese_nula.png', descricao1: 'Maionese nula', imagem: '../assets/personagens/Ajudante.png' },

    {
        nome: 'alex', tituloPresentes: 'Presentes Favoritos:', fotoPresente1: '../assets/presentes/Complete_Breakfast.png'
        , descricao1: 'Café da Manhã', seta: '../assets/seta direita.png', imagem: '../assets/personagens/Alex.png'
    },

    { nome: 'avô', seta: '../assets/seta direita.png', imagem: '../assets/personagens/Avô.png' },

    { nome: 'caroline', tituloPresentes: 'Presentes Favoritos:', fotoPresente1: '../assets/presentes/Fish_Taco.png', descricao1: 'Taco de peixe', fotoPresente2: '../assets/presentes/Green_Tea.png', descricao2: 'Chá Verde', fotoPresente3: '../assets/presentes/Summer_Spangle.png', descricao3: 'Flor-Miçanga', seta: '../assets/seta direita.png', imagem: '../assets/personagens/Caroline.png' },

    { nome: 'clint', tituloPresentes: 'Presentes Favoritos:', fotoPresente1: '../assets/presentes/Amethyst.png', descricao1: 'Ametista', fotoPresente2: '../assets/presentes/Artichoke_Dip.png', descricao2: 'Molho de alcachofra', fotoPresente3: '../assets/presentes/Aquamarine.png', descricao3: 'Água-marinha', fotoPresente4: '../assets/presentes/Emerald.png', descricao4: 'Esmeralda', fotoPresente5: '../assets/presentes/Fiddlehead_Risotto.png', descricao5: 'Risoto de samambaia', fotoPresente6: '../assets/presentes/Gold_Bar.png', descricao6: 'Barra de ouro', fotoPresente7: '../assets/presentes/Iridium_Bar.png', descricao7: 'Barra de irídio', fotoPresente8: '../assets/presentes/Jade.png', descricao8: 'Jade', fotoPresente9: '../assets/presentes/Omni_Geode.png', descricao9: 'Omnigeodo', fotoPresente10: '../assets/presentes/Ruby.png', descricao10: 'Rubi', fotoPresente11: '../assets/presentes/Topaz.png', descricao11: 'Topázio', seta: '../assets/seta direita.png', imagem: '../assets/personagens/Clint.png' },

    { nome: 'demetrius', seta: '../assets/seta direita.png', imagem: '../assets/personagens/Demetrius.png' },

    { nome: 'anão', tituloPresentes: 'Presentes Favoritos:', fotoPresente1: '../assets/presentes/Amethyst.png', fotoPresente2: '../assets/presentes/Aquamarine.png', descricao2: 'Água-marinha', fotoPresente3: '../assets/presentes/Emerald.png', descricao3: 'Esmeralda', descricao1: 'Ametista', fotoPresente4: '../assets/presentes/Jade.png', descricao4: 'Jade', fotoPresente5: '../assets/presentes/Omni_Geode.png', descricao5: 'Omnigeodo', fotoPresente6: '../assets/presentes/Ruby.png', descricao6: 'Rubi', fotoPresente7: '../assets/presentes/Topaz.png', descricao7: 'Topázio', seta: '../assets/seta direita.png', imagem: '../assets/personagens/Dwarf.png'} ,

    { nome: 'elliott', seta: '../assets/seta direita.png', imagem: '../assets/personagens/Elliott.png' },

    { nome: 'emily', seta: '../assets/seta direita.png', imagem: '../assets/personagens/Emily.png' },

    { nome: 'evelyn', seta: '../assets/seta direita.png', imagem: '../assets/personagens/Evelyn.png' },

    { nome: 'george', seta: '../assets/seta direita.png', imagem: '../assets/personagens/George.png' },

    { nome: 'gil', seta: '../assets/seta direita.png', imagem: '../assets/personagens/Gil.png' },

    { nome: 'governador', seta: '../assets/seta direita.png', imagem: '../assets/personagens/Governador.png' },

    { nome: 'gunther', seta: '../assets/seta direita.png', imagem: '../assets/personagens/Gunther.png' },

    { nome: 'gus', seta: '../assets/seta direita.png', imagem: '../assets/personagens/Gus.png' },

    { nome: 'haley', seta: '../assets/seta direita.png', imagem: '../assets/personagens/Haley.png' },

    { nome: 'harvey', seta: '../assets/seta direita.png', imagem: '../assets/personagens/Harvey.png' },

    { nome: 'jas', seta: '../assets/seta direita.png', imagem: '../assets/personagens/Jas.png' },

    { nome: 'jodi', seta: '../assets/seta direita.png', imagem: '../assets/personagens/Jodi.png' },

    { nome: 'kent', seta: '../assets/seta direita.png', imagem: '../assets/personagens/Kent.png' },

    { nome: 'krobus', seta: '../assets/seta direita.png', imagem: '../assets/personagens/Krobus.png' },

    { nome: 'leah', seta: '../assets/seta direita.png', imagem: '../assets/personagens/Leah.png' },

    { nome: 'leo', seta: '../assets/seta direita.png', imagem: '../assets/personagens/Leo.png' },

    { nome: 'lewis', seta: '../assets/seta direita.png', imagem: '../assets/personagens/Lewis.png' },

    { nome: 'linus', seta: '../assets/seta direita.png', imagem: '../assets/personagens/Linus.png' },

    { nome: 'marlon', seta: '../assets/seta direita.png', imagem: '../assets/personagens/Marlon.png' },

    { nome: 'marnie', seta: '../assets/seta direita.png', imagem: '../assets/personagens/Marnie.png' },

    { nome: 'maru', seta: '../assets/seta direita.png', imagem: '../assets/personagens/Maru.png' },

    { nome: 'morris', seta: '../assets/seta direita.png', imagem: '../assets/personagens/Morris.png' },

    { nome: 'pam', seta: '../assets/seta direita.png', imagem: '../assets/personagens/Pam.png' },

    { nome: 'passarinha', seta: '../assets/seta direita.png', imagem: '../assets/personagens/Passarinha.png' },

    { nome: 'penny', seta: '../assets/seta direita.png', imagem: '../assets/personagens/Penny.png' },

    { nome: 'pierre', seta: '../assets/seta direita.png', imagem: '../assets/personagens/Pierre.png' },

    { nome: 'professor caracol', seta: '../assets/seta direita.png', imagem: '../assets/personagens/Professor_Snail.png' },

    { nome: 'qi', seta: '../assets/seta direita.png', imagem: '../assets/personagens/Qi.png' },

    { nome: 'robin', seta: '../assets/seta direita.png', imagem: '../assets/personagens/Robin.png' },

    { nome: 'sam', seta: '../assets/seta direita.png', imagem: '../assets/personagens/Sam.png' },

    { nome: 'sandy', seta: '../assets/seta direita.png', imagem: '../assets/personagens/Sandy.png' },

    { nome: 'sebastian', seta: '../assets/seta direita.png', imagem: '../assets/personagens/Sebastian.png' },

    { nome: 'shane', seta: '../assets/seta direita.png', imagem: '../assets/personagens/Shane.png' },

    { nome: 'vincent', seta: '../assets/seta direita.png', imagem: '../assets/personagens/Vincent.png' },

    { nome: 'willy', seta: '../assets/seta direita.png', imagem: '../assets/personagens/Willy.png' },

    { nome: 'feiticeiro', seta: '../assets/seta direita.png', imagem: '../assets/personagens/Wizard.png' },
];


let texto = document.getElementById('searchInput');


texto.addEventListener('input', function () {
    const pesquisa = this.value.toLowerCase();

    const opcoesFiltradas = opcoes.filter(option => option.nome.startsWith(pesquisa));
    displayResults(opcoesFiltradas);
});

function displayResults(results) {
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';
    results.forEach(result => {
        const div = document.createElement('div');
        const div2 = document.createElement('div');
        const div3 = document.createElement('div');
        const img = document.createElement('img');
        const seta = document.createElement('img');
        const fotoPresente1 = document.createElement('img');
        const fotoPresente2 = document.createElement('img');
        const fotoPresente3 = document.createElement('img');
        const fotoPresente4 = document.createElement('img');
        const fotoPresente5 = document.createElement('img');
        const fotoPresente6 = document.createElement('img');
        const fotoPresente7 = document.createElement('img');
        const fotoPresente8 = document.createElement('img');
        const fotoPresente9 = document.createElement('img');
        const fotoPresente10 = document.createElement('img');
        const fotoPresente11 = document.createElement('img');
        const nome = document.createElement('span');
        const tituloPresentes = document.createElement('span');
        const descricao1 = document.createElement('span');
        const descricao2 = document.createElement('span');
        const descricao3 = document.createElement('span');
        const descricao4 = document.createElement('span');
        const descricao5 = document.createElement('span');
        const descricao6 = document.createElement('span');
        const descricao7 = document.createElement('span');
        const descricao8 = document.createElement('span');
        const descricao9 = document.createElement('span');
        const descricao10 = document.createElement('span');
        const descricao11 = document.createElement('span');
        div.style.display = 'flex';
        div.style.backgroundColor = '#866130';
        div.style.alignItems = 'center';
        div.style.padding = '2rem';
        div.style.border = '4px white solid';
        div.style.marginBottom = '2rem';
        div.style.borderRadius = '2rem';
        seta.style.height = 'auto';
        seta.style.width = '2.3rem';
        img.style.height = '16rem';
        img.style.width = 'auto';
        div2.style.display = 'flex';
        div2.style.flexDirection = 'column';
        div2.style.gap = '10px';
        div2.style.marginLeft = '100px';
        div3.style.display = 'flex';
        div3.style.flexDirection = 'column';
        div3.style.alignItems = 'center';
        nome.style.textAlign = 'center';
        nome.style.fontSize = '50px';
        nome.style.color = 'white';
        nome.style.fontWeight = 'bolder';
        nome.style.marginBottom = '20px';
        tituloPresentes.style.color = '#f8f8ff';
        tituloPresentes.style.fontSize = '20px';
        tituloPresentes.style.letterSpacing = '2px';
        descricao1.style.marginLeft = '13px';
        descricao1.style.color = 'white';
        descricao1.style.marginBottom = '5px';
        fotoPresente1.style.height = '50px';
        fotoPresente1.style.width = '50px';
        descricao2.style.marginLeft = '13px';
        descricao2.style.color = 'white';
        descricao2.style.marginBottom = '5px';
        fotoPresente2.style.height = '50px';
        fotoPresente2.style.width = '50px';
        descricao3.style.marginLeft = '13px';
        descricao3.style.color = 'white';
        descricao3.style.marginBottom = '5px';
        fotoPresente3.style.height = '50px';
        fotoPresente3.style.width = '50px';
        descricao4.style.marginLeft = '13px';
        descricao4.style.color = 'white';
        descricao4.style.marginBottom = '5px';
        fotoPresente4.style.height = '50px';
        fotoPresente4.style.width = '50px';
        descricao5.style.marginLeft = '13px';
        descricao5.style.color = 'white';
        descricao5.style.marginBottom = '5px';
        fotoPresente5.style.height = '50px';
        fotoPresente5.style.width = '50px';
        descricao6.style.marginLeft = '13px';
        descricao6.style.color = 'white';
        descricao6.style.marginBottom = '5px';
        fotoPresente6.style.height = '50px';
        fotoPresente6.style.width = '50px';
        descricao7.style.marginLeft = '13px';
        descricao7.style.color = 'white';
        descricao7.style.marginBottom = '5px';
        fotoPresente7.style.height = '50px';
        fotoPresente7.style.width = '50px';
        descricao8.style.marginLeft = '13px';
        descricao8.style.color = 'white';
        descricao8.style.marginBottom = '5px';
        fotoPresente8.style.height = '50px';
        fotoPresente8.style.width = '50px';
        descricao9.style.marginLeft = '13px';
        descricao9.style.color = 'white';
        descricao9.style.marginBottom = '5px';
        fotoPresente9.style.height = '50px';
        fotoPresente9.style.width = '50px';
        descricao10.style.marginLeft = '13px';
        descricao10.style.color = 'white';
        descricao10.style.marginBottom = '5px';
        fotoPresente10.style.height = '50px';
        fotoPresente10.style.width = '50px';
        descricao11.style.marginLeft = '13px';
        descricao11.style.color = 'white';
        descricao11.style.marginBottom = '5px';
        fotoPresente11.style.height = '50px';
        fotoPresente11.style.width = '50px';
        img.src = result.imagem;
        fotoPresente1.src = result.fotoPresente1;
        fotoPresente2.src = result.fotoPresente2;
        fotoPresente3.src = result.fotoPresente3;
        fotoPresente4.src = result.fotoPresente4;
        fotoPresente5.src = result.fotoPresente5;
        fotoPresente6.src = result.fotoPresente6;
        fotoPresente7.src = result.fotoPresente7;
        fotoPresente8.src = result.fotoPresente8;
        fotoPresente9.src = result.fotoPresente9;
        fotoPresente10.src = result.fotoPresente10;
        fotoPresente11.src = result.fotoPresente11;
        seta.src = result.seta;
        nome.textContent = result.nome;
        descricao1.textContent = result.descricao1;
        descricao2.textContent = result.descricao2;
        descricao3.textContent = result.descricao3;
        descricao4.textContent = result.descricao4;
        descricao5.textContent = result.descricao5;
        descricao6.textContent = result.descricao6;
        descricao7.textContent = result.descricao7;
        descricao8.textContent = result.descricao8;
        descricao9.textContent = result.descricao9;
        descricao10.textContent = result.descricao10;
        descricao11.textContent = result.descricao11;
        nome.textContent = nome.textContent.toUpperCase();
        tituloPresentes.textContent = result.tituloPresentes;
        div.appendChild(img);
        div.appendChild(seta);
        div.appendChild(nome);
        div.appendChild(div2);
        div2.appendChild(nome);
        div2.appendChild(tituloPresentes);
        div2.appendChild(div3);
        div3.appendChild(fotoPresente1);
        div3.appendChild(descricao1);
        div3.appendChild(fotoPresente2);
        div3.appendChild(descricao2);
        div3.appendChild(fotoPresente3);
        div3.appendChild(descricao3);
        div3.appendChild(fotoPresente4);
        div3.appendChild(descricao4);
        div3.appendChild(fotoPresente5);
        div3.appendChild(descricao5);
        div3.appendChild(fotoPresente6);
        div3.appendChild(descricao6);
        div3.appendChild(fotoPresente7);
        div3.appendChild(descricao7);
        div3.appendChild(fotoPresente8);
        div3.appendChild(descricao8);
        div3.appendChild(fotoPresente9);
        div3.appendChild(descricao9);
        div3.appendChild(fotoPresente10);
        div3.appendChild(descricao10);
        div3.appendChild(fotoPresente11);
        div3.appendChild(descricao11);
        searchResults.appendChild(div);

    });

}