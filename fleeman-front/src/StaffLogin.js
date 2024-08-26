import React, { useState } from 'react';
import { useHistory, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import staffpage from './StaffPage';
const StaffLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

const navigate = useNavigate();

  const handleLogin = () => {

    const validUsername = 'admin';
    const validPassword = '123';

    if (username === validUsername && password === validPassword) {

      navigate('/staffpage');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh', // Ensure the background covers the entire viewport
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Background"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'blur(2px)', // Apply blur filter to the background image
        }}
      />

      {/* Staff Login Box */}
      <div className="container">
        <div className="row justify-content-center mt-0 mb-5">
          <div className="col-md-6">
            <div
              className="card"
              style={{
                background:
                  'linear-gradient(to right, rgba(0,0,0,0.4), rgba(0,0,0,0))',
              }}
            >
              <div className="card-body">
                <h2 className="card-title mb-4" style={{color:'white'}}>Staff Login</h2>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label" style={{color:'white'}}>
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label" style={{color:'white'}}>
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {error && <div className="text-danger mb-3">{error}</div>}
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffLogin;
