using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SGQ.GDOL.Domain.ObraRoot.Entity;

namespace SGQ.GDOL.Infra.Data.SqlServer.Mappings
{
    public class RealizadoPorFuncionarioMap : IEntityTypeConfiguration<RealizadoPorFuncionario>
    {
        public void Configure(EntityTypeBuilder<RealizadoPorFuncionario> entity)
        {
            entity.HasKey(e => e.Id);

            entity.ToTable("EXECUTADO_POR_FUNCIONARIO", "dbo");

            entity.Property(e => e.Id).HasColumnName("ID_EXECUTADO_POR_FUNCIONARIO");

            entity.Property(e => e.IdExecutadoPor)
                .HasColumnName("ID_EXECUTADO_POR");

            entity.Property(e => e.IdFuncionario)
                .HasColumnName("ID_FUNCIONARIO");

            entity.Property(e => e.IdFuncionarioTerceirizado)
                .HasColumnName("ID_FUNCIONARIO_TERC");
            
            entity.Property(e => e.Delete).HasColumnName("DELETE");

            entity.HasOne(d => d.RealizadosPor)
                .WithMany(p => p.RealizadosPorFuncionarios)
                .HasForeignKey(d => d.IdExecutadoPor);

            entity.HasOne(d => d.Funcionario)
                .WithMany(p => p.RealizadosPorFuncionarios)
                .HasForeignKey(d => d.IdFuncionario);

            entity.HasOne(d => d.FuncionarioTerceirizado)
                .WithMany(p => p.RealizadosPorFuncionarios)
                .HasForeignKey(d => d.IdFuncionarioTerceirizado);
        }
    }
}
