using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using pro3.Models;

namespace project.DAL.StateComponent
{
    public class StateRepository : IStateInterface
    {
        private readonly Appdbcontext _appDbContext;

        public StateRepository(Appdbcontext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public async Task<ActionResult<IEnumerable<State>>> GetAllStates()
        {
            var states = await _appDbContext.State.ToListAsync();

            if (states == null)
            {
                return null;
            }

            return states;
        }

        public async Task<ActionResult<State>> GetStateById(int id)
        {
            var state = await _appDbContext.State.FindAsync(id);

            if (state == null)
            {
                return null;
            }

            return state;
        }
    }
}
