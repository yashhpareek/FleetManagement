using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using pro3.DAL.AriportFolder;
using pro3.Models;

namespace pro3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors]
    public class AirportController : ControllerBase
    {
        
            private readonly IAirportInterface _airportRepository;

            public AirportController(IAirportInterface airportRepository)
            {
                _airportRepository = airportRepository;
            }

            [HttpGet("airport")]
            public async Task<ActionResult<List<Airport>>> GetAllAirport()
            {
                var airports = await _airportRepository.GetAllAirport();
                return airports == null ? NotFound() : airports;
            }

            [HttpGet("airport/{id}")]
            public async Task<ActionResult<Airport>> GetAirportById(int id)
            {
                var airport = await _airportRepository.GetAirportById(id);
                return airport == null ? NotFound() : airport;
            }

            [HttpGet("airport/code")]
            public async Task<ActionResult<List<string>>> GetAllAirportCodes()
            {
                var airportCodes = await _airportRepository.GetAllAirportCodes();
                return airportCodes == null ? NotFound() : airportCodes;
            }
        
    }
}
