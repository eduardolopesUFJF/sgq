using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SGQ.GDOL.Domain.ObraRoot.Entity;

namespace SGQ.GDOL.Infra.Data.SqlServer.Mappings
{
    public class RealizadoPorMap : IEntityTypeConfiguration<RealizadoPor>
    {
        public void Configure(EntityTypeBuilder<RealizadoPor> entity)
        {
            entity.HasKey(e => e.Id);

            entity.ToTable("EXECUTADO_POR", "dbo");

            entity.Property(e => e.Id).HasColumnName("ID_EXECUTADO_POR");

            entity.Property(e => e.IdInspecao)
                .HasColumnName("ID_INSPECAO_OBRA");

            entity.Property(e => e.TipoFuncionario)
                .HasColumnName("REALIZADO_POR");

            entity.Property(e => e.IdFornecedor)
                .HasColumnName("ID_FORNECEDOR");

            entity.Property(e => e.IdCentroCusto)
                .HasColumnName("ID_CENTRO_CUSTO");

            entity.Property(e => e.Delete).HasColumnName("DELETE");

            entity.HasOne(d => d.InspecaoObra)
                .WithMany(p => p.RealizadosPor)
                .HasForeignKey(d => d.IdInspecao);

            entity.HasOne(d => d.Fornecedor)
                .WithMany(p => p.RealizadosPor)
                .HasForeignKey(d => d.IdFornecedor);

            entity.HasOne(d => d.CentroCusto)
                .WithMany(p => p.RealizadosPor)
                .HasForeignKey(d => d.IdCentroCusto);
        }
    }
}
