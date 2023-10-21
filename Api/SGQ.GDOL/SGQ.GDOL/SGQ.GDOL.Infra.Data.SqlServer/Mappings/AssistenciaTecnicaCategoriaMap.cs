using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Entity;

namespace SGQ.GDOL.Infra.Data.SqlServer.Mappings
{
    public class AssistenciaTecnicaCategoriaMap : IEntityTypeConfiguration<AssistenciaTecnicaCategoria>
    {
        public void Configure(EntityTypeBuilder<AssistenciaTecnicaCategoria> entity)
        {
            entity.HasKey(e => e.Id);

            entity.ToTable("ASSISTENCIA_TECNICA_CATEGORIA", "dbo");

            entity.Property(e => e.Id).HasColumnName("ID_ASSISTENCIA_TECNICA_CATEGORIA");

            entity.Property(e => e.IdAssistenciaTecnica)
                .HasColumnName("ID_ASSISTENICIA_TECNICA");

            entity.Property(e => e.IdCategoriaAssistencia)
                .HasColumnName("ID_CATEGORIA_ASSISTENCIA");

            entity.Property(e => e.Delete).HasColumnName("DELETE");

            entity.HasOne(d => d.AssistenciaTecnica)
                    .WithMany(p => p.AssistenciaTecnicaCategorias)
                    .HasForeignKey(d => d.IdAssistenciaTecnica);

            entity.HasOne(d => d.CategoriaAssistencia)
                    .WithMany(p => p.AssistenciaTecnicaCategorias)
                    .HasForeignKey(d => d.IdCategoriaAssistencia);
        }
    }
}
