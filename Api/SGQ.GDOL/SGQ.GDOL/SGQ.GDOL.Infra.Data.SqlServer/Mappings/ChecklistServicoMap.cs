using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SGQ.GDOL.Domain.ObraRoot.Entity;

namespace SGQ.GDOL.Infra.Data.SqlServer.Mappings
{
    class ChecklistServicoMap : IEntityTypeConfiguration<ChecklistServico>
    {
        public void Configure(EntityTypeBuilder<ChecklistServico> entity)
        {
            entity.HasKey(e => e.Id);

            entity.ToTable("CHECKLIST_SERVICO", "dbo");

            entity.Property(e => e.Id).HasColumnName("ID_CHECKLIST_SERVICO");

            entity.Property(e => e.Ativo).HasColumnName("ATIVO");

            entity.Property(e => e.Codigo)
                .HasColumnName("CODIGO")
                .HasMaxLength(25)
                .IsUnicode(false);

            entity.Property(e => e.Delete).HasColumnName("DELETE");

            entity.Property(e => e.Descricao)
                .HasColumnName("DESCRICAO")
                .IsUnicode(false);
        }
    }
}
