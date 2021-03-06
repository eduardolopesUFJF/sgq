USE [Residir]
GO
/****** Object:  User [residir]    Script Date: 02/10/2018 10:55:31 ******/
CREATE USER [residir] FOR LOGIN [residir] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  Table [dbo].[Especialidade]    Script Date: 02/10/2018 10:55:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Especialidade](
	[nome] [varchar](70) NOT NULL,
	[duracao] [int] NOT NULL,
	[ID] [int] IDENTITY(1,1) NOT NULL,
 CONSTRAINT [PK_Especialidade] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Nota]    Script Date: 02/10/2018 10:55:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Nota](
	[supervisorId] [int] NOT NULL,
	[residenteId] [int] NOT NULL,
	[ano] [int] NOT NULL,
	[periodo] [int] NOT NULL,
	[disciplina] [varchar](25) NOT NULL,
	[id] [int] IDENTITY(1,1) NOT NULL,
	[dtLancamento] [datetime] NOT NULL,
 CONSTRAINT [PK_Nota] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[NotaValor]    Script Date: 02/10/2018 10:55:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[NotaValor](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[valor] [decimal](5, 2) NOT NULL,
	[peso] [int] NOT NULL,
	[notaId] [int] NOT NULL,
 CONSTRAINT [PK_NotaValor] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Usuario]    Script Date: 02/10/2018 10:55:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Usuario](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[perfilId] [int] NOT NULL,
	[nome] [varchar](100) NOT NULL,
	[funcao] [varchar](30) NULL,
	[telefone_principal] [varchar](20) NOT NULL,
	[telefone_alternativo] [varchar](20) NULL,
	[email_principal] [varchar](150) NOT NULL,
	[email_alternativo] [varchar](150) NULL,
	[formacao] [varchar](50) NOT NULL,
	[formacao_instituicao] [varchar](60) NULL,
	[formacao_inicio] [int] NULL,
	[formacao_fim] [int] NULL,
	[crm_num] [varchar](20) NULL,
	[crm_uf] [varchar](2) NULL,
	[nascimento] [datetime] NOT NULL,
	[cpf] [varchar](15) NOT NULL,
	[identidade] [varchar](20) NOT NULL,
	[identidade_orgao_expeditor] [varchar](10) NULL,
	[identidade_dt_expedicao] [datetime] NULL,
	[identidade_uf] [varchar](2) NULL,
	[endereco_logradouro] [varchar](150) NOT NULL,
	[endereco_numero] [varchar](10) NOT NULL,
	[endereco_complemento] [varchar](50) NULL,
	[endereco_bairro] [varchar](40) NOT NULL,
	[endereco_cep] [varchar](11) NOT NULL,
	[endereco_cidade] [varchar](30) NOT NULL,
	[endereco_uf] [varchar](2) NOT NULL,
	[residencia_inicio] [datetime] NULL,
	[residencia_fim] [datetime] NULL,
	[sexo] [varchar](10) NULL,
	[raca] [varchar](20) NULL,
	[nacionalidade] [varchar](10) NULL,
	[nacionalidade_outro] [varchar](30) NULL,
	[naturalidade] [varchar](50) NULL,
	[naturalidade_estado] [varchar](2) NULL,
	[naturalidade_pais] [varchar](40) NULL,
	[estado_civil] [varchar](20) NULL,
	[pis_pasep] [varchar](20) NULL,
	[titulo_eleitoral] [varchar](30) NULL,
	[titulo_eleitoral_zona] [varchar](8) NULL,
	[titulo_eleitoral_secao] [varchar](8) NULL,
	[titulo_eleitoral_dt_expedicao] [datetime] NULL,
	[titulo_eleitoral_uf] [varchar](2) NULL,
	[nome_pai] [varchar](100) NULL,
	[nome_mae] [varchar](100) NULL,
	[contato_emergencia] [varchar](80) NULL,
	[contato_emergencia_telefone] [varchar](20) NULL,
	[tipo_sanguineo] [varchar](30) NULL,
	[problema_saude] [bit] NOT NULL,
	[problema_saude_qual] [varchar](80) NULL,
	[medicacao_continua] [bit] NOT NULL,
	[medicacao_continua_qual] [varchar](80) NULL,
	[banco] [varchar](30) NULL,
	[banco_ag] [varchar](8) NULL,
	[banco_conta] [varchar](30) NULL,
	[senha] [varchar](max) NOT NULL,
	[senha_trocar] [bit] NOT NULL,
	[ativo] [bit] NOT NULL DEFAULT ((1)),
	[liberado] [bit] NULL,
	[dtCadastro] [datetime] NOT NULL DEFAULT ('2018-09-04'),
	[carteira_trabalho_num] [varchar](20) NULL,
	[cartao_sus_num] [varchar](20) NULL,
	[inscricao_inss] [varchar](20) NULL,
	[crm_inscricao] [varchar](20) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[UsuarioEspecialidadeRelacional]    Script Date: 02/10/2018 10:55:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UsuarioEspecialidadeRelacional](
	[usuarioId] [int] NOT NULL,
	[especialidadeId] [int] NOT NULL,
	[id] [int] IDENTITY(1,1) NOT NULL,
 CONSTRAINT [PK_UsuarioEspecialidadeRelacional] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET IDENTITY_INSERT [dbo].[Especialidade] ON 

INSERT [dbo].[Especialidade] ([nome], [duracao], [ID]) VALUES (N'Anestesiologia', 3, 1)
INSERT [dbo].[Especialidade] ([nome], [duracao], [ID]) VALUES (N'Cargiologia', 2, 2)
INSERT [dbo].[Especialidade] ([nome], [duracao], [ID]) VALUES (N'Cirurgia Geral', 2, 3)
INSERT [dbo].[Especialidade] ([nome], [duracao], [ID]) VALUES (N'Cirurgia Plástica', 3, 4)
INSERT [dbo].[Especialidade] ([nome], [duracao], [ID]) VALUES (N'Clínica Médica', 2, 5)
INSERT [dbo].[Especialidade] ([nome], [duracao], [ID]) VALUES (N'Dermatologia', 3, 6)
INSERT [dbo].[Especialidade] ([nome], [duracao], [ID]) VALUES (N'Ecocardiografia', 1, 7)
INSERT [dbo].[Especialidade] ([nome], [duracao], [ID]) VALUES (N'Endocrinologia e Metabologia', 2, 8)
INSERT [dbo].[Especialidade] ([nome], [duracao], [ID]) VALUES (N'Endoscopia Digestiva', 1, 9)
INSERT [dbo].[Especialidade] ([nome], [duracao], [ID]) VALUES (N'Gastroenterologia', 2, 10)
INSERT [dbo].[Especialidade] ([nome], [duracao], [ID]) VALUES (N'Gastroenterologia Pediátrica', 2, 11)
INSERT [dbo].[Especialidade] ([nome], [duracao], [ID]) VALUES (N'Hematologia e Hemoterapia', 2, 12)
INSERT [dbo].[Especialidade] ([nome], [duracao], [ID]) VALUES (N'Hepatologia', 2, 13)
INSERT [dbo].[Especialidade] ([nome], [duracao], [ID]) VALUES (N'Infectologia', 3, 14)
INSERT [dbo].[Especialidade] ([nome], [duracao], [ID]) VALUES (N'Medicina de Família e Comunidade', 2, 15)
INSERT [dbo].[Especialidade] ([nome], [duracao], [ID]) VALUES (N'Nefrologia', 2, 16)
INSERT [dbo].[Especialidade] ([nome], [duracao], [ID]) VALUES (N'Neonatologia', 2, 17)
INSERT [dbo].[Especialidade] ([nome], [duracao], [ID]) VALUES (N'Neurologia', 3, 18)
INSERT [dbo].[Especialidade] ([nome], [duracao], [ID]) VALUES (N'Obstetrícia e Ginecologia', 3, 19)
INSERT [dbo].[Especialidade] ([nome], [duracao], [ID]) VALUES (N'Oftalmologia', 3, 20)
INSERT [dbo].[Especialidade] ([nome], [duracao], [ID]) VALUES (N'Ortopedia e Traumatologia', 3, 21)
INSERT [dbo].[Especialidade] ([nome], [duracao], [ID]) VALUES (N'Otorrinolaringologia', 3, 22)
INSERT [dbo].[Especialidade] ([nome], [duracao], [ID]) VALUES (N'Patologia', 3, 23)
INSERT [dbo].[Especialidade] ([nome], [duracao], [ID]) VALUES (N'Pediatria', 2, 24)
INSERT [dbo].[Especialidade] ([nome], [duracao], [ID]) VALUES (N'Pneumologia', 2, 25)
INSERT [dbo].[Especialidade] ([nome], [duracao], [ID]) VALUES (N'Psiquiatria', 3, 26)
INSERT [dbo].[Especialidade] ([nome], [duracao], [ID]) VALUES (N'Psiquiatria da Infância e Adolescência', 1, 27)
INSERT [dbo].[Especialidade] ([nome], [duracao], [ID]) VALUES (N'Radiologia', 3, 28)
INSERT [dbo].[Especialidade] ([nome], [duracao], [ID]) VALUES (N'Reumatologia', 2, 29)
INSERT [dbo].[Especialidade] ([nome], [duracao], [ID]) VALUES (N'Urologia', 3, 30)
SET IDENTITY_INSERT [dbo].[Especialidade] OFF
SET IDENTITY_INSERT [dbo].[Nota] ON 

INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1019, 2019, 2, N'Habilidades práticas', 73, CAST(N'2018-09-11 22:26:52.560' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1019, 2019, 3, N'Atitudes', 74, CAST(N'2018-09-11 22:26:52.560' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1019, 2019, 3, N'Habilidades práticas', 75, CAST(N'2018-09-11 22:26:52.560' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1019, 2019, 4, N'Teórica', 76, CAST(N'2018-09-11 22:26:52.560' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1019, 2019, 4, N'Atitudes', 77, CAST(N'2018-09-11 22:26:52.560' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1019, 2019, 4, N'Habilidades práticas', 78, CAST(N'2018-09-11 22:26:52.560' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1019, 2020, 1, N'Teórica', 79, CAST(N'2018-09-11 22:26:52.560' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1019, 2020, 1, N'Atitudes', 80, CAST(N'2018-09-11 22:26:52.560' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1019, 2020, 1, N'Habilidades práticas', 81, CAST(N'2018-09-11 22:26:52.560' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1019, 2020, 2, N'Teórica', 82, CAST(N'2018-09-11 22:26:52.560' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1019, 2020, 2, N'Atitudes', 83, CAST(N'2018-09-11 22:26:52.560' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1019, 2020, 2, N'Habilidades práticas', 84, CAST(N'2018-09-11 22:26:52.560' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1019, 2020, 3, N'Teórica', 85, CAST(N'2018-09-11 22:26:52.560' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1019, 2020, 3, N'Atitudes', 86, CAST(N'2018-09-11 22:26:52.560' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1019, 2020, 3, N'Habilidades práticas', 87, CAST(N'2018-09-11 22:26:52.560' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1019, 2020, 4, N'Teórica', 88, CAST(N'2018-09-11 22:26:52.560' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1019, 2019, 3, N'Teórica', 89, CAST(N'2018-09-11 22:26:52.560' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1019, 2020, 4, N'Atitudes', 90, CAST(N'2018-09-11 22:26:52.560' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1019, 2020, 4, N'Habilidades práticas', 91, CAST(N'2018-09-11 22:26:52.560' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1019, 2019, 2, N'Teórica', 92, CAST(N'2018-09-11 22:26:52.560' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1019, 2018, 1, N'Teórica', 93, CAST(N'2018-09-11 22:26:52.470' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1019, 2018, 1, N'Atitudes', 94, CAST(N'2018-09-11 22:26:52.557' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1019, 2018, 1, N'Habilidades práticas', 95, CAST(N'2018-09-11 22:26:52.560' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1019, 2018, 2, N'Teórica', 96, CAST(N'2018-09-11 22:26:52.560' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1019, 2018, 2, N'Atitudes', 97, CAST(N'2018-09-11 22:26:52.560' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1019, 2018, 2, N'Habilidades práticas', 98, CAST(N'2018-09-11 22:26:52.560' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1019, 2018, 3, N'Teórica', 99, CAST(N'2018-09-11 22:26:52.560' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1019, 2018, 3, N'Atitudes', 100, CAST(N'2018-09-11 22:26:52.560' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1019, 2018, 3, N'Habilidades práticas', 101, CAST(N'2018-09-11 22:26:52.560' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1019, 2018, 4, N'Teórica', 102, CAST(N'2018-09-11 22:26:52.560' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1019, 2018, 4, N'Atitudes', 103, CAST(N'2018-09-11 22:26:52.560' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1019, 2018, 4, N'Habilidades práticas', 104, CAST(N'2018-09-11 22:26:52.560' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1019, 2019, 1, N'Teórica', 105, CAST(N'2018-09-11 22:26:52.560' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1019, 2019, 1, N'Atitudes', 106, CAST(N'2018-09-11 22:26:52.560' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1019, 2019, 1, N'Habilidades práticas', 107, CAST(N'2018-09-11 22:26:52.560' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1019, 2019, 2, N'Atitudes', 108, CAST(N'2018-09-11 22:26:52.560' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1022, 2018, 4, N'Habilidades práticas', 109, CAST(N'2018-09-12 11:19:20.130' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1022, 2019, 4, N'Teórica', 110, CAST(N'2018-09-12 11:19:20.130' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1022, 2019, 3, N'Habilidades práticas', 111, CAST(N'2018-09-12 11:19:20.130' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1022, 2019, 3, N'Atitudes', 112, CAST(N'2018-09-12 11:19:20.130' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1022, 2019, 3, N'Teórica', 113, CAST(N'2018-09-12 11:19:20.130' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1022, 2019, 2, N'Habilidades práticas', 114, CAST(N'2018-09-12 11:19:20.130' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1022, 2019, 2, N'Atitudes', 115, CAST(N'2018-09-12 11:19:20.130' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1022, 2019, 2, N'Teórica', 116, CAST(N'2018-09-12 11:19:20.130' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1022, 2019, 1, N'Habilidades práticas', 117, CAST(N'2018-09-12 11:19:20.130' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1022, 2019, 1, N'Atitudes', 118, CAST(N'2018-09-12 11:19:20.130' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1022, 2019, 1, N'Teórica', 119, CAST(N'2018-09-12 11:19:20.130' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1022, 2019, 4, N'Atitudes', 120, CAST(N'2018-09-12 11:19:20.130' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1022, 2019, 4, N'Habilidades práticas', 121, CAST(N'2018-09-12 11:19:20.130' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1022, 2018, 4, N'Teórica', 122, CAST(N'2018-09-12 11:19:20.130' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1022, 2018, 3, N'Habilidades práticas', 123, CAST(N'2018-09-12 11:19:20.130' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1022, 2018, 3, N'Atitudes', 124, CAST(N'2018-09-12 11:19:20.130' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1022, 2018, 3, N'Teórica', 125, CAST(N'2018-09-12 11:19:20.130' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1022, 2018, 2, N'Habilidades práticas', 126, CAST(N'2018-09-12 11:19:20.130' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1022, 2018, 2, N'Atitudes', 127, CAST(N'2018-09-12 11:19:20.130' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1022, 2018, 2, N'Teórica', 128, CAST(N'2018-09-12 11:19:20.130' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1022, 2018, 1, N'Habilidades práticas', 129, CAST(N'2018-09-12 11:19:20.130' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1022, 2018, 1, N'Atitudes', 130, CAST(N'2018-09-12 11:19:20.127' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1022, 2018, 1, N'Teórica', 131, CAST(N'2018-09-12 11:19:20.100' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1022, 2018, 4, N'Atitudes', 132, CAST(N'2018-09-12 11:19:20.130' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1025, 2019, 2, N'Habilidades práticas', 133, CAST(N'2018-09-27 11:33:45.210' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1025, 2019, 3, N'Atitudes', 134, CAST(N'2018-09-27 11:33:45.210' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1025, 2019, 3, N'Habilidades práticas', 135, CAST(N'2018-09-27 11:33:45.210' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1025, 2019, 4, N'Teórica', 136, CAST(N'2018-09-27 11:33:45.210' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1025, 2019, 4, N'Atitudes', 137, CAST(N'2018-09-27 11:33:45.210' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1025, 2019, 4, N'Habilidades práticas', 138, CAST(N'2018-09-27 11:33:45.210' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1025, 2020, 1, N'Teórica', 139, CAST(N'2018-09-27 11:33:45.210' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1025, 2020, 1, N'Atitudes', 140, CAST(N'2018-09-27 11:33:45.210' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1025, 2020, 1, N'Habilidades práticas', 141, CAST(N'2018-09-27 11:33:45.210' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1025, 2020, 2, N'Teórica', 142, CAST(N'2018-09-27 11:33:45.210' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1025, 2020, 2, N'Atitudes', 143, CAST(N'2018-09-27 11:33:45.210' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1025, 2020, 2, N'Habilidades práticas', 144, CAST(N'2018-09-27 11:33:45.210' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1025, 2020, 3, N'Teórica', 145, CAST(N'2018-09-27 11:33:45.210' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1025, 2020, 3, N'Atitudes', 146, CAST(N'2018-09-27 11:33:45.210' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1025, 2020, 3, N'Habilidades práticas', 147, CAST(N'2018-09-27 11:33:45.210' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1025, 2020, 4, N'Teórica', 148, CAST(N'2018-09-27 11:33:45.210' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1025, 2019, 3, N'Teórica', 149, CAST(N'2018-09-27 11:33:45.210' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1025, 2020, 4, N'Atitudes', 150, CAST(N'2018-09-27 11:33:45.210' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1025, 2020, 4, N'Habilidades práticas', 151, CAST(N'2018-09-27 11:33:45.210' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1025, 2019, 2, N'Teórica', 152, CAST(N'2018-09-27 11:33:45.210' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1025, 2018, 1, N'Teórica', 153, CAST(N'2018-09-27 11:33:45.197' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1025, 2018, 1, N'Atitudes', 154, CAST(N'2018-09-27 11:33:45.210' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1025, 2018, 1, N'Habilidades práticas', 155, CAST(N'2018-09-27 11:33:45.210' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1025, 2018, 2, N'Teórica', 156, CAST(N'2018-09-27 11:33:45.210' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1025, 2018, 2, N'Atitudes', 157, CAST(N'2018-09-27 11:33:45.210' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1025, 2018, 2, N'Habilidades práticas', 158, CAST(N'2018-09-27 11:33:45.210' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1025, 2018, 3, N'Teórica', 159, CAST(N'2018-09-27 11:33:45.210' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1025, 2018, 3, N'Atitudes', 160, CAST(N'2018-09-27 11:33:45.210' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1025, 2018, 3, N'Habilidades práticas', 161, CAST(N'2018-09-27 11:33:45.210' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1025, 2018, 4, N'Teórica', 162, CAST(N'2018-09-27 11:33:45.210' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1025, 2018, 4, N'Atitudes', 163, CAST(N'2018-09-27 11:33:45.210' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1025, 2018, 4, N'Habilidades práticas', 164, CAST(N'2018-09-27 11:33:45.210' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1025, 2019, 1, N'Teórica', 165, CAST(N'2018-09-27 11:33:45.210' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1025, 2019, 1, N'Atitudes', 166, CAST(N'2018-09-27 11:33:45.210' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1025, 2019, 1, N'Habilidades práticas', 167, CAST(N'2018-09-27 11:33:45.210' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1025, 2019, 2, N'Atitudes', 168, CAST(N'2018-09-27 11:33:45.210' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1026, 2019, 2, N'Habilidades práticas', 169, CAST(N'2018-09-27 12:20:47.420' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1026, 2019, 3, N'Atitudes', 170, CAST(N'2018-09-27 12:20:47.420' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1026, 2019, 3, N'Habilidades práticas', 171, CAST(N'2018-09-27 12:20:47.420' AS DateTime))
GO
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1026, 2019, 4, N'Teórica', 172, CAST(N'2018-09-27 12:20:47.420' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1026, 2019, 4, N'Atitudes', 173, CAST(N'2018-09-27 12:20:47.420' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1026, 2019, 4, N'Habilidades práticas', 174, CAST(N'2018-09-27 12:20:47.420' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1026, 2020, 1, N'Teórica', 175, CAST(N'2018-09-27 12:20:47.420' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1026, 2020, 1, N'Atitudes', 176, CAST(N'2018-09-27 12:20:47.420' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1026, 2020, 1, N'Habilidades práticas', 177, CAST(N'2018-09-27 12:20:47.420' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1026, 2020, 2, N'Teórica', 178, CAST(N'2018-09-27 12:20:47.420' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1026, 2020, 2, N'Atitudes', 179, CAST(N'2018-09-27 12:20:47.420' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1026, 2020, 2, N'Habilidades práticas', 180, CAST(N'2018-09-27 12:20:47.420' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1026, 2020, 3, N'Teórica', 181, CAST(N'2018-09-27 12:20:47.420' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1026, 2020, 3, N'Atitudes', 182, CAST(N'2018-09-27 12:20:47.420' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1026, 2020, 3, N'Habilidades práticas', 183, CAST(N'2018-09-27 12:20:47.420' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1026, 2020, 4, N'Teórica', 184, CAST(N'2018-09-27 12:20:47.420' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1026, 2019, 3, N'Teórica', 185, CAST(N'2018-09-27 12:20:47.420' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1026, 2020, 4, N'Atitudes', 186, CAST(N'2018-09-27 12:20:47.420' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1026, 2020, 4, N'Habilidades práticas', 187, CAST(N'2018-09-27 12:20:47.420' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1026, 2019, 2, N'Teórica', 188, CAST(N'2018-09-27 12:20:47.420' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1026, 2018, 1, N'Teórica', 189, CAST(N'2018-09-27 12:20:47.417' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1026, 2018, 1, N'Atitudes', 190, CAST(N'2018-09-27 12:20:47.417' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1026, 2018, 1, N'Habilidades práticas', 191, CAST(N'2018-09-27 12:20:47.417' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1026, 2018, 2, N'Teórica', 192, CAST(N'2018-09-27 12:20:47.417' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1026, 2018, 2, N'Atitudes', 193, CAST(N'2018-09-27 12:20:47.417' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1026, 2018, 2, N'Habilidades práticas', 194, CAST(N'2018-09-27 12:20:47.417' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1026, 2018, 3, N'Teórica', 195, CAST(N'2018-09-27 12:20:47.417' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1026, 2018, 3, N'Atitudes', 196, CAST(N'2018-09-27 12:20:47.417' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1026, 2018, 3, N'Habilidades práticas', 197, CAST(N'2018-09-27 12:20:47.417' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1026, 2018, 4, N'Teórica', 198, CAST(N'2018-09-27 12:20:47.417' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1026, 2018, 4, N'Atitudes', 199, CAST(N'2018-09-27 12:20:47.417' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1026, 2018, 4, N'Habilidades práticas', 200, CAST(N'2018-09-27 12:20:47.417' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1026, 2019, 1, N'Teórica', 201, CAST(N'2018-09-27 12:20:47.417' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1026, 2019, 1, N'Atitudes', 202, CAST(N'2018-09-27 12:20:47.417' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1026, 2019, 1, N'Habilidades práticas', 203, CAST(N'2018-09-27 12:20:47.420' AS DateTime))
INSERT [dbo].[Nota] ([supervisorId], [residenteId], [ano], [periodo], [disciplina], [id], [dtLancamento]) VALUES (1021, 1026, 2019, 2, N'Atitudes', 204, CAST(N'2018-09-27 12:20:47.420' AS DateTime))
SET IDENTITY_INSERT [dbo].[Nota] OFF
SET IDENTITY_INSERT [dbo].[NotaValor] ON 

INSERT [dbo].[NotaValor] ([id], [valor], [peso], [notaId]) VALUES (3, CAST(80.00 AS Decimal(5, 2)), 1, 73)
INSERT [dbo].[NotaValor] ([id], [valor], [peso], [notaId]) VALUES (4, CAST(80.00 AS Decimal(5, 2)), 1, 73)
INSERT [dbo].[NotaValor] ([id], [valor], [peso], [notaId]) VALUES (5, CAST(80.00 AS Decimal(5, 2)), 1, 73)
INSERT [dbo].[NotaValor] ([id], [valor], [peso], [notaId]) VALUES (6, CAST(50.00 AS Decimal(5, 2)), 1, 108)
INSERT [dbo].[NotaValor] ([id], [valor], [peso], [notaId]) VALUES (21, CAST(80.00 AS Decimal(5, 2)), 1, 108)
INSERT [dbo].[NotaValor] ([id], [valor], [peso], [notaId]) VALUES (22, CAST(100.00 AS Decimal(5, 2)), 1, 108)
INSERT [dbo].[NotaValor] ([id], [valor], [peso], [notaId]) VALUES (23, CAST(80.00 AS Decimal(5, 2)), 1, 94)
INSERT [dbo].[NotaValor] ([id], [valor], [peso], [notaId]) VALUES (24, CAST(85.00 AS Decimal(5, 2)), 1, 94)
INSERT [dbo].[NotaValor] ([id], [valor], [peso], [notaId]) VALUES (25, CAST(90.00 AS Decimal(5, 2)), 1, 95)
INSERT [dbo].[NotaValor] ([id], [valor], [peso], [notaId]) VALUES (26, CAST(95.00 AS Decimal(5, 2)), 1, 95)
INSERT [dbo].[NotaValor] ([id], [valor], [peso], [notaId]) VALUES (27, CAST(100.00 AS Decimal(5, 2)), 1, 94)
INSERT [dbo].[NotaValor] ([id], [valor], [peso], [notaId]) VALUES (28, CAST(100.00 AS Decimal(5, 2)), 1, 94)
INSERT [dbo].[NotaValor] ([id], [valor], [peso], [notaId]) VALUES (29, CAST(50.00 AS Decimal(5, 2)), 1, 93)
INSERT [dbo].[NotaValor] ([id], [valor], [peso], [notaId]) VALUES (30, CAST(20.00 AS Decimal(5, 2)), 1, 94)
INSERT [dbo].[NotaValor] ([id], [valor], [peso], [notaId]) VALUES (31, CAST(80.00 AS Decimal(5, 2)), 1, 98)
SET IDENTITY_INSERT [dbo].[NotaValor] OFF
SET IDENTITY_INSERT [dbo].[Usuario] ON 

INSERT [dbo].[Usuario] ([id], [perfilId], [nome], [funcao], [telefone_principal], [telefone_alternativo], [email_principal], [email_alternativo], [formacao], [formacao_instituicao], [formacao_inicio], [formacao_fim], [crm_num], [crm_uf], [nascimento], [cpf], [identidade], [identidade_orgao_expeditor], [identidade_dt_expedicao], [identidade_uf], [endereco_logradouro], [endereco_numero], [endereco_complemento], [endereco_bairro], [endereco_cep], [endereco_cidade], [endereco_uf], [residencia_inicio], [residencia_fim], [sexo], [raca], [nacionalidade], [nacionalidade_outro], [naturalidade], [naturalidade_estado], [naturalidade_pais], [estado_civil], [pis_pasep], [titulo_eleitoral], [titulo_eleitoral_zona], [titulo_eleitoral_secao], [titulo_eleitoral_dt_expedicao], [titulo_eleitoral_uf], [nome_pai], [nome_mae], [contato_emergencia], [contato_emergencia_telefone], [tipo_sanguineo], [problema_saude], [problema_saude_qual], [medicacao_continua], [medicacao_continua_qual], [banco], [banco_ag], [banco_conta], [senha], [senha_trocar], [ativo], [liberado], [dtCadastro], [carteira_trabalho_num], [cartao_sus_num], [inscricao_inss], [crm_inscricao]) VALUES (1019, 3, N'Carlos Henrique', N'', N'(32) 98447-9670', N'', N'emlopes1@latam.stefanini.com', N'', N'Superior Completo', N'UFJF', 2010, 2018, N'1325', N'AC', CAST(N'1992-03-12 00:00:00.000' AS DateTime), N'104.591.676-50', N'16065065', N'SSP', CAST(N'2000-01-12 00:00:00.000' AS DateTime), N'MG', N'Rua São Mateus', N'358', N'', N'São Mateus', N'36.025-000', N'Juiz de Fora', N'MG', CAST(N'2018-09-11 00:00:00.000' AS DateTime), CAST(N'2021-09-11 00:00:00.000' AS DateTime), N'Masculino', N'Branca', N'Brasileiro', N'', N'Leopoldina', N'MG', N'Brasil', N'Solteiro', N'1321652', N'165165', N'1', N'1', CAST(N'2015-01-12 00:00:00.000' AS DateTime), N'MG', N'Eduardo', N'Rozilda', N'Bruna', N'(32) 98479-8568', N'AB', 0, N'', 0, N'', N'Caixa Econômica Federal', N'23123', N'35165', N'e10adc3949ba59abbe56e057f20f883e', 0, 0, 1, CAST(N'2018-09-11 20:41:03.497' AS DateTime), N'15984', N'56454', N'65465', N'')
INSERT [dbo].[Usuario] ([id], [perfilId], [nome], [funcao], [telefone_principal], [telefone_alternativo], [email_principal], [email_alternativo], [formacao], [formacao_instituicao], [formacao_inicio], [formacao_fim], [crm_num], [crm_uf], [nascimento], [cpf], [identidade], [identidade_orgao_expeditor], [identidade_dt_expedicao], [identidade_uf], [endereco_logradouro], [endereco_numero], [endereco_complemento], [endereco_bairro], [endereco_cep], [endereco_cidade], [endereco_uf], [residencia_inicio], [residencia_fim], [sexo], [raca], [nacionalidade], [nacionalidade_outro], [naturalidade], [naturalidade_estado], [naturalidade_pais], [estado_civil], [pis_pasep], [titulo_eleitoral], [titulo_eleitoral_zona], [titulo_eleitoral_secao], [titulo_eleitoral_dt_expedicao], [titulo_eleitoral_uf], [nome_pai], [nome_mae], [contato_emergencia], [contato_emergencia_telefone], [tipo_sanguineo], [problema_saude], [problema_saude_qual], [medicacao_continua], [medicacao_continua_qual], [banco], [banco_ag], [banco_conta], [senha], [senha_trocar], [ativo], [liberado], [dtCadastro], [carteira_trabalho_num], [cartao_sus_num], [inscricao_inss], [crm_inscricao]) VALUES (1020, 1, N'Eduardo Machado Lopes', N'Supervisor', N'(32) 98447-9670', N'', N'eduardolopes@ice.ufjf.br', N'', N'Superior Completo', N'', NULL, NULL, N'1231231', N'', CAST(N'1992-03-12 00:00:00.000' AS DateTime), N'104.591.676-50', N'16516511', N'SSP', CAST(N'2015-01-01 00:00:00.000' AS DateTime), N'MG', N'Rua Antônio Altaf', N'355', N'303', N'Cascatinha', N'36.033-330', N'Juiz de Fora', N'MG', NULL, NULL, NULL, N'', N'', N'', N'', N'', N'', N'', N'', N'', N'', N'', NULL, N'', N'', N'', N'', N'', N'', 0, N'', 0, N'', N'', N'', N'', N'e10adc3949ba59abbe56e057f20f883e', 0, 1, NULL, CAST(N'2018-09-11 22:08:48.593' AS DateTime), N'', N'', N'', N'')
INSERT [dbo].[Usuario] ([id], [perfilId], [nome], [funcao], [telefone_principal], [telefone_alternativo], [email_principal], [email_alternativo], [formacao], [formacao_instituicao], [formacao_inicio], [formacao_fim], [crm_num], [crm_uf], [nascimento], [cpf], [identidade], [identidade_orgao_expeditor], [identidade_dt_expedicao], [identidade_uf], [endereco_logradouro], [endereco_numero], [endereco_complemento], [endereco_bairro], [endereco_cep], [endereco_cidade], [endereco_uf], [residencia_inicio], [residencia_fim], [sexo], [raca], [nacionalidade], [nacionalidade_outro], [naturalidade], [naturalidade_estado], [naturalidade_pais], [estado_civil], [pis_pasep], [titulo_eleitoral], [titulo_eleitoral_zona], [titulo_eleitoral_secao], [titulo_eleitoral_dt_expedicao], [titulo_eleitoral_uf], [nome_pai], [nome_mae], [contato_emergencia], [contato_emergencia_telefone], [tipo_sanguineo], [problema_saude], [problema_saude_qual], [medicacao_continua], [medicacao_continua_qual], [banco], [banco_ag], [banco_conta], [senha], [senha_trocar], [ativo], [liberado], [dtCadastro], [carteira_trabalho_num], [cartao_sus_num], [inscricao_inss], [crm_inscricao]) VALUES (1021, 2, N'Leandro Silva', N'Supervisor', N'(32) 98447-9670', N'', N'duduulopes@gmail.com', N'', N'Superior Completo', N'', NULL, NULL, N'12313', N'', CAST(N'1990-03-12 00:00:00.000' AS DateTime), N'120.216.518-88', N'21656', N'SSP', CAST(N'2015-04-12 00:00:00.000' AS DateTime), N'AC', N'Rua São Mateus', N'351', N'', N'São Mateus', N'36.025-000', N'Juiz de Fora', N'MG', NULL, NULL, NULL, N'', N'', N'', N'', N'', N'', N'', N'', N'', N'', N'', NULL, N'', N'', N'', N'', N'', N'', 0, N'', 0, N'', N'', N'', N'', N'e10adc3949ba59abbe56e057f20f883e', 0, 1, NULL, CAST(N'2018-09-11 22:13:18.697' AS DateTime), N'', N'', N'', N'')
INSERT [dbo].[Usuario] ([id], [perfilId], [nome], [funcao], [telefone_principal], [telefone_alternativo], [email_principal], [email_alternativo], [formacao], [formacao_instituicao], [formacao_inicio], [formacao_fim], [crm_num], [crm_uf], [nascimento], [cpf], [identidade], [identidade_orgao_expeditor], [identidade_dt_expedicao], [identidade_uf], [endereco_logradouro], [endereco_numero], [endereco_complemento], [endereco_bairro], [endereco_cep], [endereco_cidade], [endereco_uf], [residencia_inicio], [residencia_fim], [sexo], [raca], [nacionalidade], [nacionalidade_outro], [naturalidade], [naturalidade_estado], [naturalidade_pais], [estado_civil], [pis_pasep], [titulo_eleitoral], [titulo_eleitoral_zona], [titulo_eleitoral_secao], [titulo_eleitoral_dt_expedicao], [titulo_eleitoral_uf], [nome_pai], [nome_mae], [contato_emergencia], [contato_emergencia_telefone], [tipo_sanguineo], [problema_saude], [problema_saude_qual], [medicacao_continua], [medicacao_continua_qual], [banco], [banco_ag], [banco_conta], [senha], [senha_trocar], [ativo], [liberado], [dtCadastro], [carteira_trabalho_num], [cartao_sus_num], [inscricao_inss], [crm_inscricao]) VALUES (1022, 3, N'Thiago Souza', N'', N'(32) 98447-9698', N'', N'educorrea.lopes@gmail.com', N'', N'Superior Completo', N'UFJF', 2001, 2008, N'5195', N'MG', CAST(N'2000-11-03 00:00:00.000' AS DateTime), N'104.591.676-50', N'165165165', N'SSP', CAST(N'2001-02-11 00:00:00.000' AS DateTime), N'MG', N'Rua São Mateus', N'380', N'', N'São Mateus', N'36.025-001', N'Juiz de Fora', N'MG', CAST(N'2018-09-12 00:00:00.000' AS DateTime), CAST(N'2020-09-11 00:00:00.000' AS DateTime), N'Masculino', N'Branca', N'Brasileiro', N'', N'Juiz de Fora', N'MG', N'Brasil', N'Solteiro', N'2313216', N'3131', N'1', N'1', CAST(N'2000-01-01 00:00:00.000' AS DateTime), N'AC', N'Carlos Alexandre', N'Sandra Rosa', N'Humberto', N'(32) 98558-9996', N'O-', 0, N'', 0, N'', N'Caixa Econômica Federal', N'51651', N'165165', N'329112039a98844680a60bb828579eda', 1, 0, 1, CAST(N'2018-09-12 11:13:47.400' AS DateTime), N'32132', N'11', N'13213', N'213165')
INSERT [dbo].[Usuario] ([id], [perfilId], [nome], [funcao], [telefone_principal], [telefone_alternativo], [email_principal], [email_alternativo], [formacao], [formacao_instituicao], [formacao_inicio], [formacao_fim], [crm_num], [crm_uf], [nascimento], [cpf], [identidade], [identidade_orgao_expeditor], [identidade_dt_expedicao], [identidade_uf], [endereco_logradouro], [endereco_numero], [endereco_complemento], [endereco_bairro], [endereco_cep], [endereco_cidade], [endereco_uf], [residencia_inicio], [residencia_fim], [sexo], [raca], [nacionalidade], [nacionalidade_outro], [naturalidade], [naturalidade_estado], [naturalidade_pais], [estado_civil], [pis_pasep], [titulo_eleitoral], [titulo_eleitoral_zona], [titulo_eleitoral_secao], [titulo_eleitoral_dt_expedicao], [titulo_eleitoral_uf], [nome_pai], [nome_mae], [contato_emergencia], [contato_emergencia_telefone], [tipo_sanguineo], [problema_saude], [problema_saude_qual], [medicacao_continua], [medicacao_continua_qual], [banco], [banco_ag], [banco_conta], [senha], [senha_trocar], [ativo], [liberado], [dtCadastro], [carteira_trabalho_num], [cartao_sus_num], [inscricao_inss], [crm_inscricao]) VALUES (1023, 1, N'João Afonso Gonçalves Portella', N'', N'(32) 98458-1027', N'', N'jgportella@hotmail.com', N'', N'Superior Completo', N'', NULL, NULL, N'', N'', CAST(N'1992-04-07 00:00:00.000' AS DateTime), N'088.932.576-61', N'16615300', N'SSP', CAST(N'2017-09-18 00:00:00.000' AS DateTime), N'MG', N'Rua Márcio Teixeira', N'63', N'', N'Teixeiras', N'36.033-430', N'Juiz de Fora', N'MG', NULL, NULL, NULL, N'', N'', N'', N'', N'', N'', N'', N'', N'', N'', N'', NULL, N'', N'', N'', N'', N'', N'', 0, N'', 0, N'', N'', N'', N'', N'475b78c9b369c239993e5df472aa81c1', 0, 1, NULL, CAST(N'2018-09-17 14:05:19.037' AS DateTime), N'', N'', N'', N'')
INSERT [dbo].[Usuario] ([id], [perfilId], [nome], [funcao], [telefone_principal], [telefone_alternativo], [email_principal], [email_alternativo], [formacao], [formacao_instituicao], [formacao_inicio], [formacao_fim], [crm_num], [crm_uf], [nascimento], [cpf], [identidade], [identidade_orgao_expeditor], [identidade_dt_expedicao], [identidade_uf], [endereco_logradouro], [endereco_numero], [endereco_complemento], [endereco_bairro], [endereco_cep], [endereco_cidade], [endereco_uf], [residencia_inicio], [residencia_fim], [sexo], [raca], [nacionalidade], [nacionalidade_outro], [naturalidade], [naturalidade_estado], [naturalidade_pais], [estado_civil], [pis_pasep], [titulo_eleitoral], [titulo_eleitoral_zona], [titulo_eleitoral_secao], [titulo_eleitoral_dt_expedicao], [titulo_eleitoral_uf], [nome_pai], [nome_mae], [contato_emergencia], [contato_emergencia_telefone], [tipo_sanguineo], [problema_saude], [problema_saude_qual], [medicacao_continua], [medicacao_continua_qual], [banco], [banco_ag], [banco_conta], [senha], [senha_trocar], [ativo], [liberado], [dtCadastro], [carteira_trabalho_num], [cartao_sus_num], [inscricao_inss], [crm_inscricao]) VALUES (1024, 1, N'MICHELLE SILVEIRA DIAS', N'', N'(32) 99942-3018', N'', N'michelle.dias@ebserh.gov.br', N'', N'Superior Completo', N'', NULL, NULL, N'', N'', CAST(N'1986-11-29 00:00:00.000' AS DateTime), N'080.471.336-75', N'15124514', N'ssp', CAST(N'2016-03-18 00:00:00.000' AS DateTime), N'MG', N'Rua Belo Horizonte', N'275', N'Ap 408', N'São Mateus', N'36.016-430', N'Juiz de Fora', N'MG', NULL, NULL, NULL, N'', N'', N'', N'', N'', N'', N'', N'', N'', N'', N'', NULL, N'', N'', N'', N'', N'', N'', 0, N'', 0, N'', N'', N'', N'', N'13e88956a4480ead5f79664194a7ed57', 1, 1, NULL, CAST(N'2018-09-18 14:53:10.180' AS DateTime), N'', N'', N'', N'')
INSERT [dbo].[Usuario] ([id], [perfilId], [nome], [funcao], [telefone_principal], [telefone_alternativo], [email_principal], [email_alternativo], [formacao], [formacao_instituicao], [formacao_inicio], [formacao_fim], [crm_num], [crm_uf], [nascimento], [cpf], [identidade], [identidade_orgao_expeditor], [identidade_dt_expedicao], [identidade_uf], [endereco_logradouro], [endereco_numero], [endereco_complemento], [endereco_bairro], [endereco_cep], [endereco_cidade], [endereco_uf], [residencia_inicio], [residencia_fim], [sexo], [raca], [nacionalidade], [nacionalidade_outro], [naturalidade], [naturalidade_estado], [naturalidade_pais], [estado_civil], [pis_pasep], [titulo_eleitoral], [titulo_eleitoral_zona], [titulo_eleitoral_secao], [titulo_eleitoral_dt_expedicao], [titulo_eleitoral_uf], [nome_pai], [nome_mae], [contato_emergencia], [contato_emergencia_telefone], [tipo_sanguineo], [problema_saude], [problema_saude_qual], [medicacao_continua], [medicacao_continua_qual], [banco], [banco_ag], [banco_conta], [senha], [senha_trocar], [ativo], [liberado], [dtCadastro], [carteira_trabalho_num], [cartao_sus_num], [inscricao_inss], [crm_inscricao]) VALUES (1025, 3, N'Aurélia Fernandes Costa', N'', N'(32) 99945-1694', N'', N'aureliamed@yahoo.com.br', N'', N'Superior Completo', N'Universidade Federal de Juiz de For', 2017, 2013, N'60065', N'MG', CAST(N'1984-10-17 00:00:00.000' AS DateTime), N'072.325.936-43', N'14098896', N'SSP', CAST(N'2002-04-22 00:00:00.000' AS DateTime), N'MG', N'Rua Olegário Maciel', N'2015', N'AP 302', N'Paineiras', N'36.016-011', N'Juiz de Fora', N'MG', CAST(N'2018-09-27 00:00:00.000' AS DateTime), CAST(N'2021-09-26 00:00:00.000' AS DateTime), N'Feminino', N'BRANCA', N'Brasileiro', N'', N'JUIZ DE FORA', N'MG', N'BRASIL', N'Solteiro', N'1.901.936.031-3', N'14678939230', N'315', N'0223', CAST(N'2002-05-07 00:00:00.000' AS DateTime), N'MG', N'Ernani Pedro da Costa', N'Maria José Fernandes Ribeiro Costa', N'Não Informado', N'(32) 98427-3332', N'A+', 0, N'', 1, N'ACO', N'Banco do Brasi', N'3896-2', N'7037-8', N'669be05dcabd6b10fa4c066cb901bcb6', 1, 1, 1, CAST(N'2018-09-27 11:32:36.680' AS DateTime), N'', N'', N'', N'')
INSERT [dbo].[Usuario] ([id], [perfilId], [nome], [funcao], [telefone_principal], [telefone_alternativo], [email_principal], [email_alternativo], [formacao], [formacao_instituicao], [formacao_inicio], [formacao_fim], [crm_num], [crm_uf], [nascimento], [cpf], [identidade], [identidade_orgao_expeditor], [identidade_dt_expedicao], [identidade_uf], [endereco_logradouro], [endereco_numero], [endereco_complemento], [endereco_bairro], [endereco_cep], [endereco_cidade], [endereco_uf], [residencia_inicio], [residencia_fim], [sexo], [raca], [nacionalidade], [nacionalidade_outro], [naturalidade], [naturalidade_estado], [naturalidade_pais], [estado_civil], [pis_pasep], [titulo_eleitoral], [titulo_eleitoral_zona], [titulo_eleitoral_secao], [titulo_eleitoral_dt_expedicao], [titulo_eleitoral_uf], [nome_pai], [nome_mae], [contato_emergencia], [contato_emergencia_telefone], [tipo_sanguineo], [problema_saude], [problema_saude_qual], [medicacao_continua], [medicacao_continua_qual], [banco], [banco_ag], [banco_conta], [senha], [senha_trocar], [ativo], [liberado], [dtCadastro], [carteira_trabalho_num], [cartao_sus_num], [inscricao_inss], [crm_inscricao]) VALUES (1026, 3, N'João Paulo Freire Motta', N'', N'(32) 98830-5014', N'', N'joaopaulo.csc@hotmail.com ', N'', N'Superior Completo', N'Universidade Federal de Juiz de For', 2012, 2017, N'74735', N'MG', CAST(N'1991-08-11 00:00:00.000' AS DateTime), N'112.307.366-03', N'MG-13.372.581 ', N'PCMG', CAST(N'2010-02-01 00:00:00.000' AS DateTime), N'MG', N'Rua Américo Lobo', N'1355', N'AP 403', N'Bairu', N'36.050-000', N'Juiz de Fora', N'MG', CAST(N'2018-09-27 12:20:47.417' AS DateTime), CAST(N'2021-09-26 12:20:47.417' AS DateTime), N'Masculino', N'Branco', N'Brasileiro', N'', N'Juiz de Fora', N'MG', N'Brasil', N'Solteiro', N'204.60452.13-9 ', N'192712370230', N'154', N'0345', CAST(N'2010-01-13 00:00:00.000' AS DateTime), N'MG', N'Fernando Alberto Almeida Mota', N'Maria da Penha Freire Mota', N'Maria da Penha Freire Mota', N'(32) 30846-337_', N'O+', 0, N'', 0, N'', N'Banco do Brasi', N'32050', N'428728', N'c34f1de784008a564696d9c796fc0f8a', 1, 1, 1, CAST(N'2018-09-27 12:20:15.290' AS DateTime), N'', N'', N'', N'')
SET IDENTITY_INSERT [dbo].[Usuario] OFF
SET IDENTITY_INSERT [dbo].[UsuarioEspecialidadeRelacional] ON 

INSERT [dbo].[UsuarioEspecialidadeRelacional] ([usuarioId], [especialidadeId], [id]) VALUES (1020, 2, 28)
INSERT [dbo].[UsuarioEspecialidadeRelacional] ([usuarioId], [especialidadeId], [id]) VALUES (1020, 3, 29)
INSERT [dbo].[UsuarioEspecialidadeRelacional] ([usuarioId], [especialidadeId], [id]) VALUES (1020, 1, 30)
INSERT [dbo].[UsuarioEspecialidadeRelacional] ([usuarioId], [especialidadeId], [id]) VALUES (1021, 3, 34)
INSERT [dbo].[UsuarioEspecialidadeRelacional] ([usuarioId], [especialidadeId], [id]) VALUES (1021, 1, 35)
INSERT [dbo].[UsuarioEspecialidadeRelacional] ([usuarioId], [especialidadeId], [id]) VALUES (1021, 2, 36)
INSERT [dbo].[UsuarioEspecialidadeRelacional] ([usuarioId], [especialidadeId], [id]) VALUES (1019, 2, 47)
INSERT [dbo].[UsuarioEspecialidadeRelacional] ([usuarioId], [especialidadeId], [id]) VALUES (1022, 2, 48)
INSERT [dbo].[UsuarioEspecialidadeRelacional] ([usuarioId], [especialidadeId], [id]) VALUES (1025, 1, 53)
INSERT [dbo].[UsuarioEspecialidadeRelacional] ([usuarioId], [especialidadeId], [id]) VALUES (1026, 1, 54)
SET IDENTITY_INSERT [dbo].[UsuarioEspecialidadeRelacional] OFF
ALTER TABLE [dbo].[Nota]  WITH CHECK ADD  CONSTRAINT [FK_ResidenteId] FOREIGN KEY([residenteId])
REFERENCES [dbo].[Usuario] ([id])
GO
ALTER TABLE [dbo].[Nota] CHECK CONSTRAINT [FK_ResidenteId]
GO
ALTER TABLE [dbo].[Nota]  WITH CHECK ADD  CONSTRAINT [FK_SupervisorId] FOREIGN KEY([supervisorId])
REFERENCES [dbo].[Usuario] ([id])
GO
ALTER TABLE [dbo].[Nota] CHECK CONSTRAINT [FK_SupervisorId]
GO
ALTER TABLE [dbo].[NotaValor]  WITH CHECK ADD  CONSTRAINT [FK_Nota_NotaValor] FOREIGN KEY([notaId])
REFERENCES [dbo].[Nota] ([id])
GO
ALTER TABLE [dbo].[NotaValor] CHECK CONSTRAINT [FK_Nota_NotaValor]
GO
ALTER TABLE [dbo].[UsuarioEspecialidadeRelacional]  WITH CHECK ADD  CONSTRAINT [FK_Relacional_Especialidade] FOREIGN KEY([especialidadeId])
REFERENCES [dbo].[Especialidade] ([ID])
GO
ALTER TABLE [dbo].[UsuarioEspecialidadeRelacional] CHECK CONSTRAINT [FK_Relacional_Especialidade]
GO
ALTER TABLE [dbo].[UsuarioEspecialidadeRelacional]  WITH CHECK ADD  CONSTRAINT [FK_Relacional_Usuario] FOREIGN KEY([usuarioId])
REFERENCES [dbo].[Usuario] ([id])
GO
ALTER TABLE [dbo].[UsuarioEspecialidadeRelacional] CHECK CONSTRAINT [FK_Relacional_Usuario]
GO
