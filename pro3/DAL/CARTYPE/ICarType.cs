using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using pro3.Models;

namespace pro3.DAL.CarTypeFolder
{
    public interface ICarType
    {
        Task<List<CarType>> GetAllCategories();
    }
}
