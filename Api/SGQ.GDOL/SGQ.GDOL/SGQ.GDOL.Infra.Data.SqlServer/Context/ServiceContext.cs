using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using SGQ.GDOL.Domain;
using SGQ.GDOL.Domain.ComercialRoot.Entity;
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
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var config = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();

            if(CredenciaisBanco.Schema.Equals("GDOLSGQ_ARCOS") || CredenciaisBanco.Schema.Equals("BPOSSAS_ARCOS")
                || CredenciaisBanco.Schema.Equals("GDOLSGQ") || CredenciaisBanco.Schema.Equals("BPOSSAS_GDOL"))
            {
                CredenciaisBanco.Usuario = "BPOSSAS_aplicativo";

                if (CredenciaisBanco.Schema.Equals("GDOLSGQ"))
                {
                    CredenciaisBanco.Schema = "BPOSSAS_GDOL";
                }
                if (CredenciaisBanco.Schema.Equals("GDOLSGQ_ARCOS"))
                {
                    CredenciaisBanco.Schema = "BPOSSAS_ARCOS";
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