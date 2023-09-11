export default class User {
    constructor(nome, email, nascimento, role, ativo = true) {
        this.nome = nome
        this.email = email
        this.nascimento = nascimento
        this.role = role || 'estudante'
        this.ativo = ativo
    }

    exibirInfos(){
        return `${this.nome}, ${this.email}`
    }
}

// const novoUser = new User('Juliana', 'juliana@gmail.com', '2021-01-01')
// console.log(novoUser)
// console.log(novoUser.exibirInfos())

// // mesmo com classe, foi passado User como protótipo para novoUser
// console.log(User.prototype.isPrototypeOf(novoUser))