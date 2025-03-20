const clientes = [
    { nome : "Davi", email: "davi@email.com", plano: "Premium", ativo: true },
    { nome : "Mariana", email: "mariana@email.com", plano: "Básico", ativo: false },
    { nome : "Gabriel", email: "gabriel@email.com", plano: "Padrão", ativo: true },
    { nome: "Ana", email: "ana@email.com", plano: "Premium", ativo: false },
    { nome: "Huandrey", email: "huandrey@email.com", plano: "Padrão", ativo: true }
]

const gerarEmail = (cliente) => {
    if(cliente.ativo) {
        console.log(
            `Para: ${cliente.email}\n`,
            `Olá, ${cliente.nome}!\n\n`,
            `Obrigado por ser um assinante do nosso plano ${cliente.plano}! Estamos felizes em tê-lo conosco.\n\n`,
            `Caso precise de suporte, estamos à disposição.\n\n`,
            `Atenciosamente,\n`,
            `Equipe StreamingWeb\n`
        )
    } else {
        console.log(
            `Para: ${cliente.email}\n`,
            `Olá, ${cliente.nome}!\n\n`,
            `Notamos que sua assinatura do plano ${cliente.plano} está inativa. Que tal voltar e aproveitar nossos conteúdos exclusivos?\n\n`,
            `Reative agora e continue sua experiência conosco!\n\n`,
            `Atenciosamente,\n`,
            `Equipe StreamingWeb\n`
        )
    }
}

clientes.forEach(cliente => gerarEmail(cliente))