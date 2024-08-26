using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace pro3.Models
{
    public class CarType
    {
        [Key]
        [Column(name: "CarType_Id")]
        public long CarTypeId { get; set; }

        [Column(name: "CarType_Name")]
        public string CarTypeName { get; set; }

        [Column(name: "Daily_Rate")]
        public double DailyRate { get; set; }

        [Column(name: "Weekly_Rate")]
        public double WeeklyRate { get; set; }

        [Column(name: "Monthly_Rate")]
        public double MonthlyRate { get; set; }

        [Column(name: "Image_Path")]
        public string ImagePath { get; set; }
    }
}
