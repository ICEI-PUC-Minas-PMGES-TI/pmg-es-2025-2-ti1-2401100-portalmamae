// Define a porta usando a variável de ambiente do Render, ou usa 3000 por padrão.
const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});