import { Area } from "./area";

export class Obra {
    
    id: number;
    idCentroCusto: number;
    descricaoCentroCusto: string;
    descricao: string;
    status: number;

    areas: Area[] = [];

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}