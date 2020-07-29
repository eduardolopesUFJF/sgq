using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SGQ.GDOL.Domain.EntregaObraRoot.Entity;

namespace SGQ.GDOL.Infra.Data.SqlServer.Mappings
{
    public class TermoMap : IEntityTypeConfiguration<Termo>
    {
        public void Configure(EntityTypeBuilder<Termo> entity)
        {
            entity.HasKey(e => e.Id);

            entity.ToTable("TERMO", "dbo");

            entity.Property(e => e.Id).HasColumnName("ID_TERMO");

            entity.Property(e => e.Nome)
                    .HasColumnName("NOME")
                    .IsUnicode(false);

            entity.Property(e => e.Delete).HasColumnName("DELETE");
        }
    }
}
