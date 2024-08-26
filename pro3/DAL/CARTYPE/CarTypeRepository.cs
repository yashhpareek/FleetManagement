using Microsoft.EntityFrameworkCore;
using pro3.Models;

namespace pro3.DAL.CarTypeFolder
{

    public class CarTypeRepository : ICarType
    {
        private readonly Appdbcontext _appDbContext;

        public CarTypeRepository(Appdbcontext appdbcontext)
        {
            _appDbContext = appdbcontext;
        }

        public async Task<List<CarType>> GetAllCategories()
        {
            return await _appDbContext.CarType.ToListAsync();
        }
    }
}

