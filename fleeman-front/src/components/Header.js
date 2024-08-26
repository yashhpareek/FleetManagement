import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem('isLoggedIn') === 'true');

  useEffect(() => {
    // Function to check session storage continuously
    const checkSessionStorage = () => {
      const storedIsLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
      if (storedIsLoggedIn !== isLoggedIn) {
        setIsLoggedIn(storedIsLoggedIn);
      }
    };

    // Check session storage initially
    checkSessionStorage();

    // Check session storage continuously
    const intervalId = setInterval(checkSessionStorage, 1000); // Check every second
    return () => clearInterval(intervalId); // Cleanup interval
  }, [isLoggedIn]); // Run effect when isLoggedIn changes

  const handleLogout = () => {
    sessionStorage.setItem('isLoggedIn', 'false');
    setIsLoggedIn(false);
    sessionStorage.clear();
    window.location.href = "/LoginComponent";
  };
  const handleStaff = () => {
    window.location.href = "/StaffLogin";
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="">IndiaDrive</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/BookingForm">Booking</Nav.Link>
            
            {isLoggedIn && (
              <>
                <Nav.Link as={Link} to="/BookingForm">Modify</Nav.Link>
                <Nav.Link as={Link} to="/Cancel">Cancel</Nav.Link>
                <Nav.Link as={Link} to="/BookingForm">Booking</Nav.Link>
              </>
            )}
            {!isLoggedIn && (
              <Nav.Link as={Link} to="/CustomerForm">Membership</Nav.Link>
            )}
            <Nav.Link as={Link} to="/CustomerCare">Customer Care</Nav.Link>
            <Nav.Link as={Link} to="/AboutUs">About Us</Nav.Link>
            
          </Nav>
          <Nav>
            {isLoggedIn ? (
              <Button variant="outline-light me-2" onClick={handleLogout}>Logout</Button>
            ) : (
              <Button variant="outline-light me-2" as={Link} to="/LoginComponent">Login</Button>
            )}
            <Button variant="outline-light" onClick={handleStaff}>StaffLogin</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
