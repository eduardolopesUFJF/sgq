using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SGQ.GDOL.Domain.TreinamentoRoot.Entity;

namespace SGQ.GDOL.Infra.Data.SqlServer.Mappings
{
    class TreinamentoFuncionarioTerceirizadoMap : IEntityTypeConfiguration<TreinamentoFuncionarioTerceirizado>
    {
        public void Configure(EntityTypeBuilder<TreinamentoFuncionarioTerceirizado> entity)
        {
            entity.HasKey(e => e.Id);

            entity.ToTable("FUNCIONARIO_TERC_TREINAMENTO", "dbo");

            entity.Property(e => e.Id).HasColumnName("ID_FUNCIONARIO_TERC_TREINAMENTO");

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

            entity.Property(e => e.IdFuncionarioTerceirizado)
                .HasColumnName("ID_FUNCIONARIO_TERC");

            entity.Property(e => e.IdTreinamento)
                .HasColumnName("ID_TREINAMENTO");

            entity.Property(e => e.Delete).HasColumnName("DELETE");

            entity.Property(e => e.Assinatura)
                .HasColumnName("ASSINATURA_FUNCIONARIO");

            entity.HasOne(d => d.Treinamento)
               .WithMany(p => p.TreinamentosFuncionariosTerceirizados)
               .HasForeignKey(d => d.IdTreinamento);

            entity.HasOne(d => d.FuncionarioTerceirizado)
               .WithMany(p => p.TreinamentosFuncionariosTerceirizados)
               .HasForeignKey(d => d.IdFuncionarioTerceirizado);
        }
    }
}
