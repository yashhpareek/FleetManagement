using Microsoft.AspNetCore.Mvc;

namespace pro3.Models.AddOn
{
    public interface IAddOnInterface
    {
        Task<ActionResult<IEnumerable<Addon>>> GetAllAddOn();

        Task<ActionResult<Addon>> GetAddOnById(int id);


    }
}
