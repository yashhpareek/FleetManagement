
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StaffPage = () => {
  sessionStorage.setItem("staff", "true");
  const navigate = useNavigate();
  const [customerDetails, setCustomerDetails] = useState(null); // Add this line to define the state

  const handleCancel = () => {
    const shouldCancel = window.confirm("Are you sure you want to cancel?");
    if (shouldCancel) {
      navigate("/CancelBookingByStaff");
    }
  };

  const handleEmailSubmit = (customer) => {
    setCustomerDetails(customer);
  };

  const handleBooking = () => {
    navigate("/BookingByStaff");
  };

  const handleReturn = () => {
    navigate("/Return");
  };

  const handleHandover = () => {
    navigate("/StaffHandOver");
  };

  return  (
    <div className="container-fluid text-center"  
     style={{ 
      minHeight: '100vh', 
     
      backgroundImage: `url('https://images.pexels.com/photos/3124958/pexels-photo-3124958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
    
  }} >
    <h2>Staff Page</h2>
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }} role="group" aria-label="Basic example">
      <button className="btn btn-outline-success me-4 mb-2" onClick={handleBooking}>Booking</button>
      <button className="btn btn-outline-success me-4 mb-2" onClick={handleHandover}>Handover</button>
      <button className="btn btn-outline-success  me-4 mb-2" onClick={handleReturn}>Return</button>
      <button className="btn btn-outline-danger me-4 mb-2" onClick={handleCancel}>Cancel</button>
    </div>
  </div>
  );
};

export default StaffPage;
