export class Servico {

    id: number = 0;
    idObra: number = 0;
    idChecklist: number = 0;
    idArea: number = 0;
    metaAprovacao: number;
    status: number = 0;
    delete: boolean = false;
    dataHoraInclusao: Date;
    dataHoraAlteracao: Date;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}