using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SGQ.GDOL.Domain.ObraRoot.Entity;

namespace SGQ.GDOL.Infra.Data.SqlServer.Mappings
{
    class ObraChecklistServicoMap : IEntityTypeConfiguration<ObraChecklistServico>
    {
        public void Configure(EntityTypeBuilder<ObraChecklistServico> entity)
        {
            entity.HasKey(e => e.Id);

            entity.ToTable("OBRA_CHECKLIST_SERVICO", "dbo");

            entity.Property(e => e.Id).HasColumnName("ID_OBRA_CHECKLIST_SERVICO");

            entity.Property(e => e.DataHoraAlteracao)
                .HasColumnName("DATA_HORA_ALTERACAO")
                .HasColumnType("datetime");

            entity.Property(e => e.DataHoraInclusao)
                .HasColumnName("DATA_HORA_INCLUSAO")
                .HasColumnType("datetime");

            entity.Property(e => e.Delete).HasColumnName("DELETE");

            entity.Property(e => e.IdChecklistServico).HasColumnName("ID_CHECKLIST_SERVICO");

            entity.Property(e => e.IdObra).HasColumnName("ID_OBRA");

            entity.Property(e => e.IdObraAreaChecklist).HasColumnName("ID_OBRA_AREA_CHECKLIST");

            entity.Property(e => e.MetaAprovacao).HasColumnName("META_APROVACAO");

            entity.Property(e => e.Status).HasColumnName("STATUS");

            entity.HasOne(d => d.ChecklistServico)
                .WithMany(p => p.ObrasChecklistServico)
                .HasForeignKey(d => d.IdChecklistServico);

            entity.HasOne(d => d.Obra)
                .WithMany(p => p.ObraChecklistServicos)
                .HasForeignKey(d => d.IdObra);

            entity.HasOne(d => d.Area)
                .WithMany(p => p.ObraChecklistServico)
                .HasForeignKey(d => d.IdObraAreaChecklist);
        }
    }
}
