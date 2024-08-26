using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace pro3.Models
{
    public class InvoiceDetail
    {
        [Key]
        [Column(name: "Invoice_Detail_Id")]
        public int InvoiceDetailId { get; set; }

        [Required]
        [ForeignKey("Invoice")]
        [Column(name: "Invoice_Id")]
        public int InvoiceId { get; set; }

        [Required]
        [Column(name: "Addon_Id")]
        public int AddonId { get; set; }

        [Required]
        [Column(name: "Addon_Rate")]
        public decimal AddonRate { get; set; }

        // Navigation properties
        public virtual Invoice? Invoice { get; set; }
    }
}
