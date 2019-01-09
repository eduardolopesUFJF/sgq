using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SGQ.GDOL.Domain.ObraRoot.Entity;

namespace SGQ.GDOL.Infra.Data.SqlServer.Mappings
{
    public class ObraMap : IEntityTypeConfiguration<Obra>
    {
        public void Configure(EntityTypeBuilder<Obra> entity)
        {
            entity.HasKey(e => e.Id);

            entity.ToTable("OBRA", "dbo");

            entity.Property(e => e.Id).HasColumnName("ID_OBRA");

            entity.Property(e => e.Delete).HasColumnName("DELETE");

            entity.Property(e => e.IdCentroCusto).HasColumnName("ID_CENTRO_CUSTO");

            entity.Property(e => e.Status).HasColumnName("STATUS");

            entity.HasOne(d => d.CentroCusto)
                    .WithMany(p => p.Obras)
                    .HasForeignKey(d => d.IdCentroCusto);
        }
    }
}
