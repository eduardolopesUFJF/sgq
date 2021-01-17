export class FuncionarioTerceirizado {
    
    id: number;
    nome: string;
    idFornecedor: number;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}