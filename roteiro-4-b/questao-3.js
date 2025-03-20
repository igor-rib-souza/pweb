const mock = {
    'id':0,
    'nome':'',
    'n':5,
    'a1':1,
    'r':10
}

const n = mock.n
const a1 = mock.a1
const r = mock.r

const PA = ({n, a1, r}) => {
    const resultado = []
    for (let i = 0; i < n; i++) {
        resultado.push(a1 + r * i)
    }
    return resultado
}

const PG = ({n, a1, r}) => {
    const resultado = []
    for (let i = 0; i < n; i++) {
        resultado.push(a1 * (r ** i))
    }
    return resultado
}

console.log(PA({n, a1, r}))
console.log(PG({n, a1, r}))

