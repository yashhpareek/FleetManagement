using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using pro3.Models;

namespace pro3.DAL.HUB
{
    public interface IHubInterface
    {
        Task<ActionResult<IEnumerable<Hub>>> GetAllHubs();
        Task<ActionResult<IEnumerable<Hub>>> GetHubById(int id);
    }
}
