

import React, { useState } from "react";

export default function LoginComponent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // const handleLogin = () => { 
  //   const url = `https://localhost:7185/api/Customer/login/${encodeURIComponent(email)}/${encodeURIComponent(password)}`;

  //   fetch(url)
  //     .then(response => response.json())
  //     .then(data => {
  //       if (data) {
  //         sessionStorage.setItem('isLoggedIn', true);
  //         fetchCustomerData(email);
  //         if (sessionStorage.getItem('continuekaro') === 'true') {
  //           window.location.href = '/ConfirmBooking';
  //         } else {
  //           window.location.href = '/BookingForm';
  //         }
  //       } else {
  //         alert('Login failed');
  //       }
  //     })
  //     .catch(error => {
  //       console.error('Error:', error);
  //       alert('An error occurred while logging in. Please try again later.');
  //     });
  // };
  const handleLogin = async () => {
    const url = `https://localhost:7185/api/Customer/login/${encodeURIComponent(email)}/${encodeURIComponent(password)}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data) {
        sessionStorage.setItem('isLoggedIn', true);
        await fetchCustomerData(email);
  
        if (sessionStorage.getItem('continuekaro') === 'true') {
          window.location.href = '/ConfirmBooking';
        } else {
          window.location.href = '/BookingForm';
        }
      } else {
        alert('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while logging in. Please try again later.');
    }
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password.length < 2) {
      setPasswordError('Password must be at least 8 characters long');
      return;
    }
    setPasswordError('');
    handleLogin();
  };
  const handleSubmit1 = (event) => {
    window.location.href = '/CustomerForm';
  };
  
  const fetchCustomerData = async (email) => {
    const url = `https://localhost:7185/byemail/${encodeURIComponent(email)}`;

    fetch(url)
      .then(response => response.json())
      .then(customerData => {
        // Store customer data in session storage
        sessionStorage.setItem('customerData', JSON.stringify(customerData));
      })
      .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while fetching customer data.');
      });
  };

  return (
    <div 
      className="d-flex justify-content-center align-items-center" 
      style={{ 
        minHeight: "100vh", 
        background: `url('https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2') no-repeat center center fixed`, 
        backgroundSize: 'cover',
      }}
    >
      <div className="col-md-6">
        <div className="card" style ={{opacity:"0.9"}} >
          <div className="card-body"  style={{ backgroundColor:"steelblue" }}>
            <h2 className="card-title">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {passwordError && <div className="invalid-feedback">{passwordError}</div>}
              </div>
              <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Log in</button>
              <button type="submit" className="btn btn-primary" onClick={handleSubmit1}>Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
