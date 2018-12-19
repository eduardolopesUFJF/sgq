import { ItemChecklistServico } from "./item-checklist-servico";

export class ItemChecklist {
    
    id: number;
    descricao: string;
    tipo: string;
    itensChecklistServico: ItemChecklistServico[] = [];
    
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}