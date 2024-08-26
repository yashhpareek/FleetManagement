using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using pro3.DAL.BOOKING;
using pro3.Models;

namespace pro3.Controllers
{
    [Route("api/booking")]
    [ApiController]
    [EnableCors]
    public class BookingController : ControllerBase
    {
        private readonly IBookingInterface booking;

        public BookingController(IBookingInterface booking)
        {
            this.booking = booking;
        }


        [HttpGet("byemail/{email}")]
        public async Task<ActionResult<IEnumerable<Booking>>> GetBookingByemail(String email)
        {
            var booking_list = await booking.getbookingbyemailid(email);
            return booking_list;
        }

        [HttpPost]
        public async Task<ActionResult<Booking>> PostBooking(Booking booking)
        {
            var booking_list = await this.booking.AddBooking(booking);
            return booking_list;
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<Booking>> DeleteBooking(int id)
        {
            var booking_list = await this.booking.DeleteBooking(id);
            return Ok(booking_list);
        }

    }
}
