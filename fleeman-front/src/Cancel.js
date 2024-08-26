import React, { useState, useEffect } from 'react';

const Cancel = () => {
  const [emailId, setEmailId] = useState('');
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deletingBookingId, setDeletingBookingId] = useState(null);

  useEffect(() => {
    // Retrieve email from sessionStorage
    const customerData = sessionStorage.getItem('customerData');
    if (customerData) {
      const customerObject = JSON.parse(customerData);
      const email = customerObject.email;
      setEmailId(email);
    }
  }, []);

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:8080/api/booking/email/${emailId}`);

      if (response.ok) {
        const data = await response.json();
        console.log('API Response:', data);
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

  const handleDeleteBooking = async (deletingBookingId) => {
    try {
      setDeletingBookingId(deletingBookingId); // Set the bookingId being deleted
      const response = await fetch(`http://localhost:8080/api/deletebooking/${deletingBookingId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Update the state or perform additional actions if needed
        console.log('Booking successfully canceled:', deletingBookingId);
        // After deletion, fetch updated bookings
        deleteadons(deletingBookingId);
        fetchBookings();
      } else {
        console.error('Failed to cancel booking:', response.statusText);
      }
    } catch (error) {
      console.error('Error canceling booking:', error);
    } finally {
      setDeletingBookingId(null); // Reset the deletingBookingId
    }
  };

  function deleteadons(deletingBookingId) {
    // Construct the URL with the deletingBookingId
    var url = 'http://localhost:8080/bookingdetails/' + deletingBookingId;

    // Make a GET request to the booking details endpoint
    fetch(url)
      .then(response => {
        if (response.ok) {
          // Parse the JSON response
          return response.json();
        } else {
          // Handle errors
          throw new Error('Failed to fetch booking details. Status code: ' + response.status);
        }
      })
      .then(data => {
        // Process the retrieved data
        console.log('Booking details:', data);
        // You can further process the data here
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  return (
    <div className="container-fluid mt-0 text-center" style={{padding:'80px' , backgroundColor:'aliceblue'}}>
      <h2>Getting booking with this Email: {emailId}</h2>
      <button className="btn btn-primary mb-3" onClick={fetchBookings}>
        Fetch Bookings
      </button>
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
                      className="btn btn-danger"
                      onClick={() => handleDeleteBooking(booking.bookingId)}
                      disabled={deletingBookingId === booking.id} // Disable button during deletion
                    >
                      {deletingBookingId === booking.id ? 'Deleting...' : 'Delete'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <p>Your are able to cancel only those bookings which are linked to this Email...</p>
      <p>For any other queries, please contact our customer care...</p>
    </div>
  );
};

export default Cancel;
