function User(nome, email) {
    this.nome = nome
    this.email = email

    this.exibirInfos = function() {
        return `${this.nome}, ${this.email}`
    }
}

// const novoUser = new User('Juliana', 'juliana@gmail.com') // User é protótipo de novoUser
// console.log(novoUser.exibirInfos()) // novoUser é o contexto, pois a chamada foi feita a partir dele

// function Admin(role) {
//     User.call(this, 'Juliana', 'juliana@gmail.com')
//     this.role = role || 'estudante'
// }

// // passou as propriedades protótipo de user para admin e criou um novo objeto
// Admin.prototype = Object.create(User.prototype)
// const novoUser = new Admin('admin')
// console.log(novoUser.exibirInfos())
// console.log(novoUser.role)

const user = {
    // pode se criar o método init para substituir a função construtora 
    init: function(nome, email) {
        this.nome = nome
        this.email = email
    },

    exibirInfos: function(nome) {
        return nome
    }
}

const novoUser = Object.create(user) //criando novoUser usando user como protótipo
console.log(novoUser.exibirInfos('Juliana'))

