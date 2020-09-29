﻿using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using SGQ.GDOL.Domain;
using SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Entity;
using SGQ.GDOL.Domain.ComercialRoot.Entity;
using SGQ.GDOL.Domain.EntregaObraRoot.Entity;
using SGQ.GDOL.Domain.ObraRoot.Entity;
using SGQ.GDOL.Domain.RHRoot.Entity;
using SGQ.GDOL.Domain.TreinamentoRoot.Entity;
using SGQ.GDOL.Domain.UsuarioRoot.Entity;
using SGQ.GDOL.Infra.Data.SqlServer.Mappings;
using System.IO;

namespace SGQ.GDOL.Infra.Data.SqlServer.Context
{
    public class ServiceContext : DbContext
    {
        public DbSet<Usuario> Usuario { get; set; }
        public DbSet<Obra> Obra { get; set; }
        public DbSet<CentroCusto> CentroCusto { get; set; }
        public DbSet<Area> Area { get; set; }
        public DbSet<InspecaoObra> InspecaoObra { get; set; }
        public DbSet<Servico> Servico { get; set; }
        public DbSet<ItemChecklistServico> ItemChecklistServico { get; set; }
        public DbSet<ChecklistItem> ChecklistServico { get; set; }
        public DbSet<Funcionario> Funcionario { get; set; }
        public DbSet<InspecaoObraItem> InspecaoObraItem { get; set; }
        public DbSet<UsuarioCentroCusto> UsuarioCentroCusto { get; set; }
        public DbSet<Ocorrencia> Ocorrencia { get; set; }
        public DbSet<ChecklistObra> ChecklistEntrega { get; set; }
        public DbSet<ItemChecklistObra> ItemChecklistEntrega { get; set; }
        public DbSet<ClienteConstrutora> ClienteConstrutora { get; set; }
        public DbSet<EntregaObra> EntregaObra { get; set; }
        public DbSet<EntregaObraCliente> EntregaObraCliente { get; set; }
        public DbSet<EntregaObraClienteChecklist> EntregaObraClienteChecklist { get; set; }
        public DbSet<AssistenciaTecnica> AssistenciaTecnica { get; set; }
        public DbSet<CategoriaAssistencia> CategoriaAssistenciaTecnica { get; set; }
        public DbSet<Atendimento> Atendimento { get; set; }
        public DbSet<AssistenciaTecnicaArquivo> AssistenciaTecnicaArquivo { get; set; }
        public DbSet<EntregaObraClienteOcorrencia> EntregaObraClienteOcorrencia { get; set; }
        public DbSet<EntregaObraClienteArquivo> EntregaObraClienteArquivo { get; set; }
        public DbSet<Termo> Termo { get; set; }
        public DbSet<EntregaObraClienteTermo> EntregaObraClienteTermo { get; set; }
        public DbSet<ClienteCentroCusto> ClienteCentroCusto { get; set; }
        public DbSet<Treinamento> Treinamento { get; set; }
        public DbSet<TreinamentoFuncionario> TreinamentoFuncionario { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new UsuarioMap());
            modelBuilder.ApplyConfiguration(new ObraMap());
            modelBuilder.ApplyConfiguration(new CentroCustoMap());
            modelBuilder.ApplyConfiguration(new AreaMap());
            modelBuilder.ApplyConfiguration(new InspecaoObraMap());
            modelBuilder.ApplyConfiguration(new ObraChecklistServicoMap());
            modelBuilder.ApplyConfiguration(new ItemChecklistServicoMap());
            modelBuilder.ApplyConfiguration(new ChecklistServicoMap());
            modelBuilder.ApplyConfiguration(new FuncionarioMap());
            modelBuilder.ApplyConfiguration(new InspecaoObraItemMap());
            modelBuilder.ApplyConfiguration(new UsuarioCentroCustoMap());
            modelBuilder.ApplyConfiguration(new OcorrenciaMap());
            modelBuilder.ApplyConfiguration(new ChecklistEntregaMap());
            modelBuilder.ApplyConfiguration(new ItemChecklistEntregaMap());
            modelBuilder.ApplyConfiguration(new ClienteConstrutoraMap());
            modelBuilder.ApplyConfiguration(new EntregaObraMap());
            modelBuilder.ApplyConfiguration(new EntregaObraClienteMap());
            modelBuilder.ApplyConfiguration(new EntregaObraClienteChecklistMap());
            modelBuilder.ApplyConfiguration(new AssistenciaTecnicaMap());
            modelBuilder.ApplyConfiguration(new CategoriaAssistenciaTecnicaMap());
            modelBuilder.ApplyConfiguration(new AtendimentoMap());
            modelBuilder.ApplyConfiguration(new AssistenciaTecnicaArquivoMap());
            modelBuilder.ApplyConfiguration(new EntregaObraClienteOcorrenciaMap());
            modelBuilder.ApplyConfiguration(new EntregaObraClienteArquivoMap());
            modelBuilder.ApplyConfiguration(new EntregaObraClienteTermoMap());
            modelBuilder.ApplyConfiguration(new TermoMap());
            modelBuilder.ApplyConfiguration(new ClienteCentroCustoMap());
            modelBuilder.ApplyConfiguration(new TreinamentoMap());
            modelBuilder.ApplyConfiguration(new TreinamentoFuncionarioMap());
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var config = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();

            optionsBuilder.UseSqlServer(config.GetConnectionString("NewDefaultConnection").Replace("schema", CredenciaisBanco.Schema).Replace("usuario", CredenciaisBanco.Usuario).Replace("senha", CredenciaisBanco.Senha));
        }
    }
}