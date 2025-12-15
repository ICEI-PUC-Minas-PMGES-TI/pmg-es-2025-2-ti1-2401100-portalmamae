const express = require('express');
const path = require('path'); // ESSENCIAL para trabalhar com caminhos de arquivo
const app = express();

// 1. Configurar a Rota Estática
// Isso permite que o Express encontre arquivos como CSS, imagens e scripts JS
// que estão dentro da pasta 'home'.
app.use(express.static(path.join(__dirname, 'home')));


// 2. Definir a Rota Raiz (/)
// Quando alguém acessa a URL principal, o servidor envia o arquivo index.html
app.get('/', (req, res) => {
    // path.join constrói o caminho absoluto correto: /caminho/para/codigo/home/index.html
    res.sendFile(path.join(__dirname, 'home', 'index.html')); 
});


// Define a porta usando a variável de ambiente do Render, ou usa 3000 por padrão.
const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});