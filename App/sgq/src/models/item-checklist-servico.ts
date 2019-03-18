export class ItemChecklistServico {
    
    id: number;
    idGuid: string;
    descricao: string = "";
    ordem: number = null;
    
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}