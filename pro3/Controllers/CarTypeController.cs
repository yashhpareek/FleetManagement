using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using pro3.DAL.CarTypeFolder;
using pro3.Models;
using static pro3.DAL.CarTypeFolder.CarTypeRepository;

namespace pro3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors]
    public class CarTypeController : ControllerBase
    {

        private readonly ICarType _carType;

        public CarTypeController(ICarType carType)
        {
            _carType = carType;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<CarType>>> GetAllCategories()
        {
            var categories = await _carType.GetAllCategories();

            return categories == null ? NotFound() : categories;
        }
    }
}

