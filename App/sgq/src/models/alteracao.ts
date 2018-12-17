export class Alteracao {
    
    id: string;
    obraId: number;

    idArea: number;
    idGuidArea: string;

    idServico: number;
    idGuidServico: string;

    idInspecao: number;
    idGuidInspecao: string;

    tipo: string;
    entidade: string;
    valor: string;
    data: Date;
    descricao: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}