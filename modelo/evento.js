import EventoDAO from "../persistencia/eventoDAO.js"
//DAO = objeto de acesso aos dados
export default class Evento{
    //atributos privados
#nome   
#data
#local
#horario
#preco
#descricao
#ingressosdisponiveis
    
constructor(nome, data, local, horario, preco, descricao, ingressosdisponiveis) {
    this.nome = nome;                  
    this.data = data;                  
    this.local = local;                
    this.horario = horario;            
    this.preco = preco;                
    this.descricao = descricao;        
    this.ingressosdisponiveis = ingressosdisponiveis;
}

    //metodos javascript getters e setters

    //get lê o atributo privado
    get nome(){
        return this.#nome;
    }

    //set altera o atributo privado
    set nome(novoNome){
        this.#nome = novoNome;
    }

    get data(){
        return this.#data;
    }

    set data(novaData){
        this.#data = novaData;
    }

    get local(){
        return this.#local;
    }

    set local(novoLocal){
        this.#local = novoLocal;
    }

    get horario(){
        return this.#horario;
    }

    set horario(novoHorario){
        this.#horario = novoHorario;
    }
    
    get preco(){
        return this.#preco;
    }

    set preco(novoPreco){
        this.#preco = novoPreco;
    }

    get descricao(){
        return this.#descricao;
    }

    set descricao(novoDescricao){
        this.#descricao = novoDescricao;
    }

    get ingressosdisponiveis(){
        return this.#ingressosdisponiveis;
    }

    set ingressosdisponiveis(novoingressosdisponiveis){
        this.#ingressosdisponiveis = novoingressosdisponiveis;
    }


    //sobrescrita do metodo toString()
    toString(){
       //string literals
        return `Nome: ${this.#nome} \n
Data: ${this.#data} \n
Local: ${this.#local} \n
Horario: ${this.#horario} \n
Preço: ${this.#preco} \n
Descrição: ${this.#descricao} \n
ingressosdisponiveis: ${this.#ingressosdisponiveis} \n
`
    }
    
    async incluir(){
        const eveDAO = new EventoDAO();
        await eveDAO.gravar(this);}
    async alterar(){
        const eveDAO = new EventoDAO();
        await eveDAO.alterar(this);}
    async excluir(){
        const eveDAO = new EventoDAO();
        await eveDAO.excluir(this);}

    async consultar(termoBusca){
        const eveDAO = new EventoDAO();
        return await eveDAO.consultar(termoBusca); }
}