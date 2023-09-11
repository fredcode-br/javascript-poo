// Exemplo de Objeto
const user = {
    nome: "Frederico",
    email: "frederico@gmail.com",
    nascimento: "2003/22/03",
    role: "admin",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}

//user.exibirInfos()
// const exibir = user.exibirInfos
// exibir()

const exibir = function() {
    console.log(this.nome, this.email)
}

// dando contexto a exibirNome
const exibirNome = exibir.bind(user) 

exibir() // sem contexto
exibirNome() // com contexto
