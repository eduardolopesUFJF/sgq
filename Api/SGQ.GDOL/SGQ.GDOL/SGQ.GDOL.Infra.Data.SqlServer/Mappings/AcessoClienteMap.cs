using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SGQ.GDOL.Domain.ComercialRoot.Entity;

namespace SGQ.GDOL.Infra.Data.SqlServer.Mappings
{
    public class AcessoClienteMap : IEntityTypeConfiguration<AcessoCliente>
    {
        public void Configure(EntityTypeBuilder<AcessoCliente> entity)
        {
            entity.HasKey(e => e.Id);

            entity.ToTable("CONFIGURACAO_CLIENTES_ACESSOS", "dbo");

            entity.Property(e => e.Id).HasColumnName("ID_CONFIGURACAO_CLIENTES_ACESSOS");

            entity.Property(e => e.NomeCliente)
                .HasColumnName("NOME_CLIENTE")
                .IsUnicode(false);

            entity.Property(e => e.IdAplicativoAcessado)
                .HasColumnName("ID_APLICATIVO_ACESSADO");

            entity.Property(e => e.IdFuncionalidadeAcessada)
                .HasColumnName("ID_FUNCIONALIDADE_ACESSADA");

            entity.Property(e => e.DataAcesso)
                .HasColumnName("DATA_ACESSO")
                .HasColumnType("datetime");
        }
    }
}
