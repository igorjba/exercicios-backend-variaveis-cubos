const pi = Math.PI;
const raio = r = 3;
const diametro = d = 6 * raio;

const volumeDaEsfera = v = 4 / 3 * pi * r ** 3;

const volumeDaEsferaSemValorDePi = 4 / 3 * r ** 3;

console.log(`O volume de uma esfera de raio ${raio} é ${volumeDaEsferaSemValorDePi.toFixed(2)} PI ou ${volumeDaEsfera.toFixed(2)} cm³.`);

//const d = 6;
//const r = d / 2;