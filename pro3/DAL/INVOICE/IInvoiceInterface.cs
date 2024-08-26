using Microsoft.AspNetCore.Mvc;

using pro3.Models;


namespace pro3.DAL.INVOICE
{
    public interface IInvoiceInterface
    {
       Task<ActionResult<Invoice>> adddInvoice(Invoice invoice);

        Task<ActionResult<List<Invoice>>> getbillingbybookid(int id);

        Task<ActionResult<List<Invoice>>> getbillingbyEmailid(String Email);

        Task<ActionResult<Invoice>> update(double totalAddonAmount, double totalAmount, double rentalAmount, long invoiceId);

    }
}

