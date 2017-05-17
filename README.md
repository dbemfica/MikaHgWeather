# Mika Hg Weather

É um módulo desenvolvido para consumir os serviços da [HG Weather](https://hgbrasil.com/status/weather/) e permitir a  [Mika Assistente](https://github.com/dbemfica/MikaAssistant) informar as informações de previsão do tempo

## Instalação

``` js
npm install mika-hgweather
```

## Configuração

Depois de rodar o `npm install mika-hgweather` você precisa registrar o módulo dentro do arquivo `config/mika.js`

``` js
const MikaHgWeather = require("mika-hgweather");

module.exports = (Mika) => {
    *****
    Mika.register(MikaHgWeather);
};
```

E colocá que a sua chave dentro do arquivo `.env`

``` js
HGWEATHER_KEY=********
```


## Os comandos que podemos usar com esse módulo
* mika previsão do tempo
* mika previsão do tempo para {data}
* mika previsão do tempo para a cidade de {cidade}
* mika previsão do tempo em {cidade}

**\* {data} uma data. Exemplo: amanhã**
**\* {cidade} uma cidade. Exemplo: Porto Alegre**


