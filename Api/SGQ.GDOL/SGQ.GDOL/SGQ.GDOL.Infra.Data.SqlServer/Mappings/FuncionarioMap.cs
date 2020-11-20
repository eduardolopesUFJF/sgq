using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SGQ.GDOL.Domain.RHRoot.Entity;

namespace SGQ.GDOL.Infra.Data.SqlServer.Mappings
{
    public class FuncionarioMap : IEntityTypeConfiguration<Funcionario>
    {
        public void Configure(EntityTypeBuilder<Funcionario> entity)
        {
            entity.HasKey(e => e.Id);

            entity.ToTable("FUNCIONARIO", "dbo");

            entity.Property(e => e.Id).HasColumnName("ID_FUNCIONARIO");

            entity.Property(e => e.IdCentroCusto).HasColumnName("ID_CENTRO_CUSTO");

            entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasColumnName("NOME")
                    .HasMaxLength(250)
                    .IsUnicode(false);

            entity.Property(e => e.Delete).HasColumnName("DELETE");

            entity.Property(e => e.Demitido).HasColumnName("SITUACAO");
        }
    }
}
