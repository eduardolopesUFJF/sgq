export class Alteracao {
    
    id: string;
    idObra: number;

    tipo: string;
    entidade: string;
    valor: string;
    data: Date;
    descricao: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}