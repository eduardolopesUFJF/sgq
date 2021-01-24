using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Entity;

namespace SGQ.GDOL.Infra.Data.SqlServer.Mappings
{
    public class ItemPesquisaSatisfacaoClienteMap : IEntityTypeConfiguration<ItemPesquisaSatisfacaoCliente>
    {
        public void Configure(EntityTypeBuilder<ItemPesquisaSatisfacaoCliente> entity)
        {
            entity.HasKey(e => e.Id);

            entity.ToTable("ITEM_PESQUISA_CLIENTE", "dbo");

            entity.Property(e => e.Id).HasColumnName("ID_ITEM_PESQUISA_CLIENTE");

            entity.Property(e => e.IdPesquisaSatisfacao)
                .HasColumnName("ID_PESQUISA_SATISFACAO");

            entity.Property(e => e.IdItemPesquisaSatisfacao)
                .HasColumnName("ID_ITEM_PESQUISA_SATISFACAO");

            entity.Property(e => e.IdPesquisaSatisfacaoCliente)
                 .HasColumnName("ID_PESQUISA_SATISFACAO_CLIENTE");

            entity.Property(e => e.Nota)
                    .HasColumnName("NOTA");

            entity.Property(e => e.Delete).HasColumnName("DELETE");

            entity.HasOne(d => d.PesquisaSatisfacao)
                    .WithMany(p => p.ItensPesquisaSatisfacaoCliente)
                    .HasForeignKey(d => d.IdPesquisaSatisfacao);

            entity.HasOne(d => d.ItemPesquisaSatisfacao)
                    .WithMany(p => p.ItensPesquisaSatisfacaoCliente)
                    .HasForeignKey(d => d.IdItemPesquisaSatisfacao);

            entity.HasOne(d => d.PesquisaSatisfacaoCliente)
                    .WithMany(p => p.ItensPesquisaSatisfacaoCliente)
                    .HasForeignKey(d => d.IdPesquisaSatisfacaoCliente);
        }
    }
}
