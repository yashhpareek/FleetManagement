using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace pro3.Models
{
    public class State
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int? StateId { get; set; }
        
        [Required]
        [MaxLength(255)]
        public string? StateName { get; set; }
    }
}
