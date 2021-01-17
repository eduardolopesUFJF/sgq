import { FuncionarioTerceirizado } from "./funcionario-terceirizado";

export class Fornecedor {
    
    id: number;
    nome: string;

    funcionariosTerceirizados: FuncionarioTerceirizado[] = [];

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}