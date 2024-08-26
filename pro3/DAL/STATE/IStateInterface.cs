using Microsoft.AspNetCore.Mvc;
using pro3.Models;

namespace project.DAL.StateComponent
{
    public interface IStateInterface
    {
        Task<ActionResult<IEnumerable<State>>> GetAllStates();
        Task<ActionResult<State>> GetStateById(int id);
    }
}
