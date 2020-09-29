using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SGQ.GDOL.Domain.TreinamentoRoot.Entity;

namespace SGQ.GDOL.Infra.Data.SqlServer.Mappings
{
    class TreinamentoFuncionarioMap : IEntityTypeConfiguration<TreinamentoFuncionario>
    {
        public void Configure(EntityTypeBuilder<TreinamentoFuncionario> entity)
        {
            entity.HasKey(e => e.Id);

            entity.ToTable("FUNCIONARIO_TREINAMENTO", "dbo");

            entity.Property(e => e.Id).HasColumnName("ID_FUNCIONARIO_TREINAMENTO");

            entity.Property(e => e.DataInicio)
                .HasColumnName("DATA_INICIO")
                .HasColumnType("datetime");

            entity.Property(e => e.CargaHoraria)
                .HasColumnName("CARGA_HORARIA");

            entity.Property(e => e.Instrutor)
                    .HasColumnName("INSTRUTOR")
                    .IsUnicode(false);

            entity.Property(e => e.Local)
                    .HasColumnName("LOCAL")
                    .IsUnicode(false);

            entity.Property(e => e.DiasPrevisaoAvaliacao)
                .HasColumnName("PREVI_AVALIACAO");

            entity.Property(e => e.DataPrevisaoAvaliacao)
                .HasColumnName("DATA_PREV_AVALIACAO")
                .HasColumnType("datetime");

            entity.Property(e => e.IdFuncionario)
                .HasColumnName("ID_FUNCIONARIO");

            entity.Property(e => e.IdTreinamento)
                .HasColumnName("ID_TREINAMENTO");

            entity.Property(e => e.Delete).HasColumnName("DELETE");

            entity.HasOne(d => d.Treinamento)
               .WithMany(p => p.TreinamentosFuncionarios)
               .HasForeignKey(d => d.IdTreinamento);

            entity.HasOne(d => d.Funcionario)
               .WithMany(p => p.TreinamentosFuncionarios)
               .HasForeignKey(d => d.IdFuncionario);
        }
    }
}
