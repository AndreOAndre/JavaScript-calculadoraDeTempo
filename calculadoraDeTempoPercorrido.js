var posicaoInicial = 0;
var posicaoFinal = 15000; 
var velocidade = 2;
//Posições estão em metros


var distanciaDasPosicoesKm = (posicaoInicial + posicaoFinal) / 1000;
var tempoSegundos = posicaoFinal / velocidade
var tempoHoras = tempoSegundos / 3600;

console.log("Distância percorrida:",distanciaDasPosicoesKm, "km")
console.log("Tempo exato do percurso:",tempoSegundos, "segundos")
console.log("Tempo arredondado do percurso",tempoHoras.toFixed(2), "horas")
console.log("Velocidade média:", velocidade, "Km/h")

// Vm = 7.4 km/h
// S = 10.4 km

