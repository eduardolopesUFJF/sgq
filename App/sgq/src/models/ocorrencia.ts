export class Ocorrencia {
    
    id: number = 0;
    idGuidOcorrencia: string = '';
    idInspecaoObra: number = 0;
    idGuidInspecao: string = '';
    dataDescricao: Date;
    dataTratativa: Date;
    descricao: string = '';
    tratativa: string = '';
    delete?: boolean;
    dataHoraInclusao: Date;
    dataHoraAlteracao: Date = new Date();
    
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}