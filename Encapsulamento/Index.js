import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new User('Mariana', 'mariana@gmail.com', '2023-01-01')
console.log(novoUser.exibirInfos())

const novoAdmin = new Admin('Rodrigo', 'rodrigo@gmail.com', '2023-01-01')
novoAdmin.nome = 'Pedro' // setter
console.log(novoAdmin.nome) // getter