using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SGQ.GDOL.Domain.EntregaObraRoot.Entity;

namespace SGQ.GDOL.Infra.Data.SqlServer.Mappings
{
    public class ClienteCentroCustoMap : IEntityTypeConfiguration<ClienteCentroCusto>
    {
        public void Configure(EntityTypeBuilder<ClienteCentroCusto> entity)
        {
            entity.HasKey(e => e.Id);

            entity.ToTable("CLIENTE_CENTRO_CUSTO", "dbo");

            entity.Property(e => e.Id).HasColumnName("ID_CLIENTE_CENTRO_CUSTO");

            entity.Property(e => e.IdCliente).HasColumnName("ID_CLIENTE");

            entity.Property(e => e.IdCentroCusto).HasColumnName("ID_CENTRO_CUSTO");

            entity.Property(e => e.Unidade)
                .HasColumnName("UNIDADE")
                .IsUnicode(false);

            entity.Property(e => e.Principal).HasColumnName("PRINCIPAL");

            entity.Property(e => e.Delete).HasColumnName("DELETE");

            entity.HasOne(d => d.CentroCusto)
                    .WithMany(p => p.ClienteCentrosCustos)
                    .HasForeignKey(d => d.IdCentroCusto);

            entity.HasOne(d => d.Cliente)
                    .WithMany(p => p.ClienteCentrosCustos)
                    .HasForeignKey(d => d.IdCliente);
        }
    }
}
