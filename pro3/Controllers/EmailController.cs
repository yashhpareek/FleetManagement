using EmailApplication.Interface;
using EmailApplication.Model;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
//using pro3.DAL.Service;
using pro3.Models;

namespace pro3.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [EnableCors]
    public class EmailController : Controller
    {
        private readonly IMailService _mailService;
        public EmailController(IMailService mailService)
        {
            _mailService = mailService;
        }

        [HttpPost("Send")]
        public async Task<IActionResult> SendEmail([FromBody] MailRequest request)
        {
           
                await _mailService.SendEmailAsync(request);
                return Ok("Sent Successfully");
            

        }


    }
}

