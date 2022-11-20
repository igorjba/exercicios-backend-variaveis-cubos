const montante = m = 90_000; //valor total pago
const capitalInicial = c = 60_000;
const numeroDeMeses = n = 24;

const taxaDeJuros = i = (m / c) ** (1 / n) - 1;
const taxaDeJurosEmPorcentagem = taxaDeJuros * 100;

console.log(`O seu financiamento de ${capitalInicial} teve uma taxa de juros de ${taxaDeJurosEmPorcentagem.toFixed(3)}%, pois após ${numeroDeMeses} meses você teve que pagar ${montante} reais.`);