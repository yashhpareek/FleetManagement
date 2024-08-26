using EmailApplication.Model;

namespace EmailApplication.Interface
{
    public interface IMailService
    {
        public Task SendEmailAsync(MailRequest mailrequest);
    }
}
