export class ItemChecklistServico {
    
    id: number;
    descricao: string;
    ordem: number;
    
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}