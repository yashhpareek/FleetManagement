using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using pro3.Models;
using project.DAL.CityComponent;

namespace project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors]
    public class CityController : ControllerBase
    {
        private readonly ICityInterface _city;

        public CityController(ICityInterface city)
        {
            _city = city;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<City>>> GetAllCities()
        {
            if (await _city.GetAllCities() == null)
            {
                return NotFound();
            }

            return await _city.GetAllCities();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<City>> GetCityById(int id)
        {
            var city = await _city.GetCityById(id);

            if (city == null)
            {
                return NotFound();
            }

            return city;
        }

        [HttpGet("state/{stateId}")]
        public async Task<ActionResult<IEnumerable<City>>> GetCityByState(int stateId)
        {
            var citiesInState = await _city.GetCityByState(stateId);

            if (citiesInState == null)
            {
                return NotFound();
            }

            return citiesInState;
        }
    }
}
