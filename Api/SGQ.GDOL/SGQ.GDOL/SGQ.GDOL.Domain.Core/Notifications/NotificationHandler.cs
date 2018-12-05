using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace SGQ.GDOL.Domain.Core.Notifications
{
    public class NotificationHandler
    {
        public ICollection<Notification> Mensagens { get; set; }

        public NotificationHandler()
        {
            Mensagens = new Collection<Notification>();
        }

        public void AddMensagem(string key, string value)
        {
            try
            {
                Mensagens.Add(new Notification(key, value));
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
