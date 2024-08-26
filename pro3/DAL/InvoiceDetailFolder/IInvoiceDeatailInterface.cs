using Microsoft.AspNetCore.Mvc;
using pro3.Models;

namespace pro3.DAL.InvoiceDetailFolder
{
    public interface IInvoiceDeatailInterface
    {
        Task<ActionResult<IEnumerable<InvoiceDetail>>> GetInvoiceDetailById(int id);
        Task<ActionResult<InvoiceDetail>> AddInvoiceDetail(InvoiceDetail invoiceDetail);
    }
}
