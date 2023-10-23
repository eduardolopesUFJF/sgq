namespace SGQ.GDOL.Domain.AssistenciaTecnicaRoot.Entity
{
    public class AssistenciaTecnicaCategoria : EntityBase
    {
        public int IdCategoriaAssistencia { get; set; }
        public int IdAssistenciaTecnica { get; set; }
        public bool Delete { get; set; }

        public virtual CategoriaAssistencia CategoriaAssistencia { get; set; }
        public virtual AssistenciaTecnica AssistenciaTecnica { get; set; }
    }
}
