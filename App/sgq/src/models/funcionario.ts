export class Funcionario {
    
    id: number;
    nome: string;
    idCentroCusto: number;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}