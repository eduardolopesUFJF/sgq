export class UsuarioLogin {
    
    empresa: string = "";
    usuario: string = "";
    senha: string = "";

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}