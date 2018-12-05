using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SGQ.GDOL.Domain.ObraRoot.Entity;

namespace SGQ.GDOL.Infra.Data.SqlServer.Mappings
{
    class AreaMap : IEntityTypeConfiguration<Area>
    {
        public void Configure(EntityTypeBuilder<Area> entity)
        {
            entity.HasKey(e => e.Id);

            entity.ToTable("OBRA_AREA_CHECKLIST", "dbo");

            entity.Property(e => e.Id).HasColumnName("ID_OBRA_AREA_CHECKLIST");

            entity.Property(e => e.Delete).HasColumnName("DELETE");

            entity.Property(e => e.Descricao)
                .HasColumnName("DESCRICAO")
                .HasMaxLength(250)
                .IsUnicode(false);

            entity.Property(e => e.IdObra).HasColumnName("ID_OBRA");

            entity.Property(e => e.Status).HasColumnName("STATUS");

            entity.HasOne(d => d.Obra)
                    .WithMany(p => p.Areas)
                    .HasForeignKey(d => d.IdObra);
        }
    }
}
