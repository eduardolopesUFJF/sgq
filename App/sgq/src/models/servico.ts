export class Servico {

    id: number = 0;
    descricao: string = '';
    idObra: number = 0;
    idChecklist: number = 0;
    idArea: number = 0;
    metaAprovacao: number = 90;
    status: number = 0;
    delete: boolean = false;
    dataHoraInclusao: Date = new Date();
    dataHoraAlteracao: Date = new Date();

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}