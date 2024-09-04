export default class Evento{
    //atributos privados
#nome   
#data
#local
#horario
#preco
#descricao
#ingressosdisponíveis
    
constructor(nome, data, local, horario, preco, descricao, ingressosDisponiveis) {
    this.nome = nome;                  
    this.data = data;                  
    this.local = local;                
    this.horario = horario;            
    this.preco = preco;                
    this.descricao = descricao;        
    this.ingressosDisponiveis = ingressosDisponiveis; 
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

    get ingressosDisponiveis(){
        return this.#ingressosdisponíveis;
    }

    set ingressosDisponiveis(novoingressosDisponiveis){
        this.#ingressosdisponíveis = novoingressosDisponiveis;
    }


    //sobrescrita do metodo toString()
    

}
