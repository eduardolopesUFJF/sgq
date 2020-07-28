using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SGQ.GDOL.Domain.EntregaObraRoot.Entity;

namespace SGQ.GDOL.Infra.Data.SqlServer.Mappings
{
    public class EntregaObraClienteArquivoMap : IEntityTypeConfiguration<EntregaObraClienteArquivo>
    {
        public void Configure(EntityTypeBuilder<EntregaObraClienteArquivo> entity)
        {
            entity.HasKey(e => e.Id);

            entity.ToTable("ENTREGA_OBRA_CLIENTE_ARQUIVO_AUX", "dbo");

            entity.Property(e => e.Id).HasColumnName("ID_ENTREGA_OBRA_CLIENTE_ARQUIVO_AUX");

            entity.Property(e => e.IdEntregaObraCliente)
                .HasColumnName("ID_ENTREGA_OBRA_CLIENTE");

            entity.Property(e => e.Nome)
                .HasColumnName("NOME")
                .IsUnicode(false);

            entity.Property(e => e.Descricao)
                .HasColumnName("DESCRICAO")
                .IsUnicode(false);

            entity.Property(e => e.Arquivo)
                .HasColumnName("ARQUIVO");

            entity.Property(e => e.Delete).HasColumnName("DELETE");

            entity.HasOne(d => d.EntregaObraCliente)
                    .WithMany(p => p.Arquivos)
                    .HasForeignKey(d => d.IdEntregaObraCliente);
        }
    }
}
