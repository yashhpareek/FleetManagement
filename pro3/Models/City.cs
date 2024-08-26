using pro3.Models;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace pro3.Models
{
    public class City
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int? CityId { get; set; }

        [Required]
        [MaxLength(255)]
        public string CityName { get; set; }

        // Foreign key for State
        //public int? StateId { get; set; }
       // [ForeignKey("StateId")]
       // public State? State { get; set; }

        [ForeignKey("State")]
        [Column(name: "State_Id")]
        public int? StateId { get; set; }

        public virtual State? State { get; set; }
    }
}
