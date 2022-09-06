/*
Exemplo simples de projeto com uma estrutura
de diretórios organizada.
Autor: Fabrício G. M. de Carvalho, Ph.D
*/

/* importando o express */
const express = require('express')
const app = express();
const port = 5000;

/* importando o modelo */
const modelo = require('./models/modelos');
var Projeto = modelo.Projeto; //Vinculação de tipo
var Conhecido = modelo.Conhecido;

/* Configurando a template engine. */
app.set('view engine', 'ejs');
app.set('views', './views');

/* Configurando o diretório que serve arquivos estáticos.*/
app.use(express.static('public'));

app.get('/conhecidos', listConhecidotHandler);
app.get('/', listProjectHandler);

app.listen(port, listenHandler);

function listProjectHandler(req, res){
    /* Os dados a seguir, em uma aplicação real, deveriam vir de um BD */
   
    let projeto_1 = new Projeto("IoniCRM","C#"); 
    let projeto_2 = new Projeto("SrSoja","JavaScript");
    let projeto_3 = new Projeto("OP","JavaScript");    
    let projetos = [];
    projetos.push(projeto_1);
    projetos.push(projeto_2);
    projetos.push(projeto_3);
    res.render('listar_projetos.ejs',{lista_projetos: projetos});    
}

function listConhecidotHandler(req, res){
    /* Os dados a seguir, em uma aplicação real, deveriam vir de um BD */
   
    let conhecido_1 = new Conhecido("Lary",18); 
    let conhecido_2 = new Conhecido("João", 25);
    let conhecido_3 = new Conhecido("Adolf", 56);    
    let conhecidos = [];
    conhecidos.push(conhecido_1);
    conhecidos.push(conhecido_2);
    conhecidos.push(conhecido_3);
    res.render('listar_conhecidos.ejs',{lista_conhecidos: conhecidos});    
}

function listenHandler(){
    console.log(`Escutando na porta ${port}!`);
}