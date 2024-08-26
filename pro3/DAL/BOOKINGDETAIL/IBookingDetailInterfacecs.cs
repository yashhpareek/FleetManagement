using Microsoft.AspNetCore.Mvc;
using pro3.Models;

namespace pro3.DAL.BOOKINGDETAIL
{
    public interface IBookingDetailInterfacecs
    {
        Task<ActionResult<IEnumerable<BookingDetail>>> getallbookingdetail();
        Task<ActionResult<BookingDetail>> AddBookingDetail(BookingDetail bookingdetail);
        Task<ActionResult<Hub>> DeleteBookingDetail(int id);
        Task<ActionResult<IEnumerable<BookingDetail>>> getallbookingbybookingid(int id);

    }
}
