import Evento from "./modelo/evento.js"; //nunca esquecer da extensão do arquivo

//constante que armazena um conjunto de dados que estão estruturados e essa estrutura é chamada de Evento
const evento = new Evento("Eric Clapton: 60 anos de carreira", "29/09/2024", "Allianz Parque", "21:00","350.00", "Em comemoração aos 60 anos de carreira, Eric Clapton inicia sua nova turnê mundial em 09 de maio de 2024 em Newcastle, na Inglaterra.", "947");


evento.incluir().then(() =>{
   console.log("Evento incluído com sucesso!");
}).catch((erro) =>{
 console.log("Erro ao incluir o evento: " +  erro);
});


evento.consultar().then((listaEventos)=>{
for (const evento of listaEventos){
  console.log(evento.toString());
}       
}).catch((erro)=>{
  console.log("Erro ao consultar os eventos: " + erro); 
})


evento.excluir("Eric Clapton: 60 anos de carreira").then(() => {
console.log("Evento excluído com sucesso!");
}).catch((erro) => {
console.log("Erro ao excluir o evento: " + erro);
});

evento.alterar().then(() => {
console.log("Evento alterado com sucesso!");
}).catch((erro) => {
console.log("Erro ao alterar o evento: " + erro);
});