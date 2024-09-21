import Evento from "../modelo/evento.js";
import EventoDAO from "../persistencia/eventoDAO.js";
export default class EventoCtrl{
    // os metoddos abaixos serão chamados a partir de requisições vindas da internet
    //os metodos serao capazes de manipular as requisições HTTP e produzir respostas HTTP
    
    //irá processar requisições HTTP do tipo POST
    gravar(requisicao, resposta){
        //recebemos uma requisição HTTP do tipo POST e ela é do tipo JSON
        if (requisicao.method == "POST" && requisicao.is("application/json")){
            const dados = requisicao.body;
            const nome = dados.nome;
            const data = dados.data;
            const local = dados.local;
            const horario = dados.horario;
            const preco = dados.preco;
            const descricao = dados.descricao;
            const ingressosdisponiveis = dados.ingressosdisponiveis;


        if (nome && data && local && horario && preco && descricao && ingressosdisponiveis){
            const evento = new Evento(nome, data, local, horario, preco, descricao, ingressosdisponiveis);
       
            //resolver a promessa de gravar um cliente (metódo incluir é assincrono)
            evento.incluir().then(() => {
                resposta.status(201).json({
                    "status": true,
                    "mensagem": "Evento incluído com sucesso!"
                })
            }).catch((erro)=>{
                resposta.status(500).json({
                    "status": false,
                    "mensagem": "Erro ao incluir o evento: " + erro.message
                })
            });
        }
        
        else{
            resposta.status(400).json({
                "status": false,
                "mensagem": "Requisição inválida! Informe todos os dados do evento"
            })
        }

        }
        else{
            resposta.status(405).json({
                "status": false, 
                "mensagem": "Requisição inválida! Consulte a documentação da API"
            })
        }
    };

    //irá processar requisições HTTP do tipo PUT    
    alterar(requisicao, resposta){
        if (requisicao.method == "PUT" && requisicao.is("application/json")){
            const dados = requisicao.body;
            const nome = dados.nome;
            const data = dados.data;
            const local = dados.local;
            const horario = dados.horario;
            const preco = dados.preco;
            const descricao = dados.descricao;
            const ingressosdisponiveis = dados.ingressosdisponiveis;

            if (nome && data && local && horario && preco && descricao && ingressosdisponiveis){
                const evento = new Evento(nome, data, local, horario, preco, descricao, ingressosdisponiveis);
                evento.incluir().then(() => {
                    resposta.status(201).json({
                        "status": true,
                        "mensagem": "Evento alterado com sucesso!"
                    })
           
           
            }).catch((erro) => {
                resposta.status(500).json({
                    "status": false,
                    "mensagem": "Erro ao alterar o evento: " + erro.message
                })
            })
            
            }
            else{
                resposta.status(400).json({
                    "status": false, 
                    "mensagem": "Requisição inválida! Consulte a documentação da API"
                })
            }
        }
            else{
                resposta.status(405).json({
                    "status": false,
                    "mensagem": "Requisição inválida! Consulte a documentação da API"

                });
            }

    };

    //irá processar requisições HTTP do tipo DELETE
    excluir(requisicao, resposta){
        if (requisicao.method == "DELETE" && requisicao.is("application/json")){
        const { nome } = requisicao.body;
            if (nome){
                let evento = new Evento(nome);
                evento.excluir().then(()=>{
                    resposta.status(200).json({
                      "status": true,
                      "mensagem": "Evento excluído com sucesso!"
                    });
                }).catch((erro) => {
                    resposta.status(500).json({
                      "status": false,
                      "mensagem": "Erro ao excluir o evento: " + erro.message
                    })
                })
            }

            else{
                resposta.status(400).json({
                    "status": false,
                    "mensagem": "Requisão inválida! Informe o nome do evento!"
                });
            }

        }

        else{
            resposta.status(405).json({
                "status": false,
                "mensagem": "Requisição inválida! Consulte a documentação da API"

         });
            
        }

    };

    //irá processar requisições HTTP do tipo GET
    consultar(requisicao, resposta){
        // o termo de busca será uma informação que será passada na url             
        //o objeto params da requisição acumula os parametros passados na url
        let termoBusca = requisicao.params.termoBusca;
        if (!termoBusca){
            termoBusca = "";
        }
        if (requisicao.method == "GET"){   
            const evento = new Evento();
            evento.consultar(termoBusca).then((eventos) => {
                return resposta.status(200).json({
                    "status": true,
                    "listaEventos": eventos
                });

            }).catch((erro) => {
                return resposta.status(500).json({
                    "status": false,
                    "mensagem": "Erro ao consultar os eventos: " + erro.message
                })
            })
        }
        else{
            return resposta.status(405).json({
                "status": false,
                "mensagem": "Requição inválida! Consulte a documentação da API"
            });
        }

    };
}