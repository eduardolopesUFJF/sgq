using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SGQ.GDOL.Domain.RHRoot.Entity;

namespace SGQ.GDOL.Infra.Data.SqlServer.Mappings
{
    public class FuncionarioTerceirizadoMap : IEntityTypeConfiguration<FuncionarioTerceirizado>
    {
        public void Configure(EntityTypeBuilder<FuncionarioTerceirizado> entity)
        {
            entity.HasKey(e => e.Id);

            entity.ToTable("FUNCIONARIO_TERC", "dbo");

            entity.Property(e => e.Id).HasColumnName("ID_FUNCIONARIO_TERC");

            entity.Property(e => e.IdFornecedor).HasColumnName("ID_FORNECEDOR");

            entity.Property(e => e.Nome)
                    .HasColumnName("NOME")
                    .IsUnicode(false);

            entity.Property(e => e.Delete).HasColumnName("DELETE");

            entity.Property(e => e.Ativo).HasColumnName("ATIVO");

            entity.HasOne(d => d.Fornecedor)
                .WithMany(p => p.FuncionariosTerceirizados)
                .HasForeignKey(d => d.IdFornecedor);
        }
    }
}
