import React, { useState } from 'react';

const CancelBookingByStaff = () => {
  const [emailId, setEmailId] = useState('');
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deletingBookingId, setDeletingBookingId] = useState(null);

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://localhost:7185/api/booking/byemail/${emailId}`);

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
        console.log(deletingBookingId);
      setDeletingBookingId(deletingBookingId); // Set the bookingId being deleted
      const response = await fetch(`https://localhost:7185/api/booking/${deletingBookingId}`, {
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
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Fetch bookings for the provided email id
    fetchBookings();
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
    <div className="container mt-5 text-center">
      <h2>Enter Customer's Email</h2>
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
    </div>
  );
};

export default CancelBookingByStaff;














// import React, { useState } from 'react';

// const CancelBookingByStaff = () => {
//   const [emailId, setEmailId] = useState('');
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const fetchBookings = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch(`http://localhost:8080/api/booking/email/${emailId}`);

//       if (response.ok) {
//         const data = await response.json();
//         console.log('API Response:', data);
//         setBookings(data);
//       } else {
//         console.error('Failed to fetch bookings:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error fetching bookings:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDeleteBooking = async (bookingId) => {
//     try {
//       const response = await fetch('http://localhost:8080/api/deletebooking/${bookingId}', {
//         method: 'DELETE',
//       });
  
//       if (response.ok) {
//         // Update the state or perform additional actions if needed
//         console.log('Booking successfully canceled:', bookingId);
//         // After deletion, fetch updated bookings
//         fetchBookings();
//       } else {
//         console.error('Failed to cancel booking:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error canceling booking:', error);
//     }
//   };
  
  

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Fetch bookings for the provided email id
//     fetchBookings();
//   };

//   return (
//     <div className="container mt-5 text-center">
//       <h2>Enter Customer's Email</h2>
//       <form onSubmit={handleSubmit} className="mt-3">
//         <div className="mb-3">
//           <input
//             type="email"
//             className="form-control"
//             placeholder="Enter email"
//             value={emailId}
//             onChange={(e) => setEmailId(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-primary" disabled={loading}>
//           Submit
//         </button>
//       </form>
//       {loading && <p>Loading...</p>}

//       {bookings.length > 0 && (
//         <div>
//           <h3>Bookings</h3>
//           <table className="table">
//             <thead>
//               <tr>
//                 <th>Booking Id</th>
//                 <th>First Name</th>
//                 <th>Booking Date</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {bookings.map((booking) => (
//                 <tr key={booking.id}>
//                   <td>{booking.bookingId}</td>
//                   <td>{booking.firstName}</td>
//                   <td>{booking.bookingDate}</td>
//                   <td>
//                     <button
//                       className="btn btn-danger"
//                       onClick={() => handleDeleteBooking(booking.id)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CancelBookingByStaff;
