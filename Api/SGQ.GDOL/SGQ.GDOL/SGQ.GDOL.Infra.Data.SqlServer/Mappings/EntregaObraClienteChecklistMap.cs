using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SGQ.GDOL.Domain.EntregaObraRoot.Entity;

namespace SGQ.GDOL.Infra.Data.SqlServer.Mappings
{
    public class EntregaObraClienteChecklistMap : IEntityTypeConfiguration<EntregaObraClienteChecklist>
    {
        public void Configure(EntityTypeBuilder<EntregaObraClienteChecklist> entity)
        {
            entity.HasKey(e => e.Id);

            entity.ToTable("VERIFICACAO_CHECKLIST", "dbo");

            entity.Property(e => e.Id).HasColumnName("ID_VERIFICACAO_CLIENTE");

            entity.Property(e => e.IdChecklistEntrega).HasColumnName("ID_CHECKLIST_ENTREGA");

            entity.Property(e => e.IdEntregaObraCliente).HasColumnName("ID_ENTREGA_OBRA_CLIENTE");

            entity.Property(e => e.IdItemChecklistEntrega).HasColumnName("ID_ITEM_CHECKLIST_ENTREGA");

            entity.Property(e => e.Inspecao1)
                .HasColumnName("INSPECAO_1")
                .HasMaxLength(1)
                .IsUnicode(false);

            entity.Property(e => e.Inspecao2)
                .HasColumnName("INSPECAO_2")
                .HasMaxLength(1)
                .IsUnicode(false);

            entity.Property(e => e.Descricao)
                .HasColumnName("DESCRICAO")
                .IsUnicode(false);

            entity.Property(e => e.Ordem)
                .HasColumnName("ORDEM")
                .IsUnicode(false);

            entity.Property(e => e.Delete).HasColumnName("DELETE");

            entity.HasOne(d => d.EntregaObraCliente)
                .WithMany(p => p.EntregasObrasClientesChecklists)
                .HasForeignKey(d => d.IdEntregaObraCliente);

            entity.HasOne(d => d.ItemChecklistObra)
                .WithMany(p => p.EntregasObrasClientesChecklists)
                .HasForeignKey(d => d.IdItemChecklistEntrega);
        }
    }
}
