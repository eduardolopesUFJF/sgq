export class PermissaoExclusao {
    
    possuiBloqueioExclusaoArea: boolean = false;
    possuiBloqueioExclusaoChecklist: boolean = false;
    
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}