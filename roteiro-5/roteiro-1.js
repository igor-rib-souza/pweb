const simularRequisicao = (tempo) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        const sucesso = Math.random() > 0.5;
        sucesso ? resolve('Sucesso') : reject('Erro');
    }, tempo);
    });
};

const fazerRequisicao = async () => {
    try {
    const resposta = await simularRequisicao(3000);
    console.log(resposta);
    } catch (erro) {
        console.error(erro);
    }
};

fazerRequisicao();
