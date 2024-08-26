import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const StaffHandOver = () => {
  const [emailId, setEmailId] = useState('');
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showCars, setShowCars] = useState(false);
  const [cars, setCars] = useState([]);

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://localhost:7185/api/booking/byemail/${emailId}`);

      if (response.ok) {
        const data = await response.json();
        console.log('API Response - Bookings:', data);
        setBookings(data);
      } else {
        console.error('Failed to fetch bookings:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchBookingDetails = async (bookingId) => {
    try {
      const response = await fetch(`https://localhost:7185/api/bookingdetail/bybookingid/${bookingId}`);

      if (response.ok) {
        const data = await response.json();
        console.log('API Response - BookingDetails:', data);
        sessionStorage.setItem('bookingDetailsofadon', JSON.stringify(data));

        console.log(sessionStorage.getItem('bookingDetails'));
      } else {
        console.error('Failed to fetch BookingDetails:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching BookingDetails:', error);
    }
  };

  const deleteBooking = async () => {
    try {
      const bookingDetails = JSON.parse(sessionStorage.getItem('bookingDetails'));
      if (bookingDetails && bookingDetails.bookingId) {
        // Fetch BookingDetails using bookingId from session storage

      const response = await fetch(`https://localhost:7185/api/booking/${bookingDetails.bookingId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('Booking deleted successfully.');
      } else {
        console.error('Failed to delete booking:', response.statusText);
      }
    }
   } catch (error) {
      console.error('Error deleting booking:', error);
    }
  };

  const fetchCars = async (hub, cartype) => {
    try {
      setLoading(true);
      const CarType_ID = cartype;
      const hub_id = hub;
      console.log('hub - ', hub);
      console.log('carTypeId - ', CarType_ID);

      const response = await fetch(`https://localhost:7185/api/Car/cars/${hub_id}/${cartype}`);
      console.log('response - ', response)

      if (response.ok) {
        const data = await response.json();
        console.log('API Response - Cars:', data);
        setCars(data);
        setShowCars(true);
      } else {
        console.error('Failed to fetch cars:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching cars:', error);
    } finally {
      setLoading(false);
    }
  };

  const storeBookingInSessionStorage = (booking) => {
    sessionStorage.setItem('bookingDetails', JSON.stringify(booking));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchBookings();
  };

  const handleBookButtonClick = async (booking) => {
    if (booking.p_HubId && booking.carType && booking.carType.carTypeId) {
      storeBookingInSessionStorage(booking);
      fetchCars(booking.p_HubId, booking.carType.carTypeId);
    } else {
      console.error('Invalid booking data:', booking);
    }
  };


  const handleSelectButtonClick = async (selectedCar) => {
    try {
      setLoading(true);
  
      // Store selected car in sessionStorage
      sessionStorage.setItem('selectedCar', JSON.stringify(selectedCar));
  
      const bookingDetails = JSON.parse(sessionStorage.getItem('bookingDetails'));
      if (bookingDetails && bookingDetails.bookingId) {
        // Fetch BookingDetails using bookingId from session storage
        await fetchBookingDetails(bookingDetails.bookingId);
  
        // Update car availability
        const response = await fetch(`https://localhost:7185/api/Car/car/update/${selectedCar.carId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ is_Available: '0' }),
        });
  
        if (response.ok) {
          console.log('Car availability updated successfully.');
  
          console.log("deleting--- ", bookingDetails.bookingId);
          // Delete booking data from the booking table
          await deleteBooking(bookingDetails.bookingId);
  
          const updatedCars = cars.map((car) =>
            car.carId === selectedCar.carId ? { ...car, is_Available: '0' } : car
          );
          setCars(updatedCars);
          createAndSendInvoice();
        } else {
          console.error('Failed to update car availability:', response.statusText);
        }
      } else {
        console.error('Invalid booking data in session storage:', bookingDetails);
      }
    } catch (error) {
      console.error('Error updating car availability:', error);
    } finally {
      setLoading(false);
    }
  };
  

  // function createAndSendInvoice() {
  //   // Retrieve data from sessionStorage
  //   const selectedCar = JSON.parse(sessionStorage.getItem('selectedCar'));
  //   const bookingDetails = JSON.parse(sessionStorage.getItem('bookingDetails'));
  
  //   // Create the invoice object
  //   const invoice = {
  //     invoiceId: 10,
  //     empName: "xyz",
  //     cName: "Ritik",
  //     cEmailId: "1@gmail.com",
  //     cMobileNo: "999999999",
  //     cAadharNo: "11111",
  //     cPassNo: "111",
  //     rentalAmount: 32114.285714285714,
  //     totalAmount: 34214.0,
  //     totalAddonAmount: 2100.0,
  //     rate: 100.0,
  //     startDate: "2024-04-01T00:00:00",
  //     handoverDate: "2024-04-10T00:00:00",
  //     endDate: "2024-02-17T00:41:17",
  //     booking: {
  //       bookingId: bookingDetails.bookingId,
  //       bookingDate: bookingDetails.bookingDate,
  //       customer: bookingDetails.customer,
  //       startDate: bookingDetails.startDate,
  //       endDate: bookingDetails.endDate,
  //       carType: bookingDetails.carType,
  //       firstName: bookingDetails.firstName,
  //       lastName: bookingDetails.lastName,
  //       address: bookingDetails.address,
  //       state: bookingDetails.state,
  //       pin: bookingDetails.pin,
  //       dailyRate: bookingDetails.dailyRate,
  //       weeklyRate: bookingDetails.weeklyRate,
  //       monthlyRate: bookingDetails.monthlyRate,
  //       emailId: bookingDetails.emailId,
  //       p_hubId: bookingDetails.p_hubId,
  //       r_hubId: bookingDetails.r_hubId
  //     },
  //     car: selectedCar,
  //     customer: {
  //       customerId: bookingDetails.customer.customerId,
  //       firstName: bookingDetails.customer.firstName,
  //       lastName: bookingDetails.customer.lastName,
  //       addressLine1: bookingDetails.customer.addressLine1,
  //       addressLine2: bookingDetails.customer.addressLine2,
  //       email: bookingDetails.customer.email,
  //       city: bookingDetails.customer.city,
  //       pincode: bookingDetails.customer.pincode,
  //       phoneNumber: bookingDetails.customer.phoneNumber,
  //       mobileNumber: bookingDetails.customer.mobileNumber,
  //       creditCardType: bookingDetails.customer.creditCardType,
  //       creditCardNumber: bookingDetails.customer.creditCardNumber,
  //       drivingLicenseNumber: bookingDetails.customer.drivingLicenseNumber,
  //       idpNumber: bookingDetails.customer.idpNumber,
  //       issuedByDL: bookingDetails.customer.issuedByDL,
  //       validThroughDL: bookingDetails.customer.validThroughDL,
  //       passportNumber: bookingDetails.customer.passportNumber,
  //       passportValidThrough: bookingDetails.customer.passportValidThrough,
  //       passportIssuedBy: bookingDetails.customer.passportIssuedBy,
  //       passportValidFrom: bookingDetails.customer.passportValidFrom,
  //       passportIssueDate: bookingDetails.customer.passportIssueDate,
  //       dateOfBirth: bookingDetails.customer.dateOfBirth,
  //       password: bookingDetails.customer.password
  //     },
  //     p_hubId: bookingDetails.p_hubId,
  //     r_hubId: bookingDetails.r_hubId,
  //     isReturned: "N"
  //   };
  
  //   console.log('Invoice:', invoice);
  //   // Send data to server
  //   fetch('http://localhost:8080/invoice', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(invoice)
  //   })
  //   .then(response => {
  //     if (response.ok) {
  //       console.log('Invoice sent successfully');
  //     } else {
  //       console.error('Failed to send invoice:', response.statusText);
  //     }
  //   })
  //   .catch(error => {
  //     console.error('Error sending invoice:', error);
  //   });
  // }
  
// Function to calculate total amount based on rental period and daily rate
function calculateTotalAmount(startDate, endDate, dailyRate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const days = (end - start) / (1000 * 60 * 60 * 24);
  return days * dailyRate;
}

// Function to format date as "YYYY-MM-DDTHH:MM:SS"
function formatDate(dateString) {
  const date = new Date(dateString);
  const formattedDate = date.toISOString().split('.')[0];
  return formattedDate;
}

function createAndSendInvoice() {
  // Retrieve data from sessionStorage
  const selectedCar = JSON.parse(sessionStorage.getItem('selectedCar'));
  const bookingDetails = JSON.parse(sessionStorage.getItem('bookingDetails'));

  // Ensure selectedCar is retrieved correctly
  if (!selectedCar) {
      console.error('Error: selectedCar is undefined');
      return;
  }

  // Extract relevant information from bookingDetails
  const customer = bookingDetails.customer;
  const rentalAmount = bookingDetails.dailyRate; // Assuming rental amount is based on daily rate
  const totalAmount = calculateTotalAmount(bookingDetails.startDate, bookingDetails.endDate, rentalAmount);
  const totalAddonAmount = 0; // Assuming no addons for now

  // Format dates
  const formattedStartDate = formatDate(bookingDetails.startDate);
  const formattedEndDate = formatDate(bookingDetails.endDate);

  // Get current date and format it
  const formattedCurrentDate = formatDate(new Date().toISOString());

  // Create the invoice object
  const invoice = {
      "empName": "ADMIN",
      "cName": `${customer.firstName} ${customer.lastName}`,
      "cEmailId": customer.email,
      "cMobileNo": customer.mobileNumber,
      "cAadharNo": "1234566", // You need to get this information from somewhere
      "cPassNo": customer.passportNumber,
      "rentalAmount": rentalAmount,
      "totalAmount": totalAmount,
      "totalAddonAmount": totalAddonAmount,
      "rate": rentalAmount,
      "startDate": formattedStartDate,
      "handoverDate": formattedCurrentDate,
      "endDate": formattedEndDate,
      "bookingId": bookingDetails.bookingId,
      "carid": selectedCar.carId, // Ensure selectedCar.carId is not undefined
      "customerid": customer.customerId,
      "pHubId": bookingDetails.p_HubId,
      "rHubId": bookingDetails.r_HubId,
      "isReturned": "0" // Assuming the car is returned at the end of the rental period
  };

  console.log('Invoice:', invoice);
  // Send data to server
  fetch('https://localhost:7185/api/Invoice/invoice', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(invoice)
})
.then(response => {
    if (response.ok) {
        return response.json(); // Parse response JSON
    } else {
        throw new Error('Failed to send invoice: ' + response.statusText);
    }
})
.then(data => {
    // Assuming the server responds with session data in JSON format
    // Store the session data in the browser's session storage
    sessionStorage.setItem('InvoiceData', JSON.stringify(data));
    console.log('Invoice sent successfully and session data stored:');
    sendInvoiceDetails();
})
.catch(error => {
    console.error('Error sending invoice:', error);
});

}

// function sendInvoiceDetails() {
//   // Parse the bookingDetails from sessionStorage
//   const bookingDetails = JSON.parse(sessionStorage.getItem('bookingDetails'));
//   const invoiceData = JSON.parse(sessionStorage.getItem('InvoiceData'));

//   // Loop through each addon in the bookingDetails
//   console.log('bookingDetails', bookingDetails);
//   bookingDetails.bookingDetails.forEach(detail => {
//       const data = {
//            "invoiceId": invoiceData['value']['invoiceId'],
//            "addonId": bookingDetails['bookingDetails'][0]['addonId'],
//            "addonRate": bookingDetails['bookingDetails'][0]['addonRate'],
//            "invoice": null
//       };
//       console.log('Data:', data);

//       // Send data to server
//       fetch('https://localhost:7185/api/', {
//           method: 'POST',
//           headers: {
//               'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(data)
//       })
//       .then(response => {
//           if (response.ok) {
//               console.log('Data sent successfully for addon_id:', detail.addonId);
//               alert('SUCCESS...redirecting to home page after 5 seconds...');
//         // Redirect to home after 5 seconds
//         setTimeout(function() {
//             window.location.href = "/StaffPage";
//         }, 5000);

//           } else {
//               console.error('Failed to send data for addon_id:', detail.addonId, 'Response:', response.statusText);
//           }
//       })
//       .catch(error => {
//           console.error('Error sending data for addon_id:', detail.addonId, 'Error:', error);
//       });
//   });
// }
function sendInvoiceDetails() {
  // Parse the bookingDetails from sessionStorage
  const bookingDetails = JSON.parse(sessionStorage.getItem('bookingDetails'));
  const invoiceData = JSON.parse(sessionStorage.getItem('InvoiceData'));

  // Loop through each addon in the bookingDetails
  console.log('bookingDetails', bookingDetails);
  bookingDetails.bookingDetails.forEach(detail => {
      const data = {
           "invoiceId": invoiceData['value']['invoiceId'],
           "addonId": detail['addonId'],
           "addonRate": detail['addonRate'],
           "invoice": null
      };
      console.log('Data:', data);

      // Send data to server
      fetch('https://localhost:7185/api/', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      })
      .then(response => {
          if (response.ok) {
              console.log('Data sent successfully for addon_id:', detail.addonId);
              alert('SUCCESS...redirecting to home page after 5 seconds...');
              // Redirect to home after 5 seconds
              setTimeout(function() {
                  window.location.href = "/StaffPage";
              }, 5000);

          } else {
              console.error('Failed to send data for addon_id:', detail.addonId, 'Response:', response.statusText);
          }
      })
      .catch(error => {
          console.error('Error sending data for addon_id:', detail.addonId, 'Error:', error);
      });
  });
}

// Call the function


// Call the function to send invoice details to the server


  // Call the function to create and send the invoice
 
  
  
  // Call the function to create the invoice
  
  
  return (
    <Container fluid className="p-0" style={{ backgroundImage: `url("https://images.pexels.com/photos/4467735/pexels-photo-4467735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`, backgroundSize: 'cover', minHeight: '100vh' }}>
    {/* <div className="container mt-5 text-center"> */}
    <div className="container mt-0 text-center" style={{ width: '50%', margin: '50px auto', opacity:0.9, background: 'linear-gradient(45deg, black, transparent)', color:'ButtonHighlight', marginTop:'20px', marginBottom:'20px' }}>
      <h2 >Enter Customer's Email</h2>
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          Submit
        </button>
      </form>
      {loading && <p>Loading...</p>}

      {bookings.length > 0 && (
        <div>
          <h3>Bookings</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Booking Id</th>
                <th>First Name</th>
                <th>Booking Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.bookingId}</td>
                  <td>{booking.firstName}</td>
                  <td>{booking.bookingDate}</td>
                  <td>
                    <button
                      className="btn btn-success"
                      onClick={() => handleBookButtonClick(booking)}
                    >
                      Book
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showCars && (
        <div>
          <h3>Cars</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Car ID</th>
                <th>Car Name</th>
                <th>Car Number</th>
                <th>Select</th>
                {/* Add more columns as needed */}
              </tr>
            </thead>
            <tbody>
              {cars.map((car) => (
                <tr key={car.carId}>
                  <td>{car.carId}</td>
                  <td>{car.carName}</td>
                  <td>{car.numberPlate}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleSelectButtonClick(car)}
                    >
                      Select
                    </button>
                  </td>
                  {/* Add more cells based on the data structure */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
     </Container>
  );
};

export default StaffHandOver;
