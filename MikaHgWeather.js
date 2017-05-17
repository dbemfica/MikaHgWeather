'use strict';
const env = require('dotenv').config().parsed;
const path = require('path');
const curl = require('curl');
const ComandObject = require(path.resolve("src/ComandObject"));
const comandsListening = require(__dirname + "/comandsListening.json");
const comandsSpeak = require(__dirname + "/comandsSpeak.json");
const config = require(__dirname + "/config/config");
const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');
const dateTranscribe = require(path.resolve("src/helpers/dateTranscribe"));

module.exports = {
    __proto__: ComandObject,
    comandsListening: comandsListening,
    objeto: 'MikaHgWeather',
    previsao: function() {

        if( config.latitude === null || config.longitude === null ){
            this.mensagem = this.say('erro_geolocation',comandsSpeak);
            return this
        }

        curl.getJSON(
            "https://api.hgbrasil.com/weather/?format=json&lat="+config.latitude+"&lon="+config.longitude+"&key="+env.HGWEATHER_KEY,
            config.options,
            (err, response, data) => {
                socket.emit('time', this.say('previsao',comandsSpeak,{
                    turno: data.results.currently,
                    descricao: data.results.description,
                    temperatura: data.results.temp
                }));
            }
        );

        this.mensagem = this.say('aguarde',comandsSpeak);
        return this
    },
    previsaoParaDia: function(parametro) {

        if( config.latitude === null || config.longitude === null ){
            this.mensagem = this.say('erro_geolocation',comandsSpeak);
            return this
        }

        let dataMensagem = new Date(dateTranscribe(parametro.data));
        let dataAtual = new Date();
        let newData = new Date( dataMensagem.getTime() - dataAtual.getTime() );
        let n = parseInt(newData.getDate())

        curl.getJSON(
            "https://api.hgbrasil.com/weather/?format=json&lat="+config.latitude+"&lon="+config.longitude+"&key="+env.HGWEATHER_KEY,
            config.options,
            (err, response, data) => {
                socket.emit('time', this.say('previsaoPara',comandsSpeak,{
                    dia: parametro.data,
                    descricao: data.results.forecast[n].description,
                    minima: data.results.forecast[n].min,
                    maxima: data.results.forecast[n].max
                }));
            }
        );

        this.mensagem = this.say('aguarde',comandsSpeak);
        return this
    },
    previsaoPorCidade: function(parametro) {
        if( config.latitude === null || config.longitude === null ){
            this.mensagem = this.say('erro_geolocation',comandsSpeak);
            return this
        }

        curl.getJSON(
            "https://api.hgbrasil.com/weather/?format=json&city_name="+parametro.cidade+"&key="+env.HGWEATHER_KEY,
            config.options,
            (err, response, data) => {
                socket.emit('time', this.say('previsaoPorCidade',comandsSpeak,{
                    turno: data.results.currently,
                    descricao: data.results.description,
                    temperatura: data.results.temp,
                    cidade: data.results.city_name
                }));
            }
        );

        this.mensagem = this.say('aguarde',comandsSpeak);
        return this
    }
};