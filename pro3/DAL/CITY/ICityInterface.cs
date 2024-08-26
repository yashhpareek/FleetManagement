using Microsoft.AspNetCore.Mvc;
using pro3.Models;

namespace project.DAL.CityComponent
{
    public interface ICityInterface
    {
        Task<ActionResult<IEnumerable<City>>> GetAllCities();
        Task<ActionResult<City>> GetCityById(int id);
        Task<ActionResult<IEnumerable<City>>> GetCityByState(int stateId);
    }
}
