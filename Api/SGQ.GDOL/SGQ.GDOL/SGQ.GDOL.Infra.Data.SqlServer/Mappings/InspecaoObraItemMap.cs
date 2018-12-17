using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SGQ.GDOL.Domain.ObraRoot.Entity;

namespace SGQ.GDOL.Infra.Data.SqlServer.Mappings
{
    public class InspecaoObraItemMap : IEntityTypeConfiguration<InspecaoObraItem>
    {
        public void Configure(EntityTypeBuilder<InspecaoObraItem> entity)
        {
            entity.HasKey(e => e.Id);

            entity.ToTable("INSPECAO_OBRA_ITENS", "dbo");

            entity.Property(e => e.Id).HasColumnName("ID_INSPECAO_OBRA_ITENS");

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

            entity.Property(e => e.IdInspecaoObra).HasColumnName("ID_INSPECAO_OBRA");

            entity.Property(e => e.IdItemServico).HasColumnName("ID_ITEM_CHECKLIST_SERVICO");

            entity.Property(e => e.Inspecao1)
                .HasColumnName("INSPECAO_1")
                .HasMaxLength(1)
                .IsUnicode(false);

            entity.Property(e => e.Inspecao2)
                .HasColumnName("INSPECAO_2")
                .HasMaxLength(1)
                .IsUnicode(false);

            entity.Property(e => e.Ordem)
                .HasColumnName("ORDEM")
                .HasMaxLength(10)
                .IsUnicode(false);

            entity.HasOne(d => d.InspecaoObra)
                .WithMany(p => p.InspecaoObraItens)
                .HasForeignKey(d => d.IdInspecaoObra);
        }
    }
}
