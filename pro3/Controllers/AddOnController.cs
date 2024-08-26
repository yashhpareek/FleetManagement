using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using pro3.Models;
using pro3.Models.AddOn;
using pro3.DAL.HUB;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors]
    public class AddOnController : ControllerBase
    {
        private readonly IAddOnInterface _addOnRepository;

        public AddOnController(IAddOnInterface addOnRepository)
        {
            _addOnRepository = addOnRepository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Addon>>> GetAllAddOn()
        {
            var addon = await _addOnRepository.GetAllAddOn();

            if (addon == null)
            {
                return NotFound();
            }

            return addon;
        }
    }
}
