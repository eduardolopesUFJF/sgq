import { ItemChecklistServico } from "./item-checklist-servico";

export class ItemChecklist {
    
    id: number = 0;
    idGuid: string;
    descricao: string;
    codigo: string;
    tipo: string;
    campo1: string = "";
    campo2: string = "";
    campo3: string = "";
    campo4: string = "";
    itensChecklistServico: ItemChecklistServico[] = [];
    
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}