using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using pro3.DAL.BOOKINGDETAIL;
using pro3.Models;

namespace pro3.Controllers
{
    [Route("api/bookingdetail")]
    [ApiController]
    [EnableCors]
    public class BookingDetailConntroller : ControllerBase
    {
        private readonly IBookingDetailInterfacecs bookingdetail;

        public BookingDetailConntroller(IBookingDetailInterfacecs bookingdetail)
        {
            this.bookingdetail = bookingdetail;
        }

        [HttpGet("bybookingid/{id}")]
        public async Task<ActionResult<IEnumerable<BookingDetail>>> GetBookingDetailByBookingId(int id)
        {
            var booking_list = await bookingdetail.getallbookingbybookingid(id);
            return booking_list;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<BookingDetail>>> GetBookingDetail()
        {
            var booking_list = await bookingdetail.getallbookingdetail();
            return booking_list;
        }

        [HttpPost]
        public async Task<ActionResult<BookingDetail>> PostBookingDetail(BookingDetail bookingdetail)
        {
            var booking_list = await this.bookingdetail.AddBookingDetail(bookingdetail);
            return Ok(booking_list);
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<BookingDetail>> DeleteBookingDetail(int id)
        {
            var booking_list = await this.bookingdetail.DeleteBookingDetail(id);
            return Ok(booking_list);
        }
    }
}
