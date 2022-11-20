const raioDaBase = r = 3; //raio da base do cilindro
const alturaDoCilindro = h = 1 //altura do cilindro
const pi = 3.14159265359;

const areaTotalDoCilindroComPi = At = 2 * pi * r * (r + h);
const areaTotalDoCilindroSemPi = At = 2 * r * (r + h);

console.log(`Visto que um cilindro tem como raio da base ${raioDaBase} e como altura ${alturaDoCilindro}. Ao calcularmos a  área total deste cilindro, o resultado será ≅ ${areaTotalDoCilindroSemPi}pi.`);