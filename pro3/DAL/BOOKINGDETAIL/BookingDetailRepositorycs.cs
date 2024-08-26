using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Mysqlx.Crud;
using pro3.Models;

namespace pro3.DAL.BOOKINGDETAIL
{
    public class BookingDetailRepositorycs : IBookingDetailInterfacecs
    {
        public Appdbcontext _context;
        public BookingDetailRepositorycs(Appdbcontext context)
        {
            _context = context;
        }
        public async Task<ActionResult<BookingDetail>> AddBookingDetail(BookingDetail bookingdetail)
        {
            _context.BookingDetail.Add(bookingdetail);
            await _context.SaveChangesAsync();
            return bookingdetail;
        }

        public async Task<ActionResult<Hub>> DeleteBookingDetail(int id)
        {
            
            var booking = await _context.BookingDetail.FindAsync((long)id);
            if (booking == null)
            {
                return null;
            }

            _context.BookingDetail.Remove(booking); 
            await _context.SaveChangesAsync();

            return null;
        }
    

        public async Task<ActionResult<IEnumerable<BookingDetail>>> getallbookingbybookingid(int id)
        {
            var b = await _context.BookingDetail.Where(b => b.BookingId == id).ToListAsync();
            return b;
        }

        public async Task<ActionResult<IEnumerable<BookingDetail>>> getallbookingdetail()
        {
            var list = await _context.BookingDetail.ToListAsync();
            return list;
        }
    }
}
