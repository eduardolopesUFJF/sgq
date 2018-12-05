export class Alteracao {
    
    id: string;
    obraId: number;

    tipo: string;
    entidade: string;
    valor: any;
    data: Date;
    descricao: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}