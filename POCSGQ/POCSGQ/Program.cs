using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;

namespace POCSGQ
{
    public class Program
    {
        public static void Main(string[] args)
        {
            FirebaseService firebaseService = new FirebaseService();
            firebaseService.ObterAlterados();

            CreateWebHostBuilder(args).Build().Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>();
    }
}
