import express from "express";
import rotaevento from "./Rotas/rotaevento.js";

const app = express();
const host = "0.0.0.0"; //todas as interfaces de rede
const porta= 4000;

app.use(express.json()); //o servidor é permitido interpretar o corpo da requisição como JSON

app.use('/eventos', rotaevento);

app.listen(porta, host, ()=>{
  console.log(`Servidor iniciado em http://${host}:${porta}`);
})