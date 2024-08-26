using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace pro3.Models
{
    public class Addon
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int AddOnId { get; set; }

        [Required]
        [MaxLength(255)]
        public string AddOnName { get; set; }

        [Required]
        [Column(TypeName = "decimal(18,2)")]
        public decimal AddOnDailyRate { get; set; }

        [Required]
        public DateTime RateValidUntil { get; set; }
    }
}
