const showConceito = (notas,calculaConceito) => {
    notas.forEach(nota => {
        console.log(`Nota: ${nota} - Conceito: ${calculaConceito(nota)}`)
    })
}

const calculaConceito = (nota) => {
    if (nota <= 4.9){
        return 'D'
    }
    else if (nota <= 6.9){
        return 'C'
    }
    else if (nota <= 8.9){
        return 'B'
    }
    else return 'A'
}

showConceito([10, 5, 8, 3], calculaConceito)