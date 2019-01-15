using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SGQ.GDOL.Domain.ObraRoot.Entity;

namespace SGQ.GDOL.Infra.Data.SqlServer.Mappings
{
    public class OcorrenciaMap : IEntityTypeConfiguration<Ocorrencia>
    {
        public void Configure(EntityTypeBuilder<Ocorrencia> entity)
        {
            entity.HasKey(e => e.Id);

            entity.ToTable("INFORMACOES_INSPECAO_OBRA", "dbo");

            entity.Property(e => e.Id).HasColumnName("ID_INFORMACOES_INSPECAO_OBRA");

            entity.Property(e => e.DataDescricao)
                .HasColumnName("DATA_DESCRICAO")
                .HasColumnType("datetime");

            entity.Property(e => e.DataHoraAlteracao)
                .HasColumnName("DATA_HORA_ALTERACAO")
                .HasColumnType("datetime");

            entity.Property(e => e.DataHoraInclusao)
                .HasColumnName("DATA_HORA_INCLUSAO")
                .HasColumnType("datetime");

            entity.Property(e => e.DataTratativa)
                .HasColumnName("DATA_TRATATIVA")
                .HasColumnType("datetime");

            entity.Property(e => e.Delete).HasColumnName("DELETE");

            entity.Property(e => e.Descricao)
                .HasColumnName("DESCRICAO")
                .IsUnicode(false);

            entity.Property(e => e.IdInspecaoObra).HasColumnName("ID_INSPECAO_OBRA");

            entity.Property(e => e.Tratativa)
                .HasColumnName("TRATATIVA")
                .IsUnicode(false);

            entity.HasOne(d => d.InspecaoObra)
                .WithMany(p => p.Ocorrencias)
                .HasForeignKey(d => d.IdInspecaoObra);
        }
    }
}
