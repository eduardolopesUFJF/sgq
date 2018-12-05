import { Area } from "./area";

export class Obra {
    
    id: number;
    descricaoCentroCusto: string;
    status: number;

    areas: Area[] = [];

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}