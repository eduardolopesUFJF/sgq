using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SGQ.GDOL.Domain.ObraRoot.Entity;

namespace SGQ.GDOL.Infra.Data.SqlServer.Mappings
{
    class ItemChecklistServicoMap : IEntityTypeConfiguration<ItemChecklistServico>
    {
        public void Configure(EntityTypeBuilder<ItemChecklistServico> entity)
        {
            entity.HasKey(e => e.Id);

            entity.ToTable("ITEM_CHECKLIST_SERVICO", "dbo");

            entity.Property(e => e.Id).HasColumnName("ID_ITEM_CHECKLIST_SERVICO");

            entity.Property(e => e.DataHoraAlteracao)
                .HasColumnName("DATA_HORA_ALTERACAO")
                .HasColumnType("datetime");

            entity.Property(e => e.DataHoraInclusao)
                .HasColumnName("DATA_HORA_INCLUSAO")
                .HasColumnType("datetime");

            entity.Property(e => e.Delete).HasColumnName("DELETE");

            entity.Property(e => e.Descricao)
                .HasColumnName("DESCRICAO")
                .HasMaxLength(500)
                .IsUnicode(false);

            entity.Property(e => e.IdServico).HasColumnName("ID_CHECKLIST_SERVICO");

            entity.Property(e => e.Ordem)
                .HasColumnName("ORDEM")
                .HasMaxLength(10)
                .IsUnicode(false);

            entity.HasOne(d => d.ChecklistServico)
                .WithMany(p => p.ItensChecklistServico)
                .HasForeignKey(d => d.IdServico);
        }
    }
}
