import { ItemInspecao } from "./item-inspecao";
import { Ocorrencia } from "./ocorrencia";

export class Inspecao {
    
    id: number = 0;
    idGuidInspecao: string = '';
    idServico: number;
    dataInspecao: Date;
    dataEncerramento: Date;
    campo1: string = "";
    campo2: string = "";
    campo3: string = "";
    campo4: string = "";
    idFuncionarioAprovado: number;
    idFuncionarioInspecionado: number;
    status: number = 0;
    situacao: string = 'Em aberto';
    delete: boolean = false;
    dataHoraAlteracao: Date = new Date();

    qtdNA: number = 0;
    qtdA: number = 0;
    qtdR: number = 0;
    qtdRA: number = 0;
    qtdX: number = 0;

    inspecaoObraItens: ItemInspecao[] = [];
    ocorrencias: Ocorrencia[] = [];

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}