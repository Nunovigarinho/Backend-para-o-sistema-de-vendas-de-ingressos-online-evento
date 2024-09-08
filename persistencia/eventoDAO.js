import conectar from "./conexao.js";
import Evento from "../modelo/evento.js";

export default class EventoDAO{
    //Essa classe se responsabiliza por gravar, alterar, excluir e consultar eventos no banco de dados

    constructor(){
        this.init(); //iniciailizar o banco de dados
    }

    async init(){
        try{
        const conexao = await conectar();
        const sql = `CREATE TABLE IF NOT EXISTS eventosonline(
                nome VARCHAR(33) NOT NULL PRIMARY KEY, 
                data VARCHAR(10) NOT NULL, 
                local VARCHAR(14) NOT NULL, 
                horario VARCHAR(5) NOT NULL, 
                preco VARCHAR(10) NOT NULL, 
                descricao VARCHAR(1000) NOT NULL,
                ingressosdisponiveis VARCHAR(3) NOT NULL)`;
        await conexao.execute(sql);
        await global.poolConexoes.releaseConnection(conexao);
        console.log ("Banco de dados iniciado com sucesso!")   
    }   catch (erro){
        console.log("Banco de dados não pode ser iniciado!");
    }
       
    } 
    
    async gravar(evento){
        if (evento instanceof Evento){
            const conexao = await conectar();
            const sql = `INSERT INTO evento(nome,data,local,horario,preco,descricao,ingressosdisponiveis) 
                         VALUES (?, ?, ?, ?, ?, ?, ?);`;
            const parametros = [
                evento.nome,  
                evento.data, 
                evento.local, 
                evento.horario,
                evento.preco, 
                evento.descricao,
                evento.ingressosdisponiveis,
            ];
            await conexao.execute(sql,parametros);
            await global.poolConexoes.releaseConnection(conexao);
        }
    }
    
    async alterar(evento) {
        if (evento instanceof Evento) {
            const conexao = await conectar();
            const sql = `UPDATE evento SET 
                             nome = ?, 
                             data = ?, 
                             local = ?, 
                             horario = ?, 
                             preco = ?, 
                             descricao = ?, 
                             ingressosdisponiveis = ? 
                             WHERE nome = ?;`;  // Atualiza o registro com base no nome
            const parametros = [
                evento.nome,
                evento.data,
                evento.local,
                evento.horario,
                evento.preco,
                evento.descricao,
                evento.ingressosdisponiveis,
                evento.nome  // Nome do evento para identificar o registro a ser alterado
            ];
            await conexao.execute(sql, parametros);
            await global.poolConexoes.releaseConnection(conexao);
        }
    }
    
    async excluir(evento){
        if (evento instanceof Evento){
            const conexao = await conectar();
            const sql = `DELETE FROM evento WHERE nome = ?;`
            const parametros = [
                evento.nome
            ];
            await conexao.execute(sql,parametros);
            await global.poolConexoes.releaseConnection(conexao);
        }
    }

    async consultar(termoBusca){
        let sql = "";
        let parametros = [];
        if (termoBusca){ //se o termo de busca existir, busca será por ingressos disponiveis
            sql = `SELECT * FROM evento WHERE nome = ? ORDER BY nome;`;
            parametros.push(termoBusca);
        }
        else{
            sql = `SELECT * FROM evento ORDER BY nome;`;
        }

        const conexao = await conectar();
        const [registros] = await conexao.execute(sql,parametros);
        let listaEventos = [];
        for (const registro of registros){
            const evento = new Evento(
                registro.nome,
                registro.data,
                registro.local,
                registro.horario,
                registro.preco,
                registro.descricao,
                registro.ingressosdisponiveis
            );
            listaEventos.push(evento);
        }
        await global.poolConexoes.releaseConnection(conexao);
        return listaEventos;

    }

    
}