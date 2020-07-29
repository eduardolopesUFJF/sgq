using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SGQ.GDOL.Domain.EntregaObraRoot.Entity;

namespace SGQ.GDOL.Infra.Data.SqlServer.Mappings
{
    class ItemChecklistEntregaMap : IEntityTypeConfiguration<ItemChecklistObra>
    {
        public void Configure(EntityTypeBuilder<ItemChecklistObra> entity)
        {
            entity.HasKey(e => e.Id);

            entity.ToTable("ITEM_CHECKLIST_ENTREGA", "dbo");

            entity.Property(e => e.Id).HasColumnName("ID_ITEM_CHECKLIST_ENTREGA");
            
            entity.Property(e => e.Ordem)
               .HasColumnName("ORDEM")
               .HasMaxLength(10)
               .IsUnicode(false);

            entity.Property(e => e.Descricao)
                .HasColumnName("DESCRICAO")
                .HasMaxLength(500)
                .IsUnicode(false);

            entity.Property(e => e.Delete).HasColumnName("DELETE");

            entity.Property(e => e.IdChecklistEntrega).HasColumnName("ID_CHECKLIST_ENTREGA");

            entity.HasOne(d => d.ChecklistEntrega)
                .WithMany(p => p.ItensChecklistEntrega)
                .HasForeignKey(d => d.IdChecklistEntrega);
        }
    }
}
