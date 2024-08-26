using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using pro3.DAL.CarComponent;
using pro3.Models;

namespace pro3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors]
    public class CarController : ControllerBase
    {
        private readonly ICarInterface _cars;

        public CarController(ICarInterface cars)
        {
            _cars = cars;
        }

        // to get Cars List from hub id and category Id
        [HttpGet("cars/{hubId:int}/{CarTypeId:int}")]
        public async Task<ActionResult<IEnumerable<Car>>> GetCarsByHubAndCarTypeId(int hubId, int CarTypeId)
        {
            var cars = await _cars.GetCarsByHubAndCarTypeId(hubId, CarTypeId);

            return cars == null ? NotFound() : cars;
        }

        // to get Cars list from only Hub id
        [HttpGet("cars/{hubId:int}")]
        public async Task<ActionResult<IEnumerable<Car>>> GetCarByHubId(int hubId)
        {
            var cars = await _cars.GetCarsByHubId(hubId);

            return cars == null ? NotFound() : cars;
        }

        [HttpGet("car/id/{hubId:long}")]
        public async Task<ActionResult<IEnumerable<Car>>> GetCarId(long hubId)
        {
            var car = await _cars.GetCar(hubId);
            if (car == null)
            {
                return NotFound();
            }
            return car;
        }

        [HttpPut("car/update/{carId:long}")]
        public IActionResult UpdateCarAvailability(long carId)
        {
            _cars.UpdateAvailable(carId);
            return NoContent();
        }

        [HttpPut("car/update/{carId:long}/{status}")]
        public IActionResult UpdateCar(long carId, string status)
        {
            _cars.Returnd((int)carId, status);
            return NoContent();
        }
    }
}
