using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using pro3.Models;
using System;

namespace pro3.DAL.CustomerComponent
{
    public class SQLCustomerRepository : ICustomerInterface
    {
        private readonly Appdbcontext _context;

        public SQLCustomerRepository(Appdbcontext context)
        {
            _context = context;
        }

        public async Task<ActionResult<Customer>?> AddCustomer(Customer cust)
        {
            _context.Customer.Add(cust);
            await _context.SaveChangesAsync();

            return (cust);
        }

        public async Task<ActionResult<Customer>> GetCustomerById(int id)
        {
            if (_context.Customer == null)
            {
                return null;
            }

            var cust_list = await _context.Customer.FindAsync(id);
            if (cust_list == null)
            {
                return null;
            }
            return cust_list;
        }

        public async Task<ActionResult<Customer>?> GetCustomerByEmailId(string emailid)
        {
            var cust = await _context.Customer
                       .Where(u => u.Email == emailid)
                        .FirstOrDefaultAsync();

            if (cust == null)
            {
                return null;
            }
            return cust;
        }

        public async Task<ActionResult<IEnumerable<Customer>>?> GetAllCustomers()
        {
            return await _context.Customer.ToListAsync();
        }

        public bool Login(string email, string password)
        {
            int count = _context.Customer.Count(c => c.Email == email && c.Password == password);
            return count > 0;
        }
    }
}
