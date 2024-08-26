using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using pro3.Models;

namespace pro3.DAL.INVOICE
{
    public class InvoiceRepository : IInvoiceInterface
    {

        private readonly Appdbcontext _appDbContext;
        public InvoiceRepository(Appdbcontext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public async Task<ActionResult<Invoice>> adddInvoice(Invoice invoice)
        {
            _appDbContext.Invoice.Add(invoice);
            await _appDbContext.SaveChangesAsync();
            return invoice;
        }

        public async Task<ActionResult<List<Invoice>>> getbillingbybookid(int id)
        {
            var invoices = await _appDbContext.Invoice.Where(i => i.BookingId == id).ToListAsync();
            return invoices;
        }

        public async Task<ActionResult<List<Invoice>>> getbillingbyEmailid(string Email)
        {
            
           
            var invoices = await _appDbContext.Invoice.Where(i => i.CEmailId == Email && i.IsReturned != "1").ToListAsync();
            
            return invoices;
        }

        public async Task<ActionResult<Invoice>> update(double totalAddonAmount, double totalAmount, double rentalAmount, long invoiceId)
        {
            var invoice = await _appDbContext.Invoice.FindAsync((int)invoiceId);
            if (invoice != null)
            {
                invoice.TotalAddonAmount = totalAddonAmount;
                invoice.TotalAmount = totalAmount;
                invoice.RentalAmount = rentalAmount;
                invoice.IsReturned = "1";
                await _appDbContext.SaveChangesAsync();
            }
            return invoice;
        }
    }
}
