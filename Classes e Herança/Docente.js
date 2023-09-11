import User from "./User.js";

class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = true) {
        // propriedades que vou trazer da superclasse para a subclasse
        super(nome, email, nascimento, role, ativo)
    }
    
    aprovaEstudante(estudante, curso) {
        return `Estudante ${estudante} aprovado no curso ${curso}.`
    }
}

const novoDocente = new Docente('Pedro', 'pedro@gmail.com', '2023-01-01')
// console.log(novoDocente)
// console.log(novoDocente.exibirInfos())

console.log(novoDocente.aprovaEstudante('Pedro', 'JS'))