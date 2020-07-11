using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Entity;

namespace SGQ.GDOL.Infra.Data.SqlServer.Mappings
{
    class AtendimentoMap : IEntityTypeConfiguration<Atendimento>
    {
        public void Configure(EntityTypeBuilder<Atendimento> entity)
        {
            entity.HasKey(e => e.Id);

            entity.ToTable("ASSISTENCIA_ATENDIMENTO", "dbo");

            entity.Property(e => e.Id).HasColumnName("ID_ASSISTENCIA_ATENDIMENTO");

            entity.Property(e => e.IdAssistenciaTecnica)
                .HasColumnName("ID_ASSISTENCIA_TECNICA");

            entity.Property(e => e.Tipo)
                .HasColumnName("TIPO");

            entity.Property(e => e.Descricao)
                .HasColumnName("DESCRICAO")
                .IsUnicode(false);

            entity.Property(e => e.DataInicio)
                .HasColumnName("DATA_INICIO")
                .HasColumnType("datetime");

            entity.Property(e => e.DataTermino)
                .HasColumnName("DATA_TERMINO")
                .HasColumnType("datetime");

            entity.Property(e => e.Observacoes)
                .HasColumnName("OBSERVACOES")
                .IsUnicode(false);

            entity.Property(e => e.IdFuncionario)
                .HasColumnName("ID_FUNCIONARIO");

            entity.Property(e => e.ResponsavelCliente)
                .HasColumnName("RESPONSAVEL_CLIENTE")
                .IsUnicode(false);

            entity.Property(e => e.Delete).HasColumnName("DELETE");

            entity.HasOne(d => d.Funcionario)
                    .WithMany(p => p.Atendimentos)
                    .HasForeignKey(d => d.IdFuncionario);

            entity.HasOne(d => d.AssistenciaTecnica)
                    .WithMany(p => p.Atendimentos)
                    .HasForeignKey(d => d.IdAssistenciaTecnica);
        }
    }
}