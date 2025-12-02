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
	senha VARCHAR(50)
);

CREATE TABLE quiz (
    idQuiz INT PRIMARY KEY AUTO_INCREMENT,
    nomeQuiz VARCHAR(40)
);


CREATE TABLE usuarioQuiz (
    fkUsuario INT NOT NULL,
    fkQuiz INT NOT NULL,
    resultadoElemento VARCHAR(20),
    dtRealizacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (fkUsuario, fkQuiz), -- já garante unicidade
    FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
    FOREIGN KEY (fkQuiz) REFERENCES quiz(idQuiz)
);

CREATE TABLE respostaUsuario (
    idRespostaUsuario INT PRIMARY KEY AUTO_INCREMENT,
    fkUsuario INT NOT NULL,
    fkQuiz INT NOT NULL,
    indicePergunta INT NOT NULL,
    indiceOpcao   INT NOT NULL,
    FOREIGN KEY (fkUsuario, fkQuiz) REFERENCES usuarioQuiz(fkUsuario, fkQuiz)
);

CREATE TABLE jogo (
    idJogo INT PRIMARY KEY AUTO_INCREMENT,
    nomeJogo VARCHAR(50) NOT NULL
);

CREATE TABLE partidaMemoria (
    fkUsuario INT NOT NULL,
    fkJogo INT NOT NULL,
    pontuacao INT NOT NULL,
    tempoSegundos INT NOT NULL,
    dataPartida DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (fkUsuario, fkJogo, dataPartida),
    FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
    FOREIGN KEY (fkJogo) REFERENCES jogo(idJogo)
);

INSERT into usuario (idUsuario, nome, email, senha) values
(DEFAULT, 'guido', 'guido@gmail.com', '65279818');

INSERT INTO quiz (nomeQuiz) VALUES
('Quiz dos Elementos da Natureza');

INSERT INTO jogo (nomeJogo) VALUES
('Jogo da memória');

SELECT * from usuario;
SELECT * from usuarioQuiz;

select * from partidaMemoria;


