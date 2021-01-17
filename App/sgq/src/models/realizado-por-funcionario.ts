export class RealizadoPorFuncionario {
    
    id: number;
    idFuncionario: number;
    idFuncionarioTerceirizado: number;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}