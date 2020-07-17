using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Entity;

namespace SGQ.GDOL.Infra.Data.SqlServer.Mappings
{
    class AssistenciaTecnicaArquivoMap : IEntityTypeConfiguration<AssistenciaTecnicaArquivo>
    {
        public void Configure(EntityTypeBuilder<AssistenciaTecnicaArquivo> entity)
        {
            entity.HasKey(e => e.Id);

            entity.ToTable("ASSISTENCIA_ARQUIVO", "dbo");

            entity.Property(e => e.Id).HasColumnName("ID_ASSISTENCIA_ARQUIVO");

            entity.Property(e => e.IdAssistenciaTecnica)
                .HasColumnName("ID_ASSISTENCIA_TECNICA");

            entity.Property(e => e.Nome)
                .HasColumnName("NOME")
                .IsUnicode(false);

            entity.Property(e => e.Descricao)
                .HasColumnName("DESCRICAO")
                .IsUnicode(false);

            entity.Property(e => e.Delete).HasColumnName("DELETE");

            entity.HasOne(d => d.AssistenciaTecnica)
                    .WithMany(p => p.Arquivos)
                    .HasForeignKey(d => d.IdAssistenciaTecnica);


        }
    }
}
