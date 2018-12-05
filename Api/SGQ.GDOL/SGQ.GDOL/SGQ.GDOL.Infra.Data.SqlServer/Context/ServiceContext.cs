using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using SGQ.GDOL.Domain;
using SGQ.GDOL.Domain.ComercialRoot.Entity;
using SGQ.GDOL.Domain.ObraRoot.Entity;
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
        public DbSet<ObraChecklistServico> ObraChecklistServico { get; set; }
        public DbSet<ItemChecklistServico> ItemChecklistServico { get; set; }
        public DbSet<ChecklistServico> ChecklistServico { get; set; }

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
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var config = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();

            optionsBuilder.UseSqlServer(config.GetConnectionString("DefaultConnection").Replace("schema", CredenciaisBanco.Schema).Replace("usuario", CredenciaisBanco.Usuario).Replace("senha", CredenciaisBanco.Senha));
        }
    }
}