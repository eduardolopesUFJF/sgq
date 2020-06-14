using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SGQ.GDOL.Domain.EntregaObraRoot.Entity;

namespace SGQ.GDOL.Infra.Data.SqlServer.Mappings
{
    class ClienteConstrutoraMap : IEntityTypeConfiguration<ClienteConstrutora>
    {
        public void Configure(EntityTypeBuilder<ClienteConstrutora> entity)
        {
            entity.HasKey(e => e.Id);

            entity.ToTable("CLIENTE", "dbo");

            entity.Property(e => e.Id).HasColumnName("ID_CLIENTE");

            entity.Property(e => e.IdCentroCusto).HasColumnName("ID_CENTRO_CUSTO");

            entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasColumnName("NOME_FANTASIA")
                    .HasMaxLength(250)
                    .IsUnicode(false);

            entity.Property(e => e.Delete).HasColumnName("DELETE");
        }
    }
}
