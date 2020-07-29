using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SGQ.GDOL.Domain.EntregaObraRoot.Entity;

namespace SGQ.GDOL.Infra.Data.SqlServer.Mappings
{
    public class EntregaObraClienteTermoMap : IEntityTypeConfiguration<EntregaObraClienteTermo>
    {
        public void Configure(EntityTypeBuilder<EntregaObraClienteTermo> entity)
        {
            entity.HasKey(e => e.Id);

            entity.ToTable("ENTREGA_OBRA_CLIENTE_TERMO", "dbo");

            entity.Property(e => e.Id)
                .HasColumnName("ID_ENTREGA_OBRA_CLIENTE_TERMO");

            entity.Property(e => e.IdEntregaObraCliente)
                .HasColumnName("ID_ENTREGA_OBRA_CLIENTE");

            entity.Property(e => e.IdTermo)
                .HasColumnName("ID_TERMO");

            entity.Property(e => e.Delete).HasColumnName("DELETE");

            entity.HasOne(d => d.Termo)
               .WithMany(p => p.EntregasObrasClientes)
               .HasForeignKey(d => d.IdTermo);

            entity.HasOne(d => d.EntregaObraCliente)
               .WithMany(p => p.Termos)
               .HasForeignKey(d => d.IdEntregaObraCliente);
        }
    }
}
