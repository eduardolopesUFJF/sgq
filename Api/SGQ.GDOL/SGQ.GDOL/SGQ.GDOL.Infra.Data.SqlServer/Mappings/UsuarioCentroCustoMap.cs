using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SGQ.GDOL.Domain.UsuarioRoot.Entity;

namespace SGQ.GDOL.Infra.Data.SqlServer.Mappings
{
    public class UsuarioCentroCustoMap : IEntityTypeConfiguration<UsuarioCentroCusto>
    {
        public void Configure(EntityTypeBuilder<UsuarioCentroCusto> entity)
        {
            entity.HasKey(e => e.Id);

            entity.ToTable("USUARIO_CENTRO_CUSTO", "dbo");

            entity.Property(e => e.Id).HasColumnName("ID_USUARIO_CENTRO_CUSTO");

            entity.Property(e => e.IdUsuario).HasColumnName("ID_USUARIO");

            entity.Property(e => e.IdCentroCusto).HasColumnName("ID_CENTRO_CUSTO");

            entity.Property(e => e.Delete).HasColumnName("DELETE");

            entity.HasOne(d => d.CentroCusto)
                    .WithMany(p => p.Usuarios)
                    .HasForeignKey(d => d.IdCentroCusto);

            entity.HasOne(d => d.Usuario)
                    .WithMany(p => p.CentrosCusto)
                    .HasForeignKey(d => d.IdUsuario);
        }
    }
}
