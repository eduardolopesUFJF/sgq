export class Inspecao {
    
    id: number = 0;
    idGuidInspecao: string = '';
    idServico: number;
    dataInspecao: Date;
    dataEncerramento: Date;
    local: string = "";
    idFuncionarioAprovado: number;
    nomeFuncionarioAprovado: string = "";
    idFuncionarioInspecionado: number;
    nomeFuncionarioInspecionado: string = "";
    status: number = 0;
    situacao: string = 'Em aberto';
    delete: boolean = false;
    dataHoraAlteracao: Date = new Date();

    qtdNA: number = 0;
    qtdA: number = 0;
    qtdR: number = 0;
    qtdRA: number = 0;
    qtdX: number = 0;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}