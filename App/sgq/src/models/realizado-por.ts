import { RealizadoPorFuncionario } from "./realizado-por-funcionario";

export class RealizadoPor {
    
    id: number;
    idGuid: string;
    idInspecao: number;
    idGuidInspecao: string;
    tipoFuncionario: number = 0;
    idCentroCusto: number;
    nomeCentroCusto: string = "";
    idFornecedor: number;
    nomeFornecedor: string = "";
    delete: boolean;

    funcionarios: RealizadoPorFuncionario[] = [];
    nomesFuncionarios: string [] = [];

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}