'use strict';
const env = require('dotenv').config().parsed;

var latitude = null;
if( env.HGWEATHER_LAT !== undefined){
    latitude = env.HGWEATHER_LAT;
}else if( process.env.latitude !== undefined ){
    latitude = process.env.latitude;
}

var longitude = null;
if( env.HGWEATHER_LOG !== undefined){
    longitude = env.HGWEATHER_LOG;
}else if( process.env.longitude !== undefined ){
    longitude = process.env.longitude;
}

const options = {};

module.exports = {
    options: options,
    latitude: latitude,
    longitude: longitude,
}