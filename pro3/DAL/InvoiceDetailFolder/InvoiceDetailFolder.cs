using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using pro3.Models;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace pro3.DAL.InvoiceDetailFolder
{
    public class InvoiceDetailRepository : IInvoiceDeatailInterface
    {
        private readonly Appdbcontext _context;

        public InvoiceDetailRepository(Appdbcontext context)
        {

            _context = context;
        }

        public async Task<ActionResult<InvoiceDetail>> AddInvoiceDetail(InvoiceDetail invoiceDetail)
        {
            _context.Add(invoiceDetail);
            await _context.SaveChangesAsync();
            return invoiceDetail;
        }

        public async Task<ActionResult<IEnumerable<InvoiceDetail>>> GetInvoiceDetailById(int id)
        {
            var invoiceDetails = await _context.InvoiceDetail
                              .Include(h => h.Invoice)
                              .Where(i => i.InvoiceId == id)
                             .ToListAsync();

            return invoiceDetails;
        }
    }
}