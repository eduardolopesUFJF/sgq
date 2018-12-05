using System.Collections.Generic;
using System.Linq;
using System.Net;
using FireSharp.Config;
using FireSharp.Interfaces;
using FireSharp.Response;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace POCSGQ
{
    public class FirebaseService
    {
        IFirebaseConfig config = new FirebaseConfig
        {
            AuthSecret = "iGuTEJHTQEOmig026ZUFhfE7PiGY1t3c4RYypPre",
            BasePath = "https://sgq-gdol.firebaseio.com/"
        };

        IFirebaseClient client;

        public void ObterAlterados()
        {
            client = new FireSharp.FirebaseClient(config);
            var result = client.Get("checklist");

            dynamic data = JsonConvert.DeserializeObject<dynamic>(result.Body);
            var shorter = ((IDictionary<string, JToken>)data).Select(k =>
                JsonConvert.DeserializeObject<CheckList>(k.Value.ToString())).Where(x => x.Alterado).ToList();
        }
    }
}
