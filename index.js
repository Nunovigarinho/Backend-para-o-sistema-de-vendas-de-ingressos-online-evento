import express from "express";
import rotaevento from "./Rotas/rotaevento.js";
import cors from "cors";

const app = express();
const host = "0.0.0.0"; //todas as interfaces de rede
const porta= 4000;

//o servidor é permitido interpretar o corpo da requisição como JSON
app.use(cors({
  origin:"*",
}));

app.use(express.json()); 

app.use('/eventos', rotaevento);

app.listen(porta, host, ()=>{
  console.log(`Servidor iniciado em http://${host}:${porta}`);
})