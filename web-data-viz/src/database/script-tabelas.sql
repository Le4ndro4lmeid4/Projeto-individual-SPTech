-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE avatar;

USE avatar;


CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
    elemento VARCHAR(20)
);

CREATE TABLE quiz (
    idQuiz INT PRIMARY KEY AUTO_INCREMENT,
    nomeQuiz VARCHAR(100)
);


CREATE TABLE usuario_teste (
    idUsuarioTeste INT,
    fk_usuario INT NOT NULL,
    fk_teste INT NOT NULL,
    elemento_resultante VARCHAR(20),
    dt_realizacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (fk_usuario) REFERENCES usuario(id_usuario),
    FOREIGN KEY (fk_teste) REFERENCES teste(id_teste)
);

-- Armazena as respostas por índice
CREATE TABLE resposta_usuario (
    id_resposta INT PRIMARY KEY AUTO_INCREMENT,
    fk_usuario_teste INT NOT NULL,
    indice_pergunta INT NOT NULL,  -- posição da pergunta na matriz
    indice_opcao   INT NOT NULL,   -- posição da opção dentro da pergunta
    FOREIGN KEY (fk_usuario_teste) REFERENCES usuario_teste(id_usuario_teste)
);

INSERT into usuario values
(DEFAULT, 'guido', 'guido@gmail.com', '65279818');


