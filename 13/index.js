const raioDaBase = r = 2; //raio da base do cilindro
const alturaDoCilindro = h = 3; //altura do cilindro
const pi = Math.PI;

const areaTotalDoCilindroComPi = at = 2 * pi * r * (r + h);
const areaTotalDoCilindroSemPi = at = 2 * r * (r + h);

console.log(`Visto que um cilindro tem como raio da base ${raioDaBase} e como altura ${alturaDoCilindro}. Ao calcularmos a  área total deste cilindro, o resultado será ≅ ${areaTotalDoCilindroSemPi}pi, ou ≅ ${areaTotalDoCilindroComPi.toFixed(2)}.`);