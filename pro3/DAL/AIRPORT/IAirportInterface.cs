using pro3.Models;

namespace pro3.DAL.AriportFolder
{
    public interface IAirportInterface
    {
        Task<List<Airport>> GetAllAirport();
        Task<Airport> GetAirportById(int id);
        Task<List<string>> GetAllAirportCodes();
    }
}
