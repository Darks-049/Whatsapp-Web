const qrcode = require('qrcode-terminal');//Ele esta importando o qrcode do terminal

const { Client, LocalAuth } = require('whatsapp-web.js');//Ele esta importando o qrcode do terminal

const client = new Client({
    authStrategy: new LocalAuth()
});//Esse cont está criando um novo cliente para ouvir eventos

client.on('qr', (qr) =>{
    qrcode.generate(qr, {small: true});
});//O evento que ele está ouvindo nesse é que ele gere um novo qrcode que é ulizado para conectar no Whatsapp Web

client.on('ready', () => {
    console.log('Client is ready!');//Se o evento tiver sucesso, este avisara que o código estara pronto
});

client.on('message', async (message_crate), async (message) => {
    if (message.body === '!Matérias Médio') {
        await message.replay('!1-Geometría 2-Física 3-Educação Artistica 4-Biologia 5-Geografíca 6-Educação Física 7-Química 8-Álgebra 9-Filosofia 10-História 11-Inglês 12-língua Portuguesa e Literatura 13-Redação Comercial');
    }
});//Ele irá ler todas as mensagens que mandar ao bot e irá repetir o evento sempre que usar !Matérias do Médio

client.on('message', async (message_crate), async (message) => {
    if (message.body === '!Matérias Informatica') {
        await message.replay('!1-Algoritimos e Programação de Computadores 2-Banco de Dados| 3-Desenvolvimento de Pagina Web 4-Desenvolvimento de Sistemas Comerciais 5-Marketing e Emprendedorismo 6-Noção de Hardware 7-Tópicos de Computação');
    }
});

client.on('message', async (message_crate), async (message) => {
    if (message.body === '!Matérias EAD') {
        await message.replay('!1-Administração de Produto 2-Logística Industrial e Empresarial 3-Movimentação e Armazenamento de Materiais 4-Redação Comercial');
    }
});

client.initialize();//Cuida da Inicialização



//O puppeteer é como se fosse um navegador anônimo oculto, ou seja, ele ira criará um qrcode de forma anônima um qr
