using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using pro3.DAL.InvoiceDetailFolder;
using pro3.Models;
using pro3.DAL.HUB;

namespace pro3.Controllers
{
    [Route("api/")]
    [ApiController]
    [EnableCors]
    public class InvoiceDetailController : ControllerBase
    {
        private readonly IInvoiceDeatailInterface _invoiceDetail;

        public InvoiceDetailController(IInvoiceDeatailInterface invoiceDetail)
        {
            _invoiceDetail = invoiceDetail;
        }

        [HttpGet("invoicedetailbyId/{id}")]
        public async Task<ActionResult<IEnumerable<InvoiceDetail>>> GetInvoiceDetailById(int id)
        {
            var billing = await _invoiceDetail.GetInvoiceDetailById(id);

            return billing;

        }

        [HttpPost]
        public async Task<ActionResult<InvoiceDetail>?> SaveBilling(InvoiceDetail invoiceDetail)
        {
            await _invoiceDetail.AddInvoiceDetail(invoiceDetail);

            return CreatedAtAction("GetInvoiceDetailById", new { id = invoiceDetail.InvoiceDetailId }, invoiceDetail);
        }

    }
}
