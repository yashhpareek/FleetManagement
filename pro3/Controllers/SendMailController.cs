// SendMailController.cs

using EmailApplication.Interface;
using EmailApplication.Model;
using EmailApplication.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace EmailApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SendMailController : ControllerBase
    {
        private readonly IMailService _mailService;

        public SendMailController(IMailService mailService)
        {
            _mailService = mailService;
        }


        [HttpPost]
        public async Task<IActionResult> SendEmail([FromForm] MailRequest request)
        {
            try
            {
                await _mailService.SendEmailAsync(request);
                return Ok("Sent Successfully");
            }
            catch (Exception ex)
            {
                // Handle exception appropriately (log, return error response, etc.)
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }
    }
}
