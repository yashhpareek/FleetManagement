using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using pro3.Models;

namespace pro3.DAL.HUB
{
    public class HubRepository : IHubInterface
    {
        private readonly Appdbcontext _appDbContext;
        public HubRepository(Appdbcontext appDbContext) {
            _appDbContext = appDbContext;
        }
        public async Task<ActionResult<IEnumerable<Hub>>> GetAllHubs()
        {
            var hubs = await _appDbContext.Hub
                .Include(h => h.City)
                    .ThenInclude(c => c.State)
                .Include(h => h.State)
                .ToListAsync();

            if (hubs == null)
            {
                return null;
            }

            return hubs;
        }

        public async Task<ActionResult<IEnumerable<Hub>>> GetHubById(int id)
        {
            var hub = await _appDbContext.Hub
        .Include(h => h.City)
            .ThenInclude(c => c.State)
        .Include(h => h.State)
        .Where(h => h.CityId == id)
        .ToListAsync();

            return hub;
        }

        
    }
}