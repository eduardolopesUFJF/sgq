using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SGQ.GDOL.Domain.ObraRoot.Entity;

namespace SGQ.GDOL.Infra.Data.SqlServer.Mappings
{
    class InspecaoObraMap : IEntityTypeConfiguration<InspecaoObra>
    {
        public void Configure(EntityTypeBuilder<InspecaoObra> entity)
        {
            entity.HasKey(e => e.Id);

            entity.ToTable("INSPECAO_OBRA", "dbo");

            entity.Property(e => e.Id).HasColumnName("ID_INSPECAO_OBRA");

            entity.Property(e => e.Campo1)
                .HasColumnName("CAMPO_1")
                .HasMaxLength(500)
                .IsUnicode(false);
           
            entity.Property(e => e.DataEncerramento)
                .HasColumnName("DATA_ENCERRAMENTO")
                .HasColumnType("datetime");

            entity.Property(e => e.DataHoraAlteracao)
                .HasColumnName("DATA_HORA_ALTERACAO")
                .HasColumnType("datetime");

            entity.Property(e => e.DataInspecao)
                .HasColumnName("DATA_INSPECAO")
                .HasColumnType("datetime");

            entity.Property(e => e.Delete).HasColumnName("DELETE");

            entity.Property(e => e.IdFuncionarioAprovado).HasColumnName("ID_FUNCIONARIO_APROVADO");

            entity.Property(e => e.IdFuncionarioInspecionado).HasColumnName("ID_FUNCIONARIO_INSPECIONADO");

            entity.Property(e => e.IdServico).HasColumnName("ID_OBRA_CHECKLIST_SERVICO");

            entity.Property(e => e.Status).HasColumnName("STATUS");

            entity.HasOne(d => d.ObraChecklistServico)
                .WithMany(p => p.InspecoesObra)
                .HasForeignKey(d => d.IdServico);

            entity.HasOne(d => d.FuncionarioAprovado)
                    .WithMany(p => p.FuncionariosAprovado)
                    .HasForeignKey(d => d.IdFuncionarioAprovado);

            entity.HasOne(d => d.FuncionarioInspecionado)
                .WithMany(p => p.FuncionariosInspecionado)
                .HasForeignKey(d => d.IdFuncionarioInspecionado);
        }
    }
}
