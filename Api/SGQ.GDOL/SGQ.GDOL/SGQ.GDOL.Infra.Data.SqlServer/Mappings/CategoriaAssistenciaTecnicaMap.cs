using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Entity;

namespace SGQ.GDOL.Infra.Data.SqlServer.Mappings
{
    public class CategoriaAssistenciaTecnicaMap : IEntityTypeConfiguration<CategoriaAssistencia>
    {
        public void Configure(EntityTypeBuilder<CategoriaAssistencia> entity)
        {
            entity.HasKey(e => e.Id);

            entity.ToTable("CATEGORIA_ASSISTENCIA", "dbo");

            entity.Property(e => e.Id).HasColumnName("ID_CATEGORIA_ASSISTENCIA");

            entity.Property(e => e.Nome)
                .HasColumnName("NOME_CATEGORIA")
                .IsUnicode(false);

            entity.Property(e => e.Ativo).HasColumnName("ATIVO");
        }
    }
}
