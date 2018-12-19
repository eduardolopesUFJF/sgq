export class ItemInspecao {
    
    id: number = 0;
    idInspecaoObra: number = 0;
    idGuidInspecao: string = '';
    idItemServico: number;
    ordem: string;
    descricao: string;
    inspecao1: string = '';
    inspecao2: string = '';
    delete: boolean = false;
    dataHoraInclusao: Date;
    dataHoraAlteracao: Date = new Date();
    
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}