using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SGQ.GDOL.Domain.ComercialRoot.Entity;

namespace SGQ.GDOL.Infra.Data.SqlServer.Mappings
{
    public class ConfiguracaoClienteMap : IEntityTypeConfiguration<ConfiguracaoCliente>
    {
        public void Configure(EntityTypeBuilder<ConfiguracaoCliente> entity)
        {
            entity.HasKey(e => e.Id);

            entity.ToTable("CONFIGURACAO_CLIENTES", "dbo");

            entity.Property(e => e.Id).HasColumnName("ID_CONFIGURACAO_CLIENTES");

            entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasColumnName("NOME_CLIENTE")
                    .IsUnicode(false);

            entity.Property(e => e.AcessoChecklist).HasColumnName("ACESSO_CHECKLIST");

            entity.Property(e => e.AcessoServico).HasColumnName("ACESSO_SERVICO");

            entity.Property(e => e.AcessoServicoTreinamento).HasColumnName("ACESSO_SERVICO_TREINAMENTO");

            entity.Property(e => e.AcessoServicoEntregaObras).HasColumnName("ACESSO_SERVICO_ENTREGA_OBRAS");

            entity.Property(e => e.AcessoServicoAssistenciaTecnica).HasColumnName("ACESSO_SERVICO_ASSISTENCIA_TECNICA");
        }
    }
}
