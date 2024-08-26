using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using pro3.DAL.INVOICE;
using pro3.Models;

namespace pro3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InvoiceController : ControllerBase
    {
        private readonly IInvoiceInterface _invoiceRepository;

        public InvoiceController(IInvoiceInterface invoiceRepository)
        {
            _invoiceRepository = invoiceRepository;
        }

        [HttpGet("invoice/{id}")]
        public async Task<ActionResult<List<Invoice>>> GetBillingByBookId(int id)
        {
            var invoices =await _invoiceRepository.getbillingbybookid(id);
           
            return invoices;
        }

        [HttpPost("invoice")]
        public async Task<ActionResult<Invoice>> AddInvoice([FromBody] Invoice invoice)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var addedInvoice = await _invoiceRepository.adddInvoice(invoice);

               return CreatedAtAction(nameof(GetBillingByBookId), new { id = addedInvoice}, addedInvoice);
            

         


        }

        [HttpGet("invoice/email/{email}")]
        public async Task<ActionResult<List<Invoice>>> GetBillingByEmailId(string email)
        {
            var invoices = await _invoiceRepository.getbillingbyEmailid(email);
            
            return invoices;
        }

        [HttpGet("invoice/{totalAddonAmount}/{totalAmount}/{rentalAmount}/{invoiceId}")]
        public async Task<ActionResult> Update(double totalAddonAmount, double totalAmount, double rentalAmount, long invoiceId)
        {
            var updateInvoice= await _invoiceRepository.update(totalAddonAmount, totalAmount, rentalAmount, invoiceId);
            if (updateInvoice == null)
            {
                return NotFound();
            }
            return NoContent();
        }
    }
}