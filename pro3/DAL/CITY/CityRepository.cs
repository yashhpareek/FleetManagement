using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using pro3.Models;

namespace project.DAL.CityComponent
{
    public class CityRepository : ICityInterface
    {
        private readonly Appdbcontext _appDbContext;

        public CityRepository(Appdbcontext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public async Task<ActionResult<IEnumerable<City>>> GetAllCities()
        {
            var cities = await _appDbContext.City
                .Include(c => c.State)
                .ToListAsync();

            if (cities == null)
            {
                return null;
            }

            return cities;
        }

        public async Task<ActionResult<City>> GetCityById(int id)
        {
            /*            if (_appDbContext.City == null)
                        {
                            return null;
                        }

                        var city = await _appDbContext.City.FindAsync(id);
                        if (city == null)
                        {
                            return null;
                        }

                        return city;*/


            var city = await _appDbContext.City
    .Where(c => c.CityId == id)
    .Include(c => c.State)
    .FirstOrDefaultAsync();

            if (city == null)
            {
                return null;
            }

            // Ensure State property is loaded
            await _appDbContext.Entry(city)
                .Reference(c => c.State)
                .LoadAsync();

            return city;
        }

        public async Task<ActionResult<IEnumerable<City>>> GetCityByState(int stateId)
        {
            var citiesInState = await _appDbContext.City
                .Where(c => c.StateId == stateId)
                .Include(c => c.State)
                .ToListAsync();

            if (citiesInState == null)
            {
                return null;
            }

            return citiesInState;
        }
    }
}
