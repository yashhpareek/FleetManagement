using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace pro3.Models
{
    public class BookingDetail
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long BookingDetailId { get; set; }

        [ForeignKey("BookingId")]
        public long BookingId { get; set; }

        public virtual Booking? Booking { get; set; }

        public long AddonId { get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public decimal AddonRate { get; set; }
    }
}
