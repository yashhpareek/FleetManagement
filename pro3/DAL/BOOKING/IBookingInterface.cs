using Microsoft.AspNetCore.Mvc;
using pro3.Models;

namespace pro3.DAL.BOOKING
{
    public interface IBookingInterface
    {
        Task<ActionResult<IEnumerable<Booking>>> getbookingbyemailid(String Email);
        Task<ActionResult<Booking>> AddBooking(Booking booking);
        Task<ActionResult<Hub>> DeleteBooking(int id);
    }
}
