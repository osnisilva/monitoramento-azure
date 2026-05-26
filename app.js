const http = require('http');

const server = http.createServer((req, res) => {
    console.log("Nova requisição recebida");
    res.end("Aplicação monitorada");
});

server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});