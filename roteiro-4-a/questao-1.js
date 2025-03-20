const vendas = [
    {produto: 'Notebook', preco: 4500, quantidade: 3, vendedor: 'Sara'},
    {produto: 'Smartphone', preco: 2300, quantidade: 5, vendedor: 'Matheus'},
    {produto: 'Monitor', preco: 1200, quantidade: 2, vendedor: 'Gabriel'},
    {produto: 'Teclado Mecânico', preco: 350, quantidade: 4, vendedor: 'Sara'},
    {produto: 'Notebook', preco: 4500, quantidade: 6, vendedor: 'Gabriel'},
    {produto: 'Monitor', preco: 1200, quantidade: 3, vendedor: 'Matheus'},
]

const gerarRelatorio = (vendas) => {
    let total_geral = 0
    const comissoes = []
    console.log('Relatório de Vendas:')

    vendas.forEach(venda => {
        total_geral += venda.preco * venda.quantidade

        comissoes.push({vendedor: venda.vendedor, comissao: venda.preco * venda.quantidade * 0.05})

        console.log(
            `-Produto: ${venda.produto}\n`,
            ` Quantidade: ${venda.quantidade}\n`,
            ` Preço Unitário: ${formatarMoeda(venda.preco)}\n`,
            ` Total: ${formatarMoeda(venda.preco * venda.quantidade)}\n`,
            ` vendedor: ${venda.vendedor}\n`,
        )
    }

)
    console.log('Total Geral:', total_geral)
    comissoes.forEach((comissao) => {
        console .log(`${comissao.vendedor}: ${formatarMoeda(comissao.comissao)}`)
    })

}

const formatarMoeda = (valor) => new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(valor)

gerarRelatorio(vendas)