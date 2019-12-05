const axios = require("axios");
const TotalVoice = require("totalvoice-node");
const client = new TotalVoice("d6eddb355235881166801060e27a05c3");

const servers = [
    {
        name: "Servidor 01",
        url: "http://localhost:40001",
        developer: {
            name: "Bruno Gay",
            telephone: "5513981765076"
        }
    },
    {
        name: "Servidor 02",
        url: "http://localhost:40002",
        developer: {
            name: "Titico",
            telephone: "551332025969"
        }

    }
];

(async function() {
console.log("Iniciando monitoramento dos servidores");
    for(const server of servers){
        await axios({
            url: server.url,
            method: "get"
        }).then((response) => {
            console.log(`${server.name} está no ar!`);
        }).catch(() => {
            console.log(`${server.name} está fora do ar!`);
            const message = `${server.developer.name} vou comer você! Ass: Bruno Souza`;
            const options = {
                velocidade: 2,
                tipo_voz: "br-Vitoria"
            }
            client.tts.enviar(server.developer.telephone, message, options).then(() => {
                console.log(`O desenvolvedor ${server.developer.name} já foi informado!`)
            });
        });
    }
console.log("Finalizando monitoramento dos servidores");
})();