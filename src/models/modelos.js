class Projeto{
    constructor(nome, tecnologia){
        this.nome = nome;
        this.tecnologia = tecnologia;
    }
}

class Conhecido{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

module.exports = {
    Conhecido: Conhecido,
    Projeto: Projeto
}  





