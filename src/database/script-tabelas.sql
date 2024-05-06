CREATE DATABASE projetosolo;
use projetosolo;

CREATE TABLE fazendeiro(
idFazendeiro int primary key auto_increment,
nome varchar(45),
email varchar(200),
senha varchar(100),
nomeFazenda varchar(100)
);