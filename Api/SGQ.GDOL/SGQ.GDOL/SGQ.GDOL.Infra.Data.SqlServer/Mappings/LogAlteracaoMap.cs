using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SGQ.GDOL.Domain.EntregaObraRoot.Entity;

namespace SGQ.GDOL.Infra.Data.SqlServer.Mappings
{
    public class LogAlteracaoMap : IEntityTypeConfiguration<LogAlteracao>
    {
        public void Configure(EntityTypeBuilder<LogAlteracao> entity)
        {
            entity.HasKey(e => e.Id);

            entity.ToTable("LOG_ALTERACAO", "dbo");

            entity.Property(e => e.Id).HasColumnName("ID_LOG_ALTERACAO");

            entity.Property(e => e.IdTabela).HasColumnName("ID_TABELA");

            entity.Property(e => e.IdUsuario).HasColumnName("ID_USUARIO");

            entity.Property(e => e.TipoTabela).HasColumnName("TIPO_TABELA");

            entity.Property(e => e.TipoAcao).HasColumnName("TIPO_ACAO");

            entity.Property(e => e.LoginUsuario)
                    .HasColumnName("LOGIN_USUARIO")
                    .IsUnicode(false);

            entity.Property(e => e.DataHora)
                .HasColumnName("DATA_HORA")
                .HasColumnType("datetime");
        }
    }
}
