const populacaoInicial = Po = 1_000; //população incial de pessoas infectadas
const quantidadeRisco = x = 4; //quantidade de pessoas para as quais um paciente infectado pode transmitir
const tempoPercorrido = t = 7; //dias
const simulacao = Po * x ** (t / 7);

console.log(`Visto que inicialmente havia ${Po} pessoas infectadas, ${simulacao} será(ão) infectada(s) após ${t} dia(s).`)