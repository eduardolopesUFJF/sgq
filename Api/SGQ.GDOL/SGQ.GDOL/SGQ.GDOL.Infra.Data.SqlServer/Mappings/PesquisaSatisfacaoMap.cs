using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Entity;

namespace SGQ.GDOL.Infra.Data.SqlServer.Mappings
{
    public class PesquisaSatisfacaoMap : IEntityTypeConfiguration<PesquisaSatisfacao>
    {
        public void Configure(EntityTypeBuilder<PesquisaSatisfacao> entity)
        {
            entity.HasKey(e => e.Id);

            entity.ToTable("PESQUISA_SATISFACAO", "dbo");

            entity.Property(e => e.Id).HasColumnName("ID_PESQUISA_SATISFACAO");

            entity.Property(e => e.Codigo)
                    .HasColumnName("CODIGO")
                    .IsUnicode(false);

            entity.Property(e => e.Descricao)
                    .HasColumnName("DESCRICAO")
                    .IsUnicode(false);

            entity.Property(e => e.Delete).HasColumnName("DELETE");

            entity.Property(e => e.Ativo).HasColumnName("ATIVO");
        }
    }
}
