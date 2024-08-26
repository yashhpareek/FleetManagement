
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace pro3.Models
{
    public class Car
    {
        [Key]
        [Column(name: "Car_ID")]
        public long CarId { get; set; }

        [ForeignKey("CarTypeId")]
        public long CarTypeId { get; set; }

        public virtual CarType CarType { get; set; }

        [Column(name: "Car_Name")]
        public string CarName { get; set; }

        [Column(name: "Number_Plate")]
        [StringLength(50)]
        public string NumberPlate { get; set; }

        [Column(name: "Status")]
        public string Status { get; set; }

        public int Capacity { get; set; }

        public double Mileage { get; set; }

        [ForeignKey("HubId")]
        public int HubId { get; set; }

        public virtual Hub? Hub { get; set; }

        [Column(name: "Is_Available")]
        public int IsAvailable { get; set; }

        [Column(name: "Maintenance_Due_Date")]
        public DateTime MaintenanceDueDate { get; set; }

        public override bool Equals(object? obj)
        {
            return base.Equals(obj);
        }

        public override int GetHashCode()
        {
            return base.GetHashCode();
        }

        public override string? ToString()
        {
            return base.ToString();
        }

    }
}
