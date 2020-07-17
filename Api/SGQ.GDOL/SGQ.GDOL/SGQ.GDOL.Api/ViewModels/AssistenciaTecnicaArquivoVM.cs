namespace SGQ.GDOL.Api.ViewModels
{
    public class AssistenciaTecnicaArquivoVM
    {
        public int Id { get; set; }
        public string IdGuid { get; set; }
        public int IdAssistenciaTecnica { get; set; }
        public string IdGuidAssistenciaTecnica { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public string Arquivo { get; set; }
        public bool Delete { get; set; }
    }
}
