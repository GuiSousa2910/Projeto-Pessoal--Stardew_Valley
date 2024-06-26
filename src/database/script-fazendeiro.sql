create database projetosolo;
use projetosolo;
describe fazendeiro;
describe jogo;
describe jogoCC;
show tables;

create table ia(
	idIa int primary key auto_increment,
    pergunta varchar(500),
    resposta varchar(900),
    fkFazendeiro int,
    foreign key (fkFazendeiro) references fazendeiro (idFazendeiro)
);
ALTER TABLE ia MODIFY COLUMN resposta LONGTEXT;
ALTER TABLE ia MODIFY COLUMN pergunta LONGTEXT;

create table fazendeiro(
	idFazendeiro int primary key auto_increment,
    nome varchar(45),
    email varchar(200),
    senha varchar(100),
    nomeFazenda varchar(100)
);

CREATE TABLE jogo(
	idJogo int,
    fkFazendeiro int,
    foreign key (fkFazendeiro) references fazendeiro(idFazendeiro),
    pontos int,
    tempo decimal(9,2),
    hora varchar(5),
    primary key (idJogo, fkFazendeiro)
);

CREATE TABLE jogoCC (
	idJogoCC int,
    fkFazendeiro int,
    pontosCC int,
    qntVerde int,
    qntAmarelo int,
    qntRosa int,
    qntRoxo int,
    qntBranco int,
    qntLaranja int
);

ALTER TABLE jogoCC ADD COLUMN hora varchar(5);
SELECT * FROM fazendeiro;
SELECT * FROM jogo;
SELECT * FROM ia;
SELECT * FROM jogoCC;