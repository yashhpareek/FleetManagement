using Microsoft.EntityFrameworkCore.Migrations;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace pro3.Models
{
    public class Hub
    {
        [Key]
        [Column(name: "Hub_Id")]
        public int? HubId { get; set; }

        [Required]
        [Column(name: "Hub_Name")]
        public string HubName { get; set; }

        [Column(name: "Hub_Address_and_Details", TypeName = "text")]
        public string HubAddressAndDetails { get; set; }

        [Column(name: "Contact_Number")]
        public long ContactNumber { get; set; }

        [ForeignKey("City")]
        [Column(name: "City_Id")]
        public int? CityId { get; set; }

        [ForeignKey("State")]
        [Column(name: "State_Id")]
        public int? StateId { get; set; }

        public virtual City? City { get; set; }

        public virtual State? State { get; set; }
    }
}
