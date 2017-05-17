'use strict';
module.exports = conditionToText;

function conditionToText(slug,genre){
    // switch(slug){
    //     case 'storm':
    //         return "Tempestade";
    //     case 'snow':
    //         return "Tempestade";
    //     case 'hail':
    //         return "Tempestade";
    //     case 'rain':
    //         return "Tempestade";
    //     case 'fog':
    //         return "Tempestade";
    //     case 'clear_day':
    //         return "ensolarado";
    //     case 'clear_night':
    //         return "estrelada";
    //     case 'cloud':
    //         return "Tempestade";
    //     case 'cloudly_day':
    //         return "Tempestade";
    //     case 'cloudly_night':
    //         return "Tempestade";
    //     default:
    //         return null;
    // }

    if( slug === 'clear_day' && genre === 'female' ){
        return "Ensoladara";
    }
    if( slug === 'clear_day' && genre === 'genre' ){
        return "Ensoladaro";
    }
}