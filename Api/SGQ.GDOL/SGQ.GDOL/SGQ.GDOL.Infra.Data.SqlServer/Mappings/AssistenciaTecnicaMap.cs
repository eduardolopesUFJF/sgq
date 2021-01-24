using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Entity;

namespace SGQ.GDOL.Infra.Data.SqlServer.Mappings
{
    public class AssistenciaTecnicaMap : IEntityTypeConfiguration<AssistenciaTecnica>
    {
        public void Configure(EntityTypeBuilder<AssistenciaTecnica> entity)
        {
            entity.HasKey(e => e.Id);

            entity.ToTable("ASSISTENCIA_TECNICA", "dbo");

            entity.Property(e => e.Id).HasColumnName("ID_ASSISTENCIA_TECNICA");

            entity.Property(e => e.IdCategoriaAssistencia)
                .HasColumnName("ID_CATEGORIA_ASSISTENCIA");

            entity.Property(e => e.IdClienteConstrutora).HasColumnName("ID_CLIENTE");

            entity.Property(e => e.NomeCliente)
                .HasColumnName("DESC_CLIENTE")
                .HasMaxLength(500)
                .IsUnicode(false);

            entity.Property(e => e.ClienteCadastrado).HasColumnName("CLIENTE_CADASTRADO");

            entity.Property(e => e.Local)
                .HasColumnName("LOCAL")
                .HasMaxLength(500)
                .IsUnicode(false);

            entity.Property(e => e.IdCentroCusto)
                .HasColumnName("ID_CENTRO_CUSTO");

            entity.Property(e => e.DataAbertura)
                .HasColumnName("DATA")
                .HasColumnType("datetime");

            entity.Property(e => e.DataEncerramento)
                .HasColumnName("DATA_ENCERRAMENTO")
                .HasColumnType("datetime");

            entity.Property(e => e.Contato)
                .HasColumnName("CONTATO")
                .IsUnicode(false);

            entity.Property(e => e.Reclamacao)
                .HasColumnName("RECLAMACAO")
                .IsUnicode(false);

            entity.Property(e => e.Procedente)
                .HasColumnName("PRECEDENTE");

            entity.Property(e => e.DescricaoCategoriaAssistencia)
                .HasColumnName("CATEGORIA")
                .IsUnicode(false);

            entity.Property(e => e.AcaoCorretiva)
                .HasColumnName("ACAO_CORRETIRVA")
                .IsUnicode(false);

            entity.Property(e => e.Resolvido)
                .HasColumnName("RESOLVIDO");

            entity.Property(e => e.Observacao)
                .HasColumnName("OBSERVACAO")
                .IsUnicode(false);

            entity.Property(e => e.AssinaturaCliente)
                .HasColumnName("ASSINATURA_CLIENTE");

            entity.Property(e => e.AssinaturaConstrutora)
                .HasColumnName("ASSINATURA_CONSTRUTORA");

            entity.Property(e => e.Custo).HasColumnName("CUSTO");

            entity.Property(e => e.Prioridade).HasColumnName("PRIORIDADE");

            entity.Property(e => e.Delete).HasColumnName("DELETE");

            entity.HasOne(d => d.CentroCusto)
                    .WithMany(p => p.AssistenciasTecnicas)
                    .HasForeignKey(d => d.IdCentroCusto);

            entity.HasOne(d => d.CategoriaAssistencia)
                    .WithMany(p => p.AssistenciasTecnicas)
                    .HasForeignKey(d => d.IdCategoriaAssistencia);

            entity.HasOne(d => d.ClienteConstrutora)
                    .WithMany(p => p.AssistenciasTecnicas)
                    .HasForeignKey(d => d.IdClienteConstrutora);


        }
    }
}
