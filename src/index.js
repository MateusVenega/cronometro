const express = require('express')

const app = express();
let minutos = 0
let segundos = 0
let iniciarCronometro = null;

function Cronometro() {
    segundos++
    if (segundos >= 60) {
        minutos++
        segundos = 0
    }
}

app.get('/', function (req, res) {
    res.send(`Tempo atual do cronômetro: ${minutos} minutos e ${segundos} segundos`)
});

app.get('/iniciar', function (req, res) {
    iniciarCronometro = setInterval(Cronometro, 1000)
    res.send('Cronômetro iniciado!')
});

app.get('/pausar', function (req, res) {
    clearInterval(iniciarCronometro)
    res.send('Cronômetro pausado!')
});

app.get('/continuar', function (req, res) {
    iniciarCronometro = setInterval(Cronometro, 1000)
    res.send('Cronômetro continuando!')
});

app.get('/zerar', function (req, res) {
    minutos = 0
    segundos = 0
    res.send('Cronômetro zerado!')
});





app.listen(8000)