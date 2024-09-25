// Função principal para converter o valor de uma moeda para outra
function convertCurrency(amount, fromCurrency, toCurrency) {
    // Tabela de conversão (taxas fictícias)
    const conversionRates = {
        'BRL': { 'USD': 0.20, 'EUR': 0.18 },
        'USD': { 'BRL': 5.00, 'EUR': 0.90 },
        'EUR': { 'BRL': 5.50, 'USD': 1.10 }
    };

    // Verificar se a moeda de origem e destino são a mesma
    if (fromCurrency === toCurrency) {
        return amount; // Não há necessidade de conversão
    }

    // Verificar se existe a taxa de conversão entre as moedas escolhidas
    if (conversionRates[fromCurrency] && conversionRates[fromCurrency][toCurrency]) {
        const rate = conversionRates[fromCurrency][toCurrency];
        return amount * rate; // Retornar o valor convertido
    }

    // Caso não haja taxa de conversão definida
    return null;
}

// Evento acionado ao clicar no botão "Converter"
document.getElementById('convertButton').addEventListener('click', function () {
    // Obter o valor do campo de entrada
    const amount = parseFloat(document.getElementById('amount').value);

    // Obter as moedas de origem e destino selecionadas
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    // Verificar se o valor inserido é um número válido
    if (isNaN(amount) || amount <= 0) {
        alert("Por favor, insira um valor válido!");
        return; // Sair da função se o valor for inválido
    }

    // Realizar a conversão
    const result = convertCurrency(amount, fromCurrency, toCurrency);

    // Exibir o resultado
    const resultText = document.getElementById('resultText');
    if (result !== null) {
        resultText.textContent = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
    } else {
        resultText.textContent = "Conversão indisponível!";
    }
});
