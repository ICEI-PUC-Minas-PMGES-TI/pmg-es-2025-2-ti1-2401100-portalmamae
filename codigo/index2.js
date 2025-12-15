// Trabalho Interdisciplinar 1 - Aplicações Web
//
// Esse módulo implementa uma API RESTful baseada no JSONServer
// O servidor JSONServer fica hospedado na seguinte URL
// https://jsonserver.rommelpuc.repl.co/contatos
//
// Para montar um servidor para o seu projeto, acesse o projeto 
// do JSONServer no Replit, faça o FORK do projeto e altere o 
// arquivo db.json para incluir os dados do seu projeto.
//
// URL Projeto JSONServer: https://replit.com/@rommelpuc/JSONServer
//
// Autor: Rommel Vieira Carneiro
// Data: 03/10/2023

const jsonServer = require('json-server')
const path = require('path')//
const server = jsonServer.create()
const router = jsonServer.router('./db/db.json')
  
// Para permitir que os dados sejam alterados, altere a linha abaixo
// colocando o atributo readOnly como false.
const middlewares = jsonServer.defaults()
server.use(middlewares)

// ----- [NOVO] Adicionando o CORS Manualmente -----
// Este middleware (função) será executado para CADA pedido
server.use((req, res, next) => {
  // Permite que qualquer origem (incluindo localhost:5500) acesse
  res.header('Access-Control-Allow-Origin', '*') 
  
  // Permite os métodos (como GET, POST, etc.)
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
  
  // Permite os cabeçalhos
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  
  // Continua para o próximo middleware (o json-server)
  next()
});
// --------------------------------------------------

server.use('/arquivos', jsonServer.defaults({
  static: path.join(__dirname, 'laudos_gerados')
}));//

server.use(router)

server.listen(3000, () => {
  console.log(`JSON Server is running em http://localhost:3000`)
  console.log(`Pasta de laudos está servida em http://localhost:3000/arquivos`)//
})