const usuarios = [
    { nome: "Cleciana", idade: "25", ativo: "true", saldo: "1234.56"},
    { nome: "Gustavo", idade: 30, ativo: true, saldo: 980},
    { nome: "Rayane", idade: null, ativo: "false", saldo: "1500.90"},
    { nome: "Igor", idade: "NaN", ativo: 1, saldo: undefined},
    { nome: "Samuel", idade: "22 anos", ativo: false, saldo: "0"},
]

normalizarUsuario = (usuario) => {
    const nome = usuario.nome
    const idade = isNaN(parseInt(usuario.idade)) || !isNum(usuario.idade) ? null : parseInt(usuario.idade)
    const ativo = usuario.ativo === "true" || 1 ? true : false
    const saldo = (usuario.saldo === null || usuario.saldo === undefined || isNaN(parseFloat(usuario.saldo))) ? 0.00 : parseFloat(usuario.saldo).toFixed(2)
    return { nome, idade, ativo, saldo }
}

processarUsuario = (lista) => {
    const usuariosNormalizados = lista.map(usuario => normalizarUsuario(usuario))

    return usuariosNormalizados
}

const isNum = (val) => {return /^\d+$/.test(val)}

console.log(processarUsuario(usuarios))

