export class Usuario {
    id:number = 0;
    nome:string = '';
    email:string = '';
    senha:string = '';
    listaTarefa: Tarefas[] = [];
}

export class Tarefas{
    id: number = 0;
    titulo:string = '';
    descricao:string = '';
    dataCriacao: string = '';
    dataConclusao: string = '';
    prioridade:number = 0;
    concluida: boolean = false ;
}