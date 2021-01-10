using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SGQ.GDOL.Domain.RHRoot.Entity;

namespace SGQ.GDOL.Infra.Data.SqlServer.Mappings
{
    public class FornecedorMap : IEntityTypeConfiguration<Fornecedor>
    {
        public void Configure(EntityTypeBuilder<Fornecedor> entity)
        {
            entity.HasKey(e => e.Id);

            entity.ToTable("FORNECEDOR", "dbo");

            entity.Property(e => e.Id).HasColumnName("ID_FORNECEDOR");

            entity.Property(e => e.Nome)
                    .HasColumnName("NOME_FANTASIA")
                    .IsUnicode(false);

            entity.Property(e => e.Delete).HasColumnName("DELETE");

            entity.Property(e => e.Ativo).HasColumnName("ATIVO");
        }
    }
}
