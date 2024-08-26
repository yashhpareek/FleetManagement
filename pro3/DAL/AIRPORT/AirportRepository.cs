using Microsoft.EntityFrameworkCore;
using pro3.Models;

namespace pro3.DAL.AriportFolder
{
    public class AirportRepository : IAirportInterface
    {
        private readonly Appdbcontext _appDbContext;

        public AirportRepository(Appdbcontext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public async Task<Airport> GetAirportById(int id)
        {
            // i want  full airport details by id inculding all realted objectss like city hub state
            //return await _appDbContext.Airport.FindAsync(id);
            var b= await _appDbContext.Airport
                   .Include(a => a.City)
                     .Include(a => a.Hub)
                     .Include(a => a.State)
                      .FirstOrDefaultAsync(a => a.AirportId == id);

            return b;
        }

        public async Task<List<Airport>> GetAllAirport()
        {
            //return await _appDbContext.Airport.ToListAsync();
            var b = await _appDbContext.Airport
                   .Include(a => a.City)
                     .Include(a => a.Hub)
                     .Include(a => a.State)
                      .ToListAsync();

            return b;
        }

        public async Task<List<string>> GetAllAirportCodes()
        {
            return await _appDbContext.Airport.Select(a => a.AirportCode).ToListAsync();
        }

     
      
        
        
    }
}
