namespace SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Entity
{
    public class AssistenciaTecnicaArquivo : EntityBase
    {
        public int IdAssistenciaTecnica { get; set; }
        public virtual AssistenciaTecnica AssistenciaTecnica { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public byte[] Arquivo { get; set; }
        public bool Delete { get; set; }
    }
}
