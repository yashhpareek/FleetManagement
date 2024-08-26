using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using pro3.Models;

namespace pro3.DAL.CarComponent
{
    public class SQLCarRepository : ICarInterface
    {
        private readonly Appdbcontext _appDbContext;

        public SQLCarRepository(Appdbcontext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public async Task<ActionResult<IEnumerable<Car>>?> GetCarsByHubAndCarTypeId(int hubId, int CarTypeId)
        {
            var cars = await _appDbContext.Car
                .Include(c =>  c.CarType)
                .Include(c => c.Hub)
                .ThenInclude(h => h.City)
                .Include(c => c.Hub)
                .ThenInclude(h => h.State)
                .Where(c => c.HubId == hubId && c.CarTypeId == CarTypeId && c.IsAvailable == 1)
                .ToListAsync();

            if (cars == null || cars.Count() == 0)
                return null;

            return new ActionResult<IEnumerable<Car>>(cars);
        }

        public async Task<ActionResult<IEnumerable<Car>>?> GetCarsByHubId(int hubId)
        {
            var cars = await _appDbContext.Car
                .Include(c => c.CarType) // Include CarType
                .Include(c => c.Hub) // Include Hub
                    .ThenInclude(h => h.City) // Include City
                .Include(c => c.Hub) // Include Hub
                    .ThenInclude(h => h.State) // Include State
                .Where(c => c.HubId == hubId)
                .ToListAsync();

            if (cars == null || cars.Count() == 0)
            {
                return null;
            }

            return new ActionResult<IEnumerable<Car>>(cars);

            //throw new NotImplementedException();
        }

        public void UpdateAvailable(long carId)
        {
            var car = _appDbContext.Car.FirstOrDefault(c => c.CarId == carId);

            if (car != null)
            {
                car.IsAvailable = 0; // Assuming IsAvailable is a boolean property
                _appDbContext.SaveChanges();
            }
        }

        public void Returnd(int id, string s)
        {
            var car = _appDbContext.Car.FirstOrDefault(c => c.CarId == id);

            if (car != null)
            {
                car.IsAvailable = 1;
                var status = _appDbContext.Car
                                .Where(c => c.CarId == id)
                                .Select(c => c.Status)
                                .FirstOrDefault();

                // Check if status is not null before assigning
                if (status != null)
                {
                    car.Status = s;
                    _appDbContext.SaveChanges();
                }
                else
                {
                    // Handle the case where status is null (optional)
                    // You might want to log this or handle it differently based on your application's requirements.
                    Console.WriteLine("Status is null for car id: " + id);
                }
            }
        }

        public async Task<ActionResult<IEnumerable<Car>>> GetCar(long carId)
        {
            var car = await _appDbContext.Car
                               .Include(c => c.CarType)
                               .Include(c => c.Hub)
                                   .ThenInclude(h => h.City)
                               .Include(c => c.Hub)
                                   .ThenInclude(h => h.State)
                               .FirstOrDefaultAsync(c => c.CarId == carId);

            if (car == null)
                return null;

            return new ActionResult<IEnumerable<Car>>(new List<Car> { car });
        }
    }
}
