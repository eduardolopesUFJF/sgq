import { Servico } from "./servico";

export class Area {
    
    id: number = 0;
    idGuid: string = '';
    idObra: number = 0;
    descricao: string;
    status: number = 0;
    situacao: string = 'Em aberto';
    delete: boolean = false;

    servicos: Servico[] = [];

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}