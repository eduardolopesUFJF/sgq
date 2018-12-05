export abstract class BaseUtils {

    inserirMascaraTelefone(telefone: string) {
        let telefonePronto: string = '(';
        telefonePronto += telefone.slice(0, 2) + ') ';
        telefonePronto += telefone.slice(2, 7) + '-';
        telefonePronto += telefone.slice(7);
        return telefonePronto;
    }

    limparMascaraTelefone(telefone: string) {
        let telefoneLimpo: string = '';
        telefoneLimpo = telefone.slice(1, 3);
        for (let i = 5; i < telefone.length; i++) {
            if (telefone.charAt(i) != '-')
                telefoneLimpo += telefone.charAt(i);
        }
        return telefoneLimpo;
    }

}