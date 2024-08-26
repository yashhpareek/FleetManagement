
using Microsoft.AspNetCore.Mvc;
using pro3.Models;

namespace pro3.DAL.CustomerComponent
{
    public interface ICustomerInterface
    {
        Task<ActionResult<Customer>?> AddCustomer(Customer cust);

        Task<ActionResult<Customer>> GetCustomerById(int id);

        Task<ActionResult<Customer>?> GetCustomerByEmailId(string emailid);

        Task<ActionResult<IEnumerable<Customer>>?> GetAllCustomers();

        Boolean Login(String email, String password);


    }
}
