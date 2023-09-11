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
admin.exibirInfos() // como foi chamado a partir do admin, o contexto do this pertence ao admin

// exibe o objeto protótipo de admin
admin.__proto__ // ( só funciona no console do navegador )

// executa o construtor protótipo do protótipo
admin.__proto__.__proto__