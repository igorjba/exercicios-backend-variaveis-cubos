//Curva Exponencial

const populacaoInicial = p0 = 1_000; //população incial de pessoas infectadas
const quantidadeRisco = x = 4; //quantidade de pessoas para as quais um paciente infectado pode transmitir
const tempoPercorrido = t = 100; //dias
const simulacao = p0 * x ** (t / 7);

console.log(`Visto que inicialmente havia ${p0} pessoas infectadas, ${simulacao} será(ão) infectada(s) após ${t} dia(s).`)