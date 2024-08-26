using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using pro3.Models;
using pro3.DAL.HUB;
using System.Linq;

namespace project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors]
    public class HubController : ControllerBase
    {
        private readonly IHubInterface _hub;

        public HubController(IHubInterface hub)
        {
            _hub = hub;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Hub>>> GetAllHubs()
        {
            if (await _hub.GetAllHubs() == null)
            {
                return NotFound();
            }
            return await _hub.GetAllHubs();
        }

        [HttpGet("city/{cityId:int}")]
        public async Task<ActionResult<IEnumerable<Hub>>> GetHubById(int cityId)
        {
            var hub = await _hub.GetHubById(cityId);

            return hub;
        }
    }
}