export class Ocorrencia {
    
    id: number = 0;
    idGuidOcorrencia: string = '';
    idInspecaoObra: number = 0;
    idGuidInspecao: string = '';
    idInspecaoObraItem: number;
    descricaoInspecaoObraItem: string = '';
    numeroInspecao: number;
    dataDescricao: string;
    dataTratativa: Date;
    descricao: string = '';
    tratativa: string = '';
    delete?: boolean = false;
    dataHoraInclusao: Date;
    dataHoraAlteracao: Date = new Date();
    
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}