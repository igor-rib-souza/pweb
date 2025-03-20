const imprimePrimos = (inicio, fim) => {
    const start = inicio < fim ? inicio : fim;
    const end = inicio < fim ? fim : inicio;

    for (let i = start; i <= end; i++) {
        if (isPrimo(i)) {
            console.log(i);
        }
    }
}

const isPrimo = (numero) => {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return numero > 1;
}

imprimePrimos(10, 22)