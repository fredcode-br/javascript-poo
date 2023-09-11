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

const admin = {
    nome: "Mariana",
    email: "mariana@gmail.com",
    role: "admin",
    criarCurso() {
        console.log('Curso criado!')
    }
}

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()