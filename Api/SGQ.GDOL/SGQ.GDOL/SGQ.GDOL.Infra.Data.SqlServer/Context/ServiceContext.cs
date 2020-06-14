using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using SGQ.GDOL.Domain;
using SGQ.GDOL.Domain.ComercialRoot.Entity;
using SGQ.GDOL.Domain.EntregaObraRoot.Entity;
using SGQ.GDOL.Domain.ObraRoot.Entity;
using SGQ.GDOL.Domain.RHRoot.Entity;
using SGQ.GDOL.Domain.UsuarioRoot.Entity;
using SGQ.GDOL.Infra.Data.SqlServer.Mappings;
using System.IO;

namespace SGQ.GDOL.Infra.Data.SqlServer.Context
{
    public class ServiceContext : DbContext
    {
        public DbSet<Usuario> Usuario { get; set; }
        public DbSet<Obra> Obra { get; set; }
        public DbSet<CentroCusto> CentroCusto { get; set; }
        public DbSet<Area> Area { get; set; }
        public DbSet<InspecaoObra> InspecaoObra { get; set; }
        public DbSet<Servico> Servico { get; set; }
        public DbSet<ItemChecklistServico> ItemChecklistServico { get; set; }
        public DbSet<ChecklistItem> ChecklistServico { get; set; }
        public DbSet<Funcionario> Funcionario { get; set; }
        public DbSet<InspecaoObraItem> InspecaoObraItem { get; set; }
        public DbSet<UsuarioCentroCusto> UsuarioCentroCusto { get; set; }
        public DbSet<Ocorrencia> Ocorrencia { get; set; }
        public DbSet<ChecklistObra> ChecklistEntrega { get; set; }
        public DbSet<ItemChecklistObra> ItemChecklistEntrega { get; set; }
        public DbSet<ClienteConstrutora> ClienteConstrutora { get; set; }
        public DbSet<EntregaObra> EntregaObra { get; set; }
        public DbSet<EntregaObraCliente> EntregaObraCliente { get; set; }
        public DbSet<EntregaObraClienteChecklist> EntregaObraClienteChecklist { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new UsuarioMap());
            modelBuilder.ApplyConfiguration(new ObraMap());
            modelBuilder.ApplyConfiguration(new CentroCustoMap());
            modelBuilder.ApplyConfiguration(new AreaMap());
            modelBuilder.ApplyConfiguration(new InspecaoObraMap());
            modelBuilder.ApplyConfiguration(new ObraChecklistServicoMap());
            modelBuilder.ApplyConfiguration(new ItemChecklistServicoMap());
            modelBuilder.ApplyConfiguration(new ChecklistServicoMap());
            modelBuilder.ApplyConfiguration(new FuncionarioMap());
            modelBuilder.ApplyConfiguration(new InspecaoObraItemMap());
            modelBuilder.ApplyConfiguration(new UsuarioCentroCustoMap());
            modelBuilder.ApplyConfiguration(new OcorrenciaMap());
            modelBuilder.ApplyConfiguration(new ChecklistEntregaMap());
            modelBuilder.ApplyConfiguration(new ItemChecklistEntregaMap());
            modelBuilder.ApplyConfiguration(new ClienteConstrutoraMap());
            modelBuilder.ApplyConfiguration(new EntregaObraMap());
            modelBuilder.ApplyConfiguration(new EntregaObraClienteMap());
            modelBuilder.ApplyConfiguration(new EntregaObraClienteChecklistMap());
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var config = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();

            if(CredenciaisBanco.Schema.Equals("GDOLSGQ_ARCO") || CredenciaisBanco.Schema.Equals("BPOSSAS_ARCO")
                || CredenciaisBanco.Schema.Equals("GDOLSGQ") || CredenciaisBanco.Schema.Equals("BPOSSAS_GDOLSISTEMAS")
                || CredenciaisBanco.Schema.Equals("GDOLSGQ_GS") || CredenciaisBanco.Schema.Equals("BPOSSAS_GS")
                || CredenciaisBanco.Schema.Equals("GDOLSGQ_CR") || CredenciaisBanco.Schema.Equals("BPOSSAS_CR")
                || CredenciaisBanco.Schema.Equals("GDOLSGQ_REALIZA") || CredenciaisBanco.Schema.Equals("BPOSSAS_REALIZA")
                || CredenciaisBanco.Schema.Equals("GDOLSGQ_EGREGORA") || CredenciaisBanco.Schema.Equals("BPOSSAS_EGREGORA")
                || CredenciaisBanco.Schema.Equals("GDOLSGQ_MOLDARE") || CredenciaisBanco.Schema.Equals("BPOSSAS_MOLDARE")
                || CredenciaisBanco.Schema.Equals("GDOLSGQ_PAINEIRA") || CredenciaisBanco.Schema.Equals("BPOSSAS_PAINEIRA")
                || CredenciaisBanco.Schema.Equals("GDOLSGQ_PRIMAZ") || CredenciaisBanco.Schema.Equals("BPOSSAS_PRIMAZ")
                || CredenciaisBanco.Schema.Equals("GDOLSGQ_RAGA") || CredenciaisBanco.Schema.Equals("BPOSSAS_RAGA")
                || CredenciaisBanco.Schema.Equals("GDOLSGQ_SUDOESTE") || CredenciaisBanco.Schema.Equals("BPOSSAS_SUDOESTE")
                || CredenciaisBanco.Schema.Equals("GDOLSGQ_UPTEC") || CredenciaisBanco.Schema.Equals("BPOSSAS_UPTEC")
                || CredenciaisBanco.Schema.Equals("GDOLSGQ_VILLARD") || CredenciaisBanco.Schema.Equals("BPOSSAS_VILLARD")
                || CredenciaisBanco.Schema.Equals("GDOLSGQ_ZBC") || CredenciaisBanco.Schema.Equals("BPOSSAS_ZBC")
                || CredenciaisBanco.Schema.Equals("GDOLSGQ_BNR") || CredenciaisBanco.Schema.Equals("BPOSSAS_BNR")
                || CredenciaisBanco.Schema.Equals("GDOLSGQ_CGD") || CredenciaisBanco.Schema.Equals("BPOSSAS_CGD")
                || CredenciaisBanco.Schema.Equals("GDOLSGQ_ATRIUM") || CredenciaisBanco.Schema.Equals("BPOSSAS_ATRIUM")
                || CredenciaisBanco.Schema.Equals("GDOLSGQ_MELHORLAR") || CredenciaisBanco.Schema.Equals("BPOSSAS_MELHORLAR"))
            {
                CredenciaisBanco.Usuario = "BPOSSAS_aplicativo";

                if (CredenciaisBanco.Schema.Equals("GDOLSGQ"))
                {
                    CredenciaisBanco.Schema = "BPOSSAS_GDOLSISTEMAS";
                }
                if (CredenciaisBanco.Schema.Equals("GDOLSGQ_ARCO"))
                {
                    CredenciaisBanco.Schema = "BPOSSAS_ARCO";
                }
                if (CredenciaisBanco.Schema.Equals("GDOLSGQ_GS"))
                {
                    CredenciaisBanco.Schema = "BPOSSAS_GS";
                }
                if (CredenciaisBanco.Schema.Equals("GDOLSGQ_CR"))
                {
                    CredenciaisBanco.Schema = "BPOSSAS_CR";
                }
                if (CredenciaisBanco.Schema.Equals("GDOLSGQ_REALIZA"))
                {
                    CredenciaisBanco.Schema = "BPOSSAS_REALIZA";
                }
                if (CredenciaisBanco.Schema.Equals("GDOLSGQ_EGREGORA"))
                {
                    CredenciaisBanco.Schema = "BPOSSAS_EGREGORA";
                }
                if (CredenciaisBanco.Schema.Equals("GDOLSGQ_MOLDARE"))
                {
                    CredenciaisBanco.Schema = "BPOSSAS_MOLDARE";
                }
                if (CredenciaisBanco.Schema.Equals("GDOLSGQ_PAINEIRA"))
                {
                    CredenciaisBanco.Schema = "BPOSSAS_PAINEIRA";
                }
                if (CredenciaisBanco.Schema.Equals("GDOLSGQ_PRIMAZ"))
                {
                    CredenciaisBanco.Schema = "BPOSSAS_PRIMAZ";
                }
                if (CredenciaisBanco.Schema.Equals("GDOLSGQ_RAGA"))
                {
                    CredenciaisBanco.Schema = "BPOSSAS_RAGA";
                }
                if (CredenciaisBanco.Schema.Equals("GDOLSGQ_SUDOESTE"))
                {
                    CredenciaisBanco.Schema = "BPOSSAS_SUDOESTE";
                }
                if (CredenciaisBanco.Schema.Equals("GDOLSGQ_UPTEC"))
                {
                    CredenciaisBanco.Schema = "BPOSSAS_UPTEC";
                }
                if (CredenciaisBanco.Schema.Equals("GDOLSGQ_VILLARD"))
                {
                    CredenciaisBanco.Schema = "BPOSSAS_VILLARD";
                }
                if (CredenciaisBanco.Schema.Equals("GDOLSGQ_ZBC"))
                {
                    CredenciaisBanco.Schema = "BPOSSAS_ZBC";
                }
                if (CredenciaisBanco.Schema.Equals("GDOLSGQ_BNR"))
                {
                    CredenciaisBanco.Schema = "BPOSSAS_BNR";
                }
                if (CredenciaisBanco.Schema.Equals("GDOLSGQ_CGD"))
                {
                    CredenciaisBanco.Schema = "BPOSSAS_CGD";
                }
                if (CredenciaisBanco.Schema.Equals("GDOLSGQ_ATRIUM"))
                {
                    CredenciaisBanco.Schema = "BPOSSAS_ATRIUM";
                }
                if (CredenciaisBanco.Schema.Equals("GDOLSGQ_MELHORLAR"))
                {
                    CredenciaisBanco.Schema = "BPOSSAS_MELHORLAR";
                }
                optionsBuilder.UseSqlServer(config.GetConnectionString("NewDefaultConnection").Replace("schema", CredenciaisBanco.Schema).Replace("usuario", CredenciaisBanco.Usuario).Replace("senha", CredenciaisBanco.Senha));
            }
            else
            {
                optionsBuilder.UseSqlServer(config.GetConnectionString("DefaultConnection").Replace("schema", CredenciaisBanco.Schema).Replace("usuario", CredenciaisBanco.Usuario).Replace("senha", CredenciaisBanco.Senha));
            }
        }
    }
}