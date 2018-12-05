using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SGQ.GDOL.Domain.ComercialRoot.Entity;

namespace SGQ.GDOL.Infra.Data.SqlServer.Mappings
{
    public class CentroCustoMap : IEntityTypeConfiguration<CentroCusto>
    {
        public void Configure(EntityTypeBuilder<CentroCusto> entity)
        {
            entity.HasKey(e => e.Id);

            entity.ToTable("CENTRO_CUSTO", "dbo");

            entity.Property(e => e.Id).HasColumnName("ID_CENTRO_CUSTO");

            entity.Property(e => e.Codigo)
                .HasColumnName("CODIGO")
                .HasMaxLength(20)
                .IsUnicode(false);

            entity.Property(e => e.Delete).HasColumnName("DELETE");

            entity.Property(e => e.Descricao)
                .HasColumnName("DESCRICAO")
                .HasMaxLength(250)
                .IsUnicode(false);

            entity.Property(e => e.Status).HasColumnName("STATUS");
        }
    }
}
