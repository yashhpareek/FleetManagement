using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace pro3.Models
{
    public class Invoice
    {
        [Key]
        [Column(name: "Invoice_Id")]
        public int InvoiceId { get; set; }

        [Required]
        [Column(name: "Emp_Name")]
        public string EmpName { get; set; }

        [Required]
        [Column(name: "C_Name")]
        public string CName { get; set; }

        [Required]
        [Column(name: "C_EmailId")]
        public string CEmailId { get; set; }

        [Required]
        [Column(name: "C_MobileNo")]
        public string CMobileNo { get; set; }

        [Required]
        [Column(name: "C_AadharNo")]
        public string CAadharNo { get; set; }

        [Required]
        [Column(name: "C_PassNo")]
        public string CPassNo { get; set; }

        [Required]
        [Column(name: "Rental_Amount")]
        public double RentalAmount { get; set; }

        [Required]
        [Column(name: "Total_Amount")]
        public double TotalAmount { get; set; }

        [Required]
        [Column(name: "Total_Addon_Amount")]
        public double TotalAddonAmount { get; set; }

        [Required]
        [Column(name: "Rate")]
        public double Rate { get; set; }

        [Required]
        [Column(name: "Start_Date")]
        public DateTime StartDate { get; set; }

        [Required]
        [Column(name: "Handover_Date")]
        public DateTime HandoverDate { get; set; }

        [Required]
        [Column(name: "End_Date")]
        public DateTime EndDate { get; set; }

        [ForeignKey("Booking")]
        [Column(name: "Booking_Id")]
        public int BookingId { get; set; }

        [Required]
        [Column(name: "Car_Id")]
        public int CarId { get; set; }

        [Required]
        [Column(name: "Customer_Id")]
        public int CustomerId { get; set; }

        [Required]
        [Column(name: "P_Hub_Id")]
        public int PHubId { get; set; }

        [Required]
        [Column(name: "R_Hub_Id")]
        public int RHubId { get; set; }

        [Required]
        [Column(name: "Is_Returned")]
        public String IsReturned { get; set; }

        //public enum ReturnStatus
        //{
        //    Y,
        //    N
        //}
    }
}
