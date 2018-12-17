export class ItemChecklist {
    
    id: number;
    descricao: string;
    tipo: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}