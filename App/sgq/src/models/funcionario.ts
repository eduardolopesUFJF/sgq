export class Funcionario {
    
    id: number;
    nome: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}