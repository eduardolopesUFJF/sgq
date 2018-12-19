import { Inspecao } from "./inspecao";
import { ItemChecklistServico } from "./item-checklist-servico";

export class Servico {

    id: number = 0;
    idGuidServico: string = '';
    descricao: string = '';
    tipo: string = '';
    idObra: number = 0;
    idChecklist: number = 0;
    idArea: number = 0;
    idAreaGuid: string = "";
    metaAprovacao: number = 90;
    status: number = 0;
    situacao: string = 'Em aberto';
    delete: boolean = false;
    dataHoraInclusao: Date = new Date();
    dataHoraAlteracao: Date = new Date();

    inspecoesObra: Inspecao[] = [];
    itensChecklistServico: ItemChecklistServico[] = [];

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}