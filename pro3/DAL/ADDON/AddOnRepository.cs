using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;

using pro3.Models;
using pro3.Models.AddOn;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace pro3.DAL.AddOn
{
    public class AddOnRepository : IAddOnInterface
    {
        private readonly Appdbcontext _context;

        public AddOnRepository(Appdbcontext context)
        {
            _context = context;
        }

        public async Task<ActionResult<Addon>> GetAddOnById(int id)
        {
            var addOn = await _context.Addon.FindAsync(id);
            if (addOn == null)
            {
                return new NotFoundResult();
            }

            return addOn;
        }

        public async Task<ActionResult<IEnumerable<Addon>>> GetAllAddOn()
        {
            return await _context.Addon.ToListAsync();
        }
    }
}
