//Juros compostos

const periodoDeTempo = t = 5;  //Período de tempo
const taxaFixaDeJuros = i = 0.125; //12,5% //Expressa em decimal na fórmula, ou seja, o valor da taxa dividido por 100
const capitalInicial = c = 1_000; //Valor inicial de uma dívida, empréstimo ou investimento
const jurosComposto = montante = m = c * (1 + i) ** t; //O capital acrescido dos juros, ou seja, Capital + Juros)

console.log(`Se um capital de R$${capitalInicial} for aplicado durante ${periodoDeTempo} mês(es) no sistema de juros compostos sob uma taxa mensal fixa de ${taxaFixaDeJuros}, o montante será de R$${montante}, que de forma arredondada ficará R$${montante.toFixed(2)}.`);