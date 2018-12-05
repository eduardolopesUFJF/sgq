import { ItemChecklist } from "./item-checklist";

export class Area {
    
    id: number = 0;
    descricao: string;
    status: number = 0;
    situacao: string = 'Em aberto';
    delete: boolean;

    itensChecklist: ItemChecklist[] = [];

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}