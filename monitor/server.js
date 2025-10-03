require('dotenv').config()
const axios = require("axios")
const TotalVoice = require("totalvoice-node")

const client = new TotalVoice(process.env.TOTALVOICE_API_KEY)
const servers = JSON.parse(process.env.SERVERS || '[]')

;(async function () {
    console.log("Iniciando monitoramento dos servidores")
    for (const server of servers) {
        await axios.get(server.url)
            .then(() => {
                console.log(`${server.name} está no ar!`)
            })
            .catch(() => {
                console.log(`${server.name} está fora do ar!`)
                const message = `${server.developer.name} vou comer você! Ass: Bruno Souza`
                const options = {
                    velocidade: 2,
                    tipo_voz: "br-Vitoria"
                }
                client.tts.enviar(server.developer.telephone, message, options)
                    .then(() => {
                        console.log(`O desenvolvedor ${server.developer.name} já foi informado!`)
                    })
            })
    }
    console.log("Finalizando monitoramento dos servidores")
})()
