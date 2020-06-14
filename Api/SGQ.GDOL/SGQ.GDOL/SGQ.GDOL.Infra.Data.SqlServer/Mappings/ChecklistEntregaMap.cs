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

            entity.Property(e => e.Delete).HasColumnName("DELETE");
            entity.Property(e => e.Ativo).HasColumnName("ATIVO");
        }
    }
}
