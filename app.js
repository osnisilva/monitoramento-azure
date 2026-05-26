const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log("Nova requisição recebida");
    res.end("Aplicação monitorada");
});

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});