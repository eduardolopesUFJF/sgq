using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Entity;

namespace SGQ.GDOL.Infra.Data.SqlServer.Mappings
{
    public class PesquisaSatisfacaoClienteMap : IEntityTypeConfiguration<PesquisaSatisfacaoCliente>
    {
        public void Configure(EntityTypeBuilder<PesquisaSatisfacaoCliente> entity)
        {
            entity.HasKey(e => e.Id);

            entity.ToTable("PESQUISA_SATISFACAO_CLIENTE", "dbo");

            entity.Property(e => e.Id).HasColumnName("ID_PESQUISA_SATISFACAO_CLIENTE");

            entity.Property(e => e.IdPesquisaSatisfacao)
                .HasColumnName("ID_PESQUISA_SATISFACAO");

            entity.Property(e => e.IdAssistenciaTecnica)
                .HasColumnName("ID_ASSISTENCIA_TECNICA");

            entity.Property(e => e.Status)
                .HasColumnName("STATUS");

            entity.Property(e => e.Data)
                    .HasColumnName("DATA")
                .HasColumnType("datetime");

            entity.Property(e => e.TotalPontos)
                    .HasColumnName("TOTAL_PONTOS");

            entity.Property(e => e.Percentual)
                    .HasColumnName("PERC_PONTO");

            entity.Property(e => e.Delete).HasColumnName("DELETE");

            entity.HasOne(d => d.PesquisaSatisfacao)
                    .WithMany(p => p.PesquisasSatisfacaoCliente)
                    .HasForeignKey(d => d.IdPesquisaSatisfacao);

            entity.HasOne(d => d.AssistenciaTecnica)
                    .WithMany(p => p.PesquisasSatisfacaoCliente)
                    .HasForeignKey(d => d.IdAssistenciaTecnica);
        }
    }
}
