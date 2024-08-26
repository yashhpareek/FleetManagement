using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace pro3.Models
{
    public class Customer
    {
        [Key]
        [Column(name: "Customer_Id")]
        public int CustomerId { get; set; }

        [Required]
        [Column(name: "First_Name")]
        public string FirstName { get; set; }

        [Required]
        [Column(name: "Last_Name")]
        public string LastName { get; set; }

        [Column(name: "Address_Line1")]
        public string AddressLine1 { get; set; }

        [Column(name: "Address_Line2")]
        public string AddressLine2 { get; set; }

        [Required]
        [EmailAddress]
        [Column(name: "Email")]
        public string Email { get; set; }

        [Column(name: "City")]
        public string City { get; set; }

        [Column(name: "Pincode")]
        public string Pincode { get; set; }

        [Column(name: "Phone_Number")]
        public string PhoneNumber { get; set; }

        [Column(name: "Mobile_Number")]
        public string MobileNumber { get; set; }

        [Column(name: "Credit_Card_Type")]
        public string CreditCardType { get; set; }

        [Column(name: "Credit_Card_Number")]
        public string CreditCardNumber { get; set; }

        [Column(name: "Driving_License_Number")]
        public string DrivingLicenseNumber { get; set; }

        [Column(name: "Idp_Number")]
        public string IdpNumber { get; set; }

        [Column(name: "Issued_By_DL")]
        public string IssuedByDL { get; set; }

        [Column(name: "Valid_Through_DL")]
        public DateTime ValidThroughDL { get; set; }

        [Column(name: "Passport_Number")]
        public string PassportNumber { get; set; }

        [Column(name: "Passport_Valid_Through")]
        public DateTime PassportValidThrough { get; set; }

        [Column(name: "Passport_Issued_By")]
        public string PassportIssuedBy { get; set; }

        [Column(name: "Passport_Valid_From")]
        public DateTime PassportValidFrom { get; set; }

        [Column(name: "Passport_Issue_Date")]
        public DateTime PassportIssueDate { get; set; }

        [Column(name: "Date_Of_Birth")]
        public DateTime DateOfBirth { get; set; }

        [Required]
        [Column(name: "Password")]
        public string Password { get; set; }
    }
}
