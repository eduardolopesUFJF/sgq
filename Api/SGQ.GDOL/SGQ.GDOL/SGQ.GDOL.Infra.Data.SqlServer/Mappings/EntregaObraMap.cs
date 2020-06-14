using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SGQ.GDOL.Domain.EntregaObraRoot.Entity;

namespace SGQ.GDOL.Infra.Data.SqlServer.Mappings
{
    public class EntregaObraMap : IEntityTypeConfiguration<EntregaObra>
    {
        public void Configure(EntityTypeBuilder<EntregaObra> entity)
        {
            entity.HasKey(e => e.Id);

            entity.ToTable("ENTREGA_OBRA", "dbo");

            entity.Property(e => e.Id).HasColumnName("ID_ENTREGA_OBRA");

            entity.Property(e => e.Delete).HasColumnName("DELETE");

            entity.Property(e => e.IdCentroCusto).HasColumnName("ID_CENTRO_CUSTO");

            entity.Property(e => e.Status).HasColumnName("STATUS");

            entity.HasOne(d => d.CentroCusto)
                    .WithMany(p => p.EntregasObras)
                    .HasForeignKey(d => d.IdCentroCusto);
        }
    }
}
