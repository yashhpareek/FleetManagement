using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using pro3.Models;
using project.DAL.StateComponent;

namespace project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors]
    public class StateController : ControllerBase
    {
        private readonly IStateInterface _state;

        public StateController(IStateInterface state)
        {
            _state = state;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<State>>> GetAllStates()
        {
            var states = await _state.GetAllStates();

            if (states == null)
            {
                return NotFound();
            }

            return states;
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<State>> GetStateById(int id)
        {
            var state = await _state.GetStateById(id);

            if (state == null)
            {
                return NotFound();
            }

            return state;
        }
    }
}
