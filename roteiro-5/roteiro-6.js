// Primeira função que coloca todas as letras em maiúsculo após 500ms
const colocarTodasLetrasEmMaiusculoEm500ms = async (texto) => {
    if (typeof texto !== 'string') {
        throw 'O parâmetro não é uma string';
    }

    await new Promise(resolve => setTimeout(resolve, 500));
    
    return texto.toUpperCase();
};

const inverteTodasLetras = async (texto) => {
    return texto.split('').reverse().join('');
};

const processarTexto = async (texto) => {
    try {
    const textoMaiusculo = await colocarTodasLetrasEmMaiusculoEm500ms(texto);
    console.log('Texto em maiúsculo:', textoMaiusculo);

    const textoInvertido = await inverteTodasLetras(textoMaiusculo);
    console.log('Texto invertido:', textoInvertido);
    } catch (erro) {
    console.log('Erro:', erro);
    }
};

processarTexto('olá mundo!');

processarTexto(123);
