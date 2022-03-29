using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SGQ.GDOL.Domain.EntregaObraRoot.Entity;

namespace SGQ.GDOL.Infra.Data.SqlServer.Mappings
{
    class ChecklistEntregaMap : IEntityTypeConfiguration<ChecklistObra>
    {
        public void Configure(EntityTypeBuilder<ChecklistObra> entity)
        {
            entity.HasKey(e => e.Id);

            entity.ToTable("CHECKLIST_ENTREGA", "dbo");

            entity.Property(e => e.Id).HasColumnName("ID_CHECKLIST_ENTREGA");

            entity.Property(e => e.Codigo)
                .HasColumnName("CODIGO")
                .HasMaxLength(25)
                .IsUnicode(false);

            entity.Property(e => e.Descricao)
                .HasColumnName("DESCRICAO")
                .IsUnicode(false);

            entity.Property(e => e.Campo1)
                .HasColumnName("CAMPO_1")
                .IsUnicode(false);

            entity.Property(e => e.Campo2)
                .HasColumnName("CAMPO_2")
                .IsUnicode(false);

            entity.Property(e => e.Campo3)
                .HasColumnName("CAMPO_3")
                .IsUnicode(false);

            entity.Property(e => e.Campo4)
                .HasColumnName("CAMPO_4")
                .IsUnicode(false);

            entity.Property(e => e.Delete).HasColumnName("DELETE");
            entity.Property(e => e.Ativo).HasColumnName("ATIVO");
        }
    }
}
