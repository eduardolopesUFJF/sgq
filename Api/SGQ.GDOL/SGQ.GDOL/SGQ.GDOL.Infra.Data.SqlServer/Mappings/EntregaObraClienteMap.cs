using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SGQ.GDOL.Domain.EntregaObraRoot.Entity;

namespace SGQ.GDOL.Infra.Data.SqlServer.Mappings
{
    class EntregaObraClienteMap : IEntityTypeConfiguration<EntregaObraCliente>
    {
        public void Configure(EntityTypeBuilder<EntregaObraCliente> entity)
        {
            entity.HasKey(e => e.Id);

            entity.ToTable("ENTREGA_OBRA_CLIENTE", "dbo");

            entity.Property(e => e.Id).HasColumnName("ID_ENTREGA_OBRA_CLIENTE");

            entity.Property(e => e.IdEntregaObra).HasColumnName("ID_ENTREGA_OBRA");

            entity.Property(e => e.IdClienteConstrutora).HasColumnName("ID_CLIENTE");

            entity.Property(e => e.IdClienteCentroCusto).HasColumnName("ID_CLIENTE_CENTRO_CUSTO");

            entity.Property(e => e.NomeCliente)
                .HasColumnName("DESC_CLIENTE")
                .HasMaxLength(500)
                .IsUnicode(false);

            entity.Property(e => e.ClienteCadastrado).HasColumnName("CLIENTE_CADASTRADO");

            entity.Property(e => e.LocalVistoria)
                .HasColumnName("LOCAL_VISTORIA")
                .HasMaxLength(500)
                .IsUnicode(false);

            entity.Property(e => e.DataVistoria)
                .HasColumnName("DATA_VISTORIA")
                .HasColumnType("datetime");

            entity.Property(e => e.TipoVistoria).HasColumnName("TIPO_VISTORIA");

            entity.Property(e => e.IdChecklistObra).HasColumnName("ID_CHECKLIST_ENTREGA");

            entity.Property(e => e.Status).HasColumnName("STATUS");

            entity.Property(e => e.IdFuncionarioInspecao).HasColumnName("ID_FUNCIONARIO_INSP");

            entity.Property(e => e.NomeFuncionarioInspecao)
                .HasColumnName("DESC_FUNCIONARIO_INSP")
                .HasMaxLength(500)
                .IsUnicode(false);

            entity.Property(e => e.FuncionarioInspecaoCadastrado).HasColumnName("FUNCIONARIO_INSP_CADASTRADO");

            entity.Property(e => e.IdFuncionarioReinspecao).HasColumnName("ID_FUNCIONARIO_REINSP");

            entity.Property(e => e.NomeFuncionarioReinspecao)
                .HasColumnName("DESC_FUNCIONARIO_REINSP")
                .HasMaxLength(500)
                .IsUnicode(false);

            entity.Property(e => e.FuncionarioReinspecaoCadastrado).HasColumnName("FUNCIONARIO_REINSP_CADASTRADO");

            entity.Property(e => e.DataInspecao)
                .HasColumnName("DATA_INSP")
                .HasColumnType("datetime");
            
            entity.Property(e => e.DataReinspecao)
                .HasColumnName("DATA_REINSP")
                .HasColumnType("datetime");

            entity.Property(e => e.ObservacaoCliente)
                .HasColumnName("OBSERVACAO_CLIENTE")
                .HasMaxLength(500)
                .IsUnicode(false);

            entity.Property(e => e.ObservacaoConstrutora)
                .HasColumnName("OBSERVACAO_CONSTRUTORA")
                .HasMaxLength(500)
                .IsUnicode(false);

            entity.Property(e => e.Delete).HasColumnName("DELETE");

            entity.Property(e => e.AssinaturaCliente)
                .HasColumnName("ASSINATURA_CLIENTE");

            entity.Property(e => e.AssinaturaConstrutora)
                .HasColumnName("ASSINATURA_CONSTRUTORA");

            entity.HasOne(d => d.EntregaObra)
                    .WithMany(p => p.EntregasObrasClientes)
                    .HasForeignKey(d => d.IdEntregaObra);

            entity.HasOne(d => d.ClienteConstrutora)
                    .WithMany(p => p.EntregasObrasClientes)
                    .HasForeignKey(d => d.IdClienteConstrutora);

            entity.HasOne(d => d.ClienteConstrutora)
                    .WithMany(p => p.EntregasObrasClientes)
                    .HasForeignKey(d => d.IdClienteConstrutora);

            entity.HasOne(d => d.ChecklistObra)
                    .WithMany(p => p.EntregasObrasClientes)
                    .HasForeignKey(d => d.IdChecklistObra);

            entity.HasOne(d => d.FuncionarioInspecao)
                    .WithMany(p => p.FuncionarioInspecao)
                    .HasForeignKey(d => d.IdFuncionarioInspecao);

            entity.HasOne(d => d.FuncionarioReinspecao)
                    .WithMany(p => p.FuncionarioReinspecao)
                    .HasForeignKey(d => d.IdFuncionarioReinspecao);

            entity.HasOne(d => d.ClienteCentroCusto)
                    .WithMany(p => p.EntregasObrasClientes)
                    .HasForeignKey(d => d.IdClienteCentroCusto);
        }
    }
}
