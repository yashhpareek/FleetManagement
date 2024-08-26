using pro3.Models;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace pro3.Models
{
    public class Airport
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int AirportId { get; set; }

        [Required]
        [MaxLength(255)]
        public string AirportCode { get; set; }

        [Required]
        [MaxLength(255)]
        public string AirportName { get; set; }

        [ForeignKey("CityId")]
        public int? CityId { get; set; }

        [ForeignKey("StateId")]
        public int? StateId { get; set; }

        [ForeignKey("HubId")]
        public int? HubId { get; set; }

        public virtual City? City { get; set; }

        public virtual State? State { get; set; }

        public virtual Hub? Hub { get; set; }
    }
}
