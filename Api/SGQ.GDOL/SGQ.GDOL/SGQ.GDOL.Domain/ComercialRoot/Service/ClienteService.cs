using SGQ.GDOL.Domain.ComercialRoot.DTO;
using SGQ.GDOL.Domain.ComercialRoot.Service.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace SGQ.GDOL.Domain.ComercialRoot.Service
{
    public class ClienteService : IClienteService
    {
        public List<ClienteDTO> BuscarTodos()
        {
            List<string> nomeClientes = new List<string>();
            PopularClientes(nomeClientes);

            List<ClienteDTO> clientes = new List<ClienteDTO>();
            for (int i = 1; i <= nomeClientes.Count; i++)
            {
                clientes.Add(new ClienteDTO { Id = i, Title = nomeClientes.ElementAt(i-1) });
            }

            return clientes;
        }

        private static void PopularClientes(List<string> nomeClientes)
        {
            nomeClientes.Add("GDOL");
            nomeClientes.Add("ADDY");
            nomeClientes.Add("ARCO");
            nomeClientes.Add("ATRIUM");
            nomeClientes.Add("BAUEN");
            nomeClientes.Add("BNR");
            nomeClientes.Add("CGD");
            nomeClientes.Add("CRISTO REI");
            nomeClientes.Add("EGREGORA");
            nomeClientes.Add("GESTAO");
            nomeClientes.Add("GS");
            nomeClientes.Add("MELO BORGES");
            nomeClientes.Add("MML");
            nomeClientes.Add("NPA");
            nomeClientes.Add("PAINEIRA");
            nomeClientes.Add("PRIMAZ");
            nomeClientes.Add("RA");
            nomeClientes.Add("REALIZA");
            nomeClientes.Add("SF");
            nomeClientes.Add("SMART");
            nomeClientes.Add("SUDOESTE");
            nomeClientes.Add("UPTEC");
            nomeClientes.Add("VILLARD");
        }
    }
}
