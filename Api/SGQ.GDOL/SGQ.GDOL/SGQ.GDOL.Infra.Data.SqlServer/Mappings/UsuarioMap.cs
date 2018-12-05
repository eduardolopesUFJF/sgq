using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SGQ.GDOL.Domain.UsuarioRoot.Entity;

namespace SGQ.GDOL.Infra.Data.SqlServer.Mappings
{
    public class UsuarioMap : IEntityTypeConfiguration<Usuario>
    {
        public void Configure(EntityTypeBuilder<Usuario> entity)
        {
            entity.HasKey(e => e.Id);

            entity.ToTable("USUARIO", "dbo");

            entity.Property(e => e.Id).HasColumnName("ID_USUARIO");

            entity.Property(e => e.Bloqueado).HasColumnName("BLOQUEADO");

            entity.Property(e => e.CentroCustoRestrito).HasColumnName("CENTRO_CUSTO_RESTRITO");

            entity.Property(e => e.DataBloqueio)
                .HasColumnName("DATA_BLOQUEIO")
                .HasColumnType("datetime");

            entity.Property(e => e.DataCadastro)
                .HasColumnName("DATA_CADASTRO")
                .HasColumnType("datetime");

            entity.Property(e => e.Delete).HasColumnName("DELETE");

            entity.Property(e => e.Email)
                .HasColumnName("EMAIL")
                .HasMaxLength(50)
                .IsUnicode(false);

            entity.Property(e => e.Login)
                .HasColumnName("LOGIN")
                .HasMaxLength(50)
                .IsUnicode(false);

            entity.Property(e => e.Matricula)
                .HasColumnName("MATRICULA")
                .HasMaxLength(50)
                .IsUnicode(false);

            entity.Property(e => e.Nome)
                .HasColumnName("NOME")
                .HasMaxLength(250)
                .IsUnicode(false);

            entity.Property(e => e.Senha)
                .HasColumnName("SENHA")
                .HasMaxLength(50)
                .IsUnicode(false);

            entity.Property(e => e.Telefone)
                .HasColumnName("TELEFONE")
                .HasMaxLength(50)
                .IsUnicode(false);

            entity.Property(e => e.Tipo).HasColumnName("TIPO");
        }
    }
}
