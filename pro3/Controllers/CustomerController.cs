using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using pro3.DAL.CustomerComponent;
using pro3.Models;

namespace pro3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors]
    public class CustomerController : ControllerBase
    {
        private readonly ICustomerInterface _customerInterface;

        public CustomerController(ICustomerInterface customerInterface)
        {
            _customerInterface = customerInterface;
        }


        [HttpPost]
        public async Task<ActionResult<Customer>?> AddCustomer(Customer cust)
        {
            await _customerInterface.AddCustomer(cust);

            return Ok(cust);
        }


        [HttpGet("byCustomerId/{id:int}")]
        public async Task<ActionResult<Customer>> GetCustomerById(int id)
        {
            var cust_list = await _customerInterface.GetCustomerById(id);

            return cust_list == null ? NotFound() : cust_list;

        }

        [HttpGet("/byemail/{emailid}")]

        public async Task<ActionResult<Customer>> GetCustomerByEmailId(string emailid)
        {
            var cust_list = await _customerInterface.GetCustomerByEmailId(emailid);

            return cust_list == null ? NotFound() : cust_list;
        }



        [HttpGet]
        public async Task<ActionResult<IEnumerable<Customer>>?> GetAllCustomers()
        {
            if (await _customerInterface.GetAllCustomers() == null)
            {
                return NotFound();
            }

            return await _customerInterface.GetAllCustomers();
        }


        [HttpGet("login/{email}/{password}")]
        public bool Login(string email, string password)
        {
            return _customerInterface.Login(email, password);
        }


    }
}
