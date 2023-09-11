import User from "./User.js";

export default class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        // propriedades que vou trazer da superclasse para a subclasse
        super(nome, email, nascimento, role, ativo)
    }

    nomeAdmin() {
        return `${this.nome}`
    }

    criarCurso(nomeDoCurso, vagas) {
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`
    }
} 

