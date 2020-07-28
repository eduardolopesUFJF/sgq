using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SGQ.GDOL.Domain.EntregaObraRoot.Entity;

namespace SGQ.GDOL.Infra.Data.SqlServer.Mappings
{
    public class EntregaObraClienteOcorrenciaMap : IEntityTypeConfiguration<EntregaObraClienteOcorrencia>
    {
        public void Configure(EntityTypeBuilder<EntregaObraClienteOcorrencia> entity)
        {
            entity.HasKey(e => e.Id);

            entity.ToTable("INFORMACOES_ENTREGA_OBRA_CLIENTE", "dbo");

            entity.Property(e => e.Id).HasColumnName("ID_INFORMACOES_ENTREGA_OBRA_CLIENTE");

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

            entity.Property(e => e.Tratativa)
                .HasColumnName("TRATATIVA")
                .IsUnicode(false);

            entity.Property(e => e.IdEntregaObraCliente).HasColumnName("ID_ENTREGA_OBRA_CLIENTE");

            entity.HasOne(d => d.EntregaObraCliente)
                .WithMany(p => p.Ocorrencias)
                .HasForeignKey(d => d.IdEntregaObraCliente);
        }
    }
}
