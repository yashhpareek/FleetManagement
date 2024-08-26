using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using pro3.Models;

namespace pro3.DAL.BOOKING
{
    public class BookingRepository : IBookingInterface
    {
        private readonly Appdbcontext _appDbContext;
        public BookingRepository(Appdbcontext appDbContext)
        {
            _appDbContext = appDbContext;
        }
        public async Task<ActionResult<Booking>> AddBooking(Booking booking)
        {
            //while posting the data i want to add the data in the database but the booking should be linked to already added customer
            //and car type
            _appDbContext.Booking.Add(booking);
            await _appDbContext.SaveChangesAsync();
            return booking;
        }

        public async Task<ActionResult<Hub>> DeleteBooking(int id)
        {
            //find method is not working in this situation as my idd is long and it is not able to convert it into int
  
            var booking = await _appDbContext.Booking.FindAsync((long)id);

            if (booking == null)
            {
                return null; 
            }

            _appDbContext.Booking.Remove(booking);
            await _appDbContext.SaveChangesAsync();

            return null;
        }

        public async Task<ActionResult<IEnumerable<Booking>>> getbookingbyemailid(string Email)
        {
            //i want every dettail and linked objjects also
            var booking = await _appDbContext.Booking
                .Where(b => b.EmailId == Email).
                Include(b=>b.Customer)
                .Include(b=>b.CarType).
                Include(b=>b.ReturnHub).
                ThenInclude(b=>b.City).
                ThenInclude(b=>b.State).
               Include(b=>b.PickupHub).
                ThenInclude(b=>b.City).
                ThenInclude(b=>b.State).
                Include(b=>b.BookingDetails).
                ToListAsync();

            if (booking == null)
            {
                return null;
            }
            return booking;
        }
    }
}
