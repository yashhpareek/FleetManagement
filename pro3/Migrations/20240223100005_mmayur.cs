using System;
using Microsoft.EntityFrameworkCore.Migrations;
using MySql.EntityFrameworkCore.Metadata;

#nullable disable

namespace pro3.Migrations
{
    /// <inheritdoc />
    public partial class mmayur : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterDatabase()
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Addon",
                columns: table => new
                {
                    AddOnId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    AddOnName = table.Column<string>(type: "varchar(255)", maxLength: 255, nullable: false),
                    AddOnDailyRate = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    RateValidUntil = table.Column<DateTime>(type: "datetime(6)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Addon", x => x.AddOnId);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "CarType",
                columns: table => new
                {
                    CarTypeId = table.Column<long>(name: "CarType_Id", type: "bigint", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    CarTypeName = table.Column<string>(name: "CarType_Name", type: "longtext", nullable: false),
                    DailyRate = table.Column<double>(name: "Daily_Rate", type: "double", nullable: false),
                    WeeklyRate = table.Column<double>(name: "Weekly_Rate", type: "double", nullable: false),
                    MonthlyRate = table.Column<double>(name: "Monthly_Rate", type: "double", nullable: false),
                    ImagePath = table.Column<string>(name: "Image_Path", type: "longtext", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CarType", x => x.CarTypeId);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Customer",
                columns: table => new
                {
                    CustomerId = table.Column<int>(name: "Customer_Id", type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    FirstName = table.Column<string>(name: "First_Name", type: "longtext", nullable: false),
                    LastName = table.Column<string>(name: "Last_Name", type: "longtext", nullable: false),
                    AddressLine1 = table.Column<string>(name: "Address_Line1", type: "longtext", nullable: false),
                    AddressLine2 = table.Column<string>(name: "Address_Line2", type: "longtext", nullable: false),
                    Email = table.Column<string>(type: "longtext", nullable: false),
                    City = table.Column<string>(type: "longtext", nullable: false),
                    Pincode = table.Column<string>(type: "longtext", nullable: false),
                    PhoneNumber = table.Column<string>(name: "Phone_Number", type: "longtext", nullable: false),
                    MobileNumber = table.Column<string>(name: "Mobile_Number", type: "longtext", nullable: false),
                    CreditCardType = table.Column<string>(name: "Credit_Card_Type", type: "longtext", nullable: false),
                    CreditCardNumber = table.Column<string>(name: "Credit_Card_Number", type: "longtext", nullable: false),
                    DrivingLicenseNumber = table.Column<string>(name: "Driving_License_Number", type: "longtext", nullable: false),
                    IdpNumber = table.Column<string>(name: "Idp_Number", type: "longtext", nullable: false),
                    IssuedByDL = table.Column<string>(name: "Issued_By_DL", type: "longtext", nullable: false),
                    ValidThroughDL = table.Column<DateTime>(name: "Valid_Through_DL", type: "datetime(6)", nullable: false),
                    PassportNumber = table.Column<string>(name: "Passport_Number", type: "longtext", nullable: false),
                    PassportValidThrough = table.Column<DateTime>(name: "Passport_Valid_Through", type: "datetime(6)", nullable: false),
                    PassportIssuedBy = table.Column<string>(name: "Passport_Issued_By", type: "longtext", nullable: false),
                    PassportValidFrom = table.Column<DateTime>(name: "Passport_Valid_From", type: "datetime(6)", nullable: false),
                    PassportIssueDate = table.Column<DateTime>(name: "Passport_Issue_Date", type: "datetime(6)", nullable: false),
                    DateOfBirth = table.Column<DateTime>(name: "Date_Of_Birth", type: "datetime(6)", nullable: false),
                    Password = table.Column<string>(type: "longtext", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Customer", x => x.CustomerId);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Invoice",
                columns: table => new
                {
                    InvoiceId = table.Column<int>(name: "Invoice_Id", type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    EmpName = table.Column<string>(name: "Emp_Name", type: "longtext", nullable: false),
                    CName = table.Column<string>(name: "C_Name", type: "longtext", nullable: false),
                    CEmailId = table.Column<string>(name: "C_EmailId", type: "longtext", nullable: false),
                    CMobileNo = table.Column<string>(name: "C_MobileNo", type: "longtext", nullable: false),
                    CAadharNo = table.Column<string>(name: "C_AadharNo", type: "longtext", nullable: false),
                    CPassNo = table.Column<string>(name: "C_PassNo", type: "longtext", nullable: false),
                    RentalAmount = table.Column<double>(name: "Rental_Amount", type: "double", nullable: false),
                    TotalAmount = table.Column<double>(name: "Total_Amount", type: "double", nullable: false),
                    TotalAddonAmount = table.Column<double>(name: "Total_Addon_Amount", type: "double", nullable: false),
                    Rate = table.Column<double>(type: "double", nullable: false),
                    StartDate = table.Column<DateTime>(name: "Start_Date", type: "datetime(6)", nullable: false),
                    HandoverDate = table.Column<DateTime>(name: "Handover_Date", type: "datetime(6)", nullable: false),
                    EndDate = table.Column<DateTime>(name: "End_Date", type: "datetime(6)", nullable: false),
                    BookingId = table.Column<int>(name: "Booking_Id", type: "int", nullable: false),
                    CarId = table.Column<int>(name: "Car_Id", type: "int", nullable: false),
                    CustomerId = table.Column<int>(name: "Customer_Id", type: "int", nullable: false),
                    PHubId = table.Column<int>(name: "P_Hub_Id", type: "int", nullable: false),
                    RHubId = table.Column<int>(name: "R_Hub_Id", type: "int", nullable: false),
                    IsReturned = table.Column<int>(name: "Is_Returned", type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Invoice", x => x.InvoiceId);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "State",
                columns: table => new
                {
                    StateId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    StateName = table.Column<string>(type: "varchar(255)", maxLength: 255, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_State", x => x.StateId);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "InvoiceDetail",
                columns: table => new
                {
                    InvoiceDetailId = table.Column<int>(name: "Invoice_Detail_Id", type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    InvoiceId = table.Column<int>(name: "Invoice_Id", type: "int", nullable: false),
                    AddonId = table.Column<int>(name: "Addon_Id", type: "int", nullable: false),
                    AddonRate = table.Column<decimal>(name: "Addon_Rate", type: "decimal(18,2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InvoiceDetail", x => x.InvoiceDetailId);
                    table.ForeignKey(
                        name: "FK_InvoiceDetail_Invoice_Invoice_Id",
                        column: x => x.InvoiceId,
                        principalTable: "Invoice",
                        principalColumn: "Invoice_Id",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "City",
                columns: table => new
                {
                    CityId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    CityName = table.Column<string>(type: "varchar(255)", maxLength: 255, nullable: false),
                    StateId = table.Column<int>(name: "State_Id", type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_City", x => x.CityId);
                    table.ForeignKey(
                        name: "FK_City_State_State_Id",
                        column: x => x.StateId,
                        principalTable: "State",
                        principalColumn: "StateId");
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Hub",
                columns: table => new
                {
                    HubId = table.Column<int>(name: "Hub_Id", type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    HubName = table.Column<string>(name: "Hub_Name", type: "longtext", nullable: false),
                    HubAddressandDetails = table.Column<string>(name: "Hub_Address_and_Details", type: "text", nullable: false),
                    ContactNumber = table.Column<long>(name: "Contact_Number", type: "bigint", nullable: false),
                    CityId = table.Column<int>(name: "City_Id", type: "int", nullable: true),
                    StateId = table.Column<int>(name: "State_Id", type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Hub", x => x.HubId);
                    table.ForeignKey(
                        name: "FK_Hub_City_City_Id",
                        column: x => x.CityId,
                        principalTable: "City",
                        principalColumn: "CityId");
                    table.ForeignKey(
                        name: "FK_Hub_State_State_Id",
                        column: x => x.StateId,
                        principalTable: "State",
                        principalColumn: "StateId");
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Airport",
                columns: table => new
                {
                    AirportId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    AirportCode = table.Column<string>(type: "varchar(255)", maxLength: 255, nullable: false),
                    AirportName = table.Column<string>(type: "varchar(255)", maxLength: 255, nullable: false),
                    CityId = table.Column<int>(type: "int", nullable: true),
                    StateId = table.Column<int>(type: "int", nullable: true),
                    HubId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Airport", x => x.AirportId);
                    table.ForeignKey(
                        name: "FK_Airport_City_CityId",
                        column: x => x.CityId,
                        principalTable: "City",
                        principalColumn: "CityId");
                    table.ForeignKey(
                        name: "FK_Airport_Hub_HubId",
                        column: x => x.HubId,
                        principalTable: "Hub",
                        principalColumn: "Hub_Id");
                    table.ForeignKey(
                        name: "FK_Airport_State_StateId",
                        column: x => x.StateId,
                        principalTable: "State",
                        principalColumn: "StateId");
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Booking",
                columns: table => new
                {
                    BookingId = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    BookingDate = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    CustomerId = table.Column<int>(type: "int", nullable: false),
                    StartDate = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    EndDate = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    CarTypeId = table.Column<long>(type: "bigint", nullable: false),
                    FirstName = table.Column<string>(type: "varchar(255)", maxLength: 255, nullable: false),
                    LastName = table.Column<string>(type: "varchar(255)", maxLength: 255, nullable: false),
                    Address = table.Column<string>(type: "varchar(255)", maxLength: 255, nullable: false),
                    State = table.Column<string>(type: "varchar(255)", maxLength: 255, nullable: false),
                    Pin = table.Column<string>(type: "varchar(10)", maxLength: 10, nullable: false),
                    DailyRate = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    WeeklyRate = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    MonthlyRate = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    EmailId = table.Column<string>(type: "varchar(255)", maxLength: 255, nullable: false),
                    PHubId = table.Column<int>(name: "P_HubId", type: "int", nullable: true),
                    RHubId = table.Column<int>(name: "R_HubId", type: "int", nullable: true),
                    PickupHubHubId = table.Column<int>(type: "int", nullable: true),
                    ReturnHubHubId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Booking", x => x.BookingId);
                    table.ForeignKey(
                        name: "FK_Booking_CarType_CarTypeId",
                        column: x => x.CarTypeId,
                        principalTable: "CarType",
                        principalColumn: "CarType_Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Booking_Customer_CustomerId",
                        column: x => x.CustomerId,
                        principalTable: "Customer",
                        principalColumn: "Customer_Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Booking_Hub_PickupHubHubId",
                        column: x => x.PickupHubHubId,
                        principalTable: "Hub",
                        principalColumn: "Hub_Id");
                    table.ForeignKey(
                        name: "FK_Booking_Hub_ReturnHubHubId",
                        column: x => x.ReturnHubHubId,
                        principalTable: "Hub",
                        principalColumn: "Hub_Id");
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Car",
                columns: table => new
                {
                    CarID = table.Column<long>(name: "Car_ID", type: "bigint", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    CarTypeId = table.Column<long>(type: "bigint", nullable: false),
                    CarName = table.Column<string>(name: "Car_Name", type: "longtext", nullable: false),
                    NumberPlate = table.Column<string>(name: "Number_Plate", type: "varchar(50)", maxLength: 50, nullable: false),
                    Status = table.Column<string>(type: "longtext", nullable: false),
                    Capacity = table.Column<int>(type: "int", nullable: false),
                    Mileage = table.Column<double>(type: "double", nullable: false),
                    HubId = table.Column<int>(type: "int", nullable: false),
                    IsAvailable = table.Column<int>(name: "Is_Available", type: "int", nullable: false),
                    MaintenanceDueDate = table.Column<DateTime>(name: "Maintenance_Due_Date", type: "datetime(6)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Car", x => x.CarID);
                    table.ForeignKey(
                        name: "FK_Car_CarType_CarTypeId",
                        column: x => x.CarTypeId,
                        principalTable: "CarType",
                        principalColumn: "CarType_Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Car_Hub_HubId",
                        column: x => x.HubId,
                        principalTable: "Hub",
                        principalColumn: "Hub_Id",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "BookingDetail",
                columns: table => new
                {
                    BookingDetailId = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    BookingId = table.Column<long>(type: "bigint", nullable: false),
                    AddonId = table.Column<long>(type: "bigint", nullable: false),
                    AddonRate = table.Column<decimal>(type: "decimal(18,2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BookingDetail", x => x.BookingDetailId);
                    table.ForeignKey(
                        name: "FK_BookingDetail_Booking_BookingId",
                        column: x => x.BookingId,
                        principalTable: "Booking",
                        principalColumn: "BookingId",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_Airport_CityId",
                table: "Airport",
                column: "CityId");

            migrationBuilder.CreateIndex(
                name: "IX_Airport_HubId",
                table: "Airport",
                column: "HubId");

            migrationBuilder.CreateIndex(
                name: "IX_Airport_StateId",
                table: "Airport",
                column: "StateId");

            migrationBuilder.CreateIndex(
                name: "IX_Booking_CarTypeId",
                table: "Booking",
                column: "CarTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_Booking_CustomerId",
                table: "Booking",
                column: "CustomerId");

            migrationBuilder.CreateIndex(
                name: "IX_Booking_PickupHubHubId",
                table: "Booking",
                column: "PickupHubHubId");

            migrationBuilder.CreateIndex(
                name: "IX_Booking_ReturnHubHubId",
                table: "Booking",
                column: "ReturnHubHubId");

            migrationBuilder.CreateIndex(
                name: "IX_BookingDetail_BookingId",
                table: "BookingDetail",
                column: "BookingId");

            migrationBuilder.CreateIndex(
                name: "IX_Car_CarTypeId",
                table: "Car",
                column: "CarTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_Car_HubId",
                table: "Car",
                column: "HubId");

            migrationBuilder.CreateIndex(
                name: "IX_City_State_Id",
                table: "City",
                column: "State_Id");

            migrationBuilder.CreateIndex(
                name: "IX_Hub_City_Id",
                table: "Hub",
                column: "City_Id");

            migrationBuilder.CreateIndex(
                name: "IX_Hub_State_Id",
                table: "Hub",
                column: "State_Id");

            migrationBuilder.CreateIndex(
                name: "IX_InvoiceDetail_Invoice_Id",
                table: "InvoiceDetail",
                column: "Invoice_Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Addon");

            migrationBuilder.DropTable(
                name: "Airport");

            migrationBuilder.DropTable(
                name: "BookingDetail");

            migrationBuilder.DropTable(
                name: "Car");

            migrationBuilder.DropTable(
                name: "InvoiceDetail");

            migrationBuilder.DropTable(
                name: "Booking");

            migrationBuilder.DropTable(
                name: "Invoice");

            migrationBuilder.DropTable(
                name: "CarType");

            migrationBuilder.DropTable(
                name: "Customer");

            migrationBuilder.DropTable(
                name: "Hub");

            migrationBuilder.DropTable(
                name: "City");

            migrationBuilder.DropTable(
                name: "State");
        }
    }
}
