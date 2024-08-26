using Microsoft.AspNetCore.Mvc;
using pro3.Models;

namespace pro3.DAL.CarComponent
{
    public interface ICarInterface
    {
        Task<ActionResult<IEnumerable<Car>>?> GetCarsByHubAndCarTypeId(int hubId, int CarTypeId);

        Task<ActionResult<IEnumerable<Car>>?> GetCarsByHubId(int hubId);

        void UpdateAvailable(long carId);
        void Returnd(int id, string s);
        Task<ActionResult<IEnumerable<Car>>> GetCar(long carId);
    }
}
