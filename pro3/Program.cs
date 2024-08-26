
using Microsoft.EntityFrameworkCore;
using pro3.DAL.AddOn;
using pro3.DAL.AriportFolder;
using pro3.DAL.BOOKING;
using pro3.DAL.BOOKINGDETAIL;
using pro3.DAL.CarComponent;
using pro3.DAL.CarTypeFolder;
using pro3.DAL.CustomerComponent;
using pro3.DAL.InvoiceDetailFolder;
using pro3.Models;
using pro3.Models.AddOn;
using project.DAL.CityComponent;
using pro3.DAL.HUB;
using project.DAL.StateComponent;
//using pro3.DAL.Service;
using System.Text.Json.Serialization;
using pro3.DAL.INVOICE;
using EmailApplication.Model;
using EmailApplication.Interface;
using EmailApplication.Service;
//using System.Text.Json.Serialization;

namespace pro3
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            builder.Services.AddTransient<IHubInterface, HubRepository>();
            builder.Services.AddTransient<IBookingDetailInterfacecs, BookingDetailRepositorycs>();
            builder.Services.AddTransient<IBookingInterface, BookingRepository>();
            builder.Services.AddTransient<IAddOnInterface, AddOnRepository>();
            builder.Services.AddTransient<ICarInterface, SQLCarRepository>();
            builder.Services.AddTransient<ICityInterface, CityRepository>();
            builder.Services.AddTransient<ICustomerInterface, SQLCustomerRepository>();
            builder.Services.AddTransient<IInvoiceDeatailInterface, InvoiceDetailRepository>();
            builder.Services.AddTransient<IStateInterface, StateRepository>();
            builder.Services.AddTransient<IAirportInterface, AirportRepository>();
            builder.Services.Configure<MailSettings>(builder.Configuration.GetSection("MailSettings"));
            builder.Services.AddTransient<IMailService, MailService>();
            builder.Services.AddTransient<ICarType, CarTypeRepository>();
            builder.Services.AddTransient<IInvoiceInterface, InvoiceRepository>();
            //  builder.Services.AddTransient<IEmployeeRepository, SQLEmployeeRepository>();

            //  builder.Services.AddTransient<IEmployeeRepository, SQLEmployeeRepository>();
            builder.Services.AddControllers().AddJsonOptions(x =>
                    x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);
            builder.Services.AddDbContext<Appdbcontext>(option => option.UseMySQL("Server=localhost;Database=pro2;user id=root;password=root"));
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("MyAllowSpecificOrigins",
                                  builder =>
                                  {
                                      builder.WithOrigins("*")
                                      .AllowAnyHeader()
                                      .AllowAnyMethod();
                                  });
            });
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();
            app.UseCors("MyAllowSpecificOrigins");


            app.MapControllers();

            app.Run();
        }
    }
}