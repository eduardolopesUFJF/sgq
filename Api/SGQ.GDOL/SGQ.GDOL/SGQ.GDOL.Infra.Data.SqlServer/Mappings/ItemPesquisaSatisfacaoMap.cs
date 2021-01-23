using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Entity;

namespace SGQ.GDOL.Infra.Data.SqlServer.Mappings
{
    public class ItemPesquisaSatisfacaoMap : IEntityTypeConfiguration<ItemPesquisaSatisfacao>
    {
        public void Configure(EntityTypeBuilder<ItemPesquisaSatisfacao> entity)
        {
            entity.HasKey(e => e.Id);

            entity.ToTable("ITEM_PESQUISA_SATISFACAO", "dbo");

            entity.Property(e => e.Id).HasColumnName("ID_ITEM_PESQUISA_SATISFACAO");

            entity.Property(e => e.IdPesquisaSatisfacao)
                .HasColumnName("ID_PESQUISA_SATISFACAO");

            entity.Property(e => e.Ordem)
                    .HasColumnName("ORDEM")
                    .IsUnicode(false);

            entity.Property(e => e.Descricao)
                    .HasColumnName("DESCRICAO")
                    .IsUnicode(false);

            entity.Property(e => e.Delete).HasColumnName("DELETE");

            entity.HasOne(d => d.PesquisaSatisfacao)
                    .WithMany(p => p.ItensPesquisaSatisfacao)
                    .HasForeignKey(d => d.IdPesquisaSatisfacao);
        }
    }
}
