document.addEventListener('DOMContentLoaded', () => {
    // Array simulando o histórico de compras do usuário
    const historicoCompras = [
        { 
            numero: 1,
            data: '01/04/2024',
            ingressos: 2,
            valor: 100,
            codigoOperacao: 'ABC123'
        },
        // Adicione mais objetos conforme necessário
    ];

    const container = document.querySelector('.container');

    // Renderizar cada compra no histórico
    historicoCompras.forEach(compra => {
        const compraDiv = document.createElement('div');
        compraDiv.classList.add('compra');

        compraDiv.innerHTML = `
            <h2>Compra #${compra.numero}</h2>
            <p>Data: ${compra.data}</p>
            <p>Ingressos: ${compra.ingressos}</p>
            <p>Valor: R$ ${compra.valor.toFixed(2)}</p>
            <p>Código de Operação: ${compra.codigoOperacao}</p>
        `;

        container.appendChild(compraDiv);
    });
});
