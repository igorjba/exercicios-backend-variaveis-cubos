const pi = 3.14159265359;
const raio = r = 3;
const diametro = d = 2 * raio;

const volumeDaEsfera = v = 4 / 3 * pi * r ** 3;

const volumeDaEsferaSemValorDePi = 4 / 3 * r ** 3;

console.log(`O volume de uma esfera de raio ${raio} é ${volumeDaEsferaSemValorDePi} PI ou ${volumeDaEsfera.toFixed(2)} cm³.`);
