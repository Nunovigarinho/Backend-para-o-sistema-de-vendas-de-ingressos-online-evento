import Evento from "./modelo/evento.js"; //nunca esquecer da extensão do arquivo

//constante que armazena um conjunto de dados que estão estruturados e essa estrutura é chamada de Evento
const evento = new Evento("Iron Maiden: THE FUTURE PAST TOUR", "07/12/2024", "Allianz Parque", "21:00","A THE FUTURE PAST TOUR, que inclui músicas do mais recente álbum de estúdio do IRON MAIDEN, Senjutsu, foi apresentada para mais de 750.000 fãs em mais de 30 shows esgotados em toda a Europa no verão de 2023. Para mais informações, acesse www.ironmaiden.com.", "R$300,00", "247");


console.log(evento.data);