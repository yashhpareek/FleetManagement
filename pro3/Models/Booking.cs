using Microsoft.AspNetCore.SignalR;
using pro3.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace pro3.Models
{
    public class Booking
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long BookingId { get; set; }

        [Required]
        [DataType(DataType.Date)]
        public DateTime BookingDate { get; set; }

        [ForeignKey("CustomerId")]
        public int CustomerId { get; set; }

        public virtual Customer? Customer { get; set; }

        [DataType(DataType.Date)]
        public DateTime StartDate { get; set; }

        [DataType(DataType.Date)]
        public DateTime EndDate { get; set; }

        [ForeignKey("CarTypeId")]
        public long CarTypeId { get; set; }

        public virtual CarType? CarType { get; set; }

        [MaxLength(255)]
        public string FirstName { get; set; }

        [MaxLength(255)]
        public string LastName { get; set; }

        [MaxLength(255)]
        public string Address { get; set; }

        [MaxLength(255)]
        public string State { get; set; }

        [MaxLength(10)]
        public string Pin { get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public decimal DailyRate { get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public decimal WeeklyRate { get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public decimal MonthlyRate { get; set; }

        [MaxLength(255)]
        [EmailAddress]
        public string EmailId { get; set; }

        [ForeignKey("P_HubId")]
        public int? P_HubId { get; set; }

        [ForeignKey("R_HubId")]
        public int? R_HubId { get; set; }

        public virtual Hub? PickupHub { get; set; }

        public virtual Hub? ReturnHub { get; set; }

        public virtual List<BookingDetail>? BookingDetails { get; set; }
    }
}
