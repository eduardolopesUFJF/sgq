using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SGQ.GDOL.Domain.TreinamentoRoot.Entity;

namespace SGQ.GDOL.Infra.Data.SqlServer.Mappings
{
    class TreinamentoMap : IEntityTypeConfiguration<Treinamento>
    {
        public void Configure(EntityTypeBuilder<Treinamento> entity)
        {
            entity.HasKey(e => e.Id);

            entity.ToTable("TREINAMENTO", "dbo");

            entity.Property(e => e.Id).HasColumnName("ID_TREINAMENTO");

            entity.Property(e => e.Nome)
                    .HasColumnName("NOME")
                    .IsUnicode(false);

            entity.Property(e => e.Descricao)
                    .HasColumnName("DESCRICAO")
                    .IsUnicode(false);

            entity.Property(e => e.CargaHoraria)
                    .HasColumnName("CARGA_HORARIA");

            entity.Property(e => e.Ativo).HasColumnName("ATIVO");
        }
    }
}
