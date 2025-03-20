const colocarTodasLetrasEmMaiusculoEm500ms = (texto) => {
    return new Promise((resolve, reject) => {
    if (typeof texto !== 'string') {
        return reject('O parâmetro não é uma string');
    }

    setTimeout(() => {
        resolve(texto.toUpperCase());
    }, 500);
    });
};

const inverteTodasLetras = (texto) => {
    return new Promise((resolve) => {
    resolve(texto.split('').reverse().join(''));
    });
};

colocarTodasLetrasEmMaiusculoEm500ms('olá mundo!')
    .then((textoMaiusculo) => {
    console.log('Texto em maiúsculo:', textoMaiusculo);
    return inverteTodasLetras(textoMaiusculo);
    })
    .then((textoInvertido) => {
    console.log('Texto invertido:', textoInvertido);
    })
    .catch((erro) => {
    console.log('Erro:', erro);
    });
