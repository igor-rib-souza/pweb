//E dia que foi entregue o TCC
//D data final que deve ser entregue
const consegueApresentarTcc = (E, D) => {
    if (D-E >= 3){
        console.log("Muito bem! O aluno está apto a apresentar até o natal!")
    }
    else {
        console.log("O trabalho está muito ruim!")
        if (D+2 < 24){
            console.log("TCC Apresentado!")
        }
        else {
            console.log("Não deu! Só no próximo ano agora.")
        }
    }
}

consegueApresentarTcc(13, 19)
consegueApresentarTcc(22, 23)
consegueApresentarTcc(21, 22)