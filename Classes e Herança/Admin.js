import User from "./User.js";

class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        // propriedades que vou trazer da superclasse para a subclasse
        super(nome, email, nascimento, role, ativo)
    }

    criarCurso(nomeDoCurso, vagas) {
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`
    }
} 

const novoAdmin = new Admin('Rodrigo', 'rodrigo@gmail.com', '2023-01-01')
// console.log(novoAdmin)
// console.log(novoAdmin.exibirInfos())

console.log(novoAdmin.criarCurso("JS", 40))