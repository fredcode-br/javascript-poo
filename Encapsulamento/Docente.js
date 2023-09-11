import User from "./User.js";

export default class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = true) {
        // propriedades que vou trazer da superclasse para a subclasse
        super(nome, email, nascimento, role, ativo)
    }
    
    aprovaEstudante(estudante, curso) {
        return `Estudante ${estudante} aprovado no curso ${curso}.`
    }
}
