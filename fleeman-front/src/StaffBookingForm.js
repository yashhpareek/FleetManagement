import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const StaffBookingForm = () => {
    const [formData, setFormData] = useState({
        r_firstName: '',
        r_lastName: '',
        r_addressLine1: '',
        r_addressLine2: '',
        r_email: '',
        r_city: '',
        r_pincode: '',
        r_phoneNumber: '',
        r_mobileNumber: '',
        r_creditCardType: '',
        r_creditCardNumber: '',
        r_drivingLicenseNumber: '',
        r_idpNumber: '',
        r_issuedByDL: '',
        r_validThroughDL: '',
        r_passportNumber: '',
        r_passportValidThrough: '',
        r_passportIssuedBy: '',
        r_passportValidFrom: '',
        r_passportIssueDate: '',
        r_dateOfBirth: '',
    });
    sessionStorage.setItem('continuekaro', true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     try {
    //         sessionStorage.setItem('customerFormData', JSON.stringify(formData));
    //         console.log('Customer data saved to session storage');
    //         window.location.href = '/ConfirmBooking';
    //     } catch (error) {
    //         console.error('Error saving customer data to session storage:', error);
    //     }
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     try {
    //         // Check if the user is logged in based on the value in session storage
    //         const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
    
    //         if (isLoggedIn) {
    //             // User is logged in
    //             sessionStorage.setItem('customerFormData', JSON.stringify(formData));
    //             console.log('Customer data saved to session storage');
    //             window.location.href = '/ConfirmBooking';
    //         } else {
    //             sessionStorage.setItem('customerFormData', JSON.stringify(formData));
    //             // User is not logged in, redirect to login page
    //             window.location.href = '/LoginComponent';
    //         }
    //     } catch (error) {
    //         console.error('Error saving customer data to session storage:', error);
    //     }
    // };
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            // Check if the user is staff
            const isStaff = sessionStorage.getItem('staff') === 'true';
    
            if (isStaff) {
                // If user is staff, redirect to staff dashboard
                window.location.href = '/ConfirmBooking';
                sessionStorage.setItem('customerFormData', JSON.stringify(formData));
            } else {
                // If user is not staff, check if the user is logged in
                const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
        
                if (isLoggedIn) {
                    // User is logged in
                    sessionStorage.setItem('customerFormData', JSON.stringify(formData));
                    console.log('Customer data saved to session storage');
                    window.location.href = '/ConfirmBooking';
                } else {
                    // User is not logged in, redirect to login page
                    sessionStorage.setItem('customerFormData', JSON.stringify(formData));
                    window.location.href = '/LoginComponent';
                }
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    

    return (
        <Container fluid className="p-0" style={{ backgroundImage: `url("https://img.freepik.com/free-vector/carsharing-service-abstract-concept-illustration_335657-1845.jpg?w=740&t=st=1708938791~exp=1708939391~hmac=7663afa8ab3150a9332d4bd94f925e25552ca9fd76f54680c703a8cfa3a31a03")`, backgroundSize: 'cover', minHeight: '100vh' }}>
            <Row>
                <Col md={{ span: 6, offset: 6 }}>
                    <div className="card" style={{ width: '70%', margin: '0 auto', opacity:0.8, background: 'linear-gradient(30deg, skyblue, transparent)', color:'black', marginTop:'20px', marginBottom:'20px',fontSize:'18px',border:'solid' }}>
                        <div className="card-body">
                            <h2 className="mb-4">Booking Information Page</h2>
                        <Form onSubmit={handleSubmit} >
                            <Form.Group controlId="firstName">
                                <Form.Label>First Name:</Form.Label>
                                <Form.Control type="text" name="r_firstName" value={formData.r_firstName} onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group controlId="lastName">
                                <Form.Label>Last Name:</Form.Label>
                                <Form.Control type="text" name="r_lastName" value={formData.r_lastName} onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group controlId="addressLine1">
                                <Form.Label>Address Line 1:</Form.Label>
                                <Form.Control type="text" name="r_addressLine1" value={formData.r_addressLine1} onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group controlId="addressLine2">
                                <Form.Label>Address Line 2:</Form.Label>
                                <Form.Control type="text" name="r_addressLine2" value={formData.r_addressLine2} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group controlId="email">
                                <Form.Label>Email:</Form.Label>
                                <Form.Control type="email" name="r_email" value={formData.r_email} onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group controlId="city">
                                <Form.Label>City:</Form.Label>
                                <Form.Control type="text" name="r_city" value={formData.r_city} onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group controlId="pincode">
                                <Form.Label>Pincode:</Form.Label>
                                <Form.Control type="text" name="r_pincode" value={formData.r_pincode} onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group controlId="phoneNumber">
                                <Form.Label>Phone Number:</Form.Label>
                                <Form.Control type="text" name="r_phoneNumber" value={formData.r_phoneNumber} onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group controlId="mobileNumber">
                                <Form.Label>Mobile Number:</Form.Label>
                                <Form.Control type="text" name="r_mobileNumber" value={formData.r_mobileNumber} onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group controlId="creditCardType">
                                <Form.Label>Credit Card Type:</Form.Label>
                                <Form.Control type="text" name="r_creditCardType" value={formData.r_creditCardType} onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group controlId="creditCardNumber">
                                <Form.Label>Credit Card Number:</Form.Label>
                                <Form.Control type="text" name="r_creditCardNumber" value={formData.r_creditCardNumber} onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group controlId="drivingLicenseNumber">
                                <Form.Label>Driving License Number:</Form.Label>
                                <Form.Control type="text" name="r_drivingLicenseNumber" value={formData.r_drivingLicenseNumber} onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group controlId="idpNumber">
                                <Form.Label>IDP Number:</Form.Label>
                                <Form.Control type="text" name="r_idpNumber" value={formData.r_idpNumber} onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group controlId="issuedByDL">
                                <Form.Label>Issued By (DL):</Form.Label>
                                <Form.Control type="text" name="r_issuedByDL" value={formData.r_issuedByDL} onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group controlId="validThroughDL">
                                <Form.Label>Valid Through (DL):</Form.Label>
                                <Form.Control type="date" name="r_validThroughDL" value={formData.r_validThroughDL} onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group controlId="passportNumber">
                                <Form.Label>Passport Number:</Form.Label>
                                <Form.Control type="text" name="r_passportNumber" value={formData.r_passportNumber} onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group controlId="passportValidThrough">
                                <Form.Label>Passport Valid Through:</Form.Label>
                                <Form.Control type="date" name="r_passportValidThrough" value={formData.r_passportValidThrough} onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group controlId="passportIssuedBy">
                                <Form.Label>Passport Issued By:</Form.Label>
                                <Form.Control type="text" name="r_passportIssuedBy" value={formData.r_passportIssuedBy} onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group controlId="passportValidFrom">
                                <Form.Label>Passport Valid From:</Form.Label>
                                <Form.Control type="date" name="r_passportValidFrom" value={formData.r_passportValidFrom} onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group controlId="passportIssueDate">
                                <Form.Label>Passport Issue Date:</Form.Label>
                                <Form.Control type="date" name="r_passportIssueDate" value={formData.r_passportIssueDate} onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group controlId="dateOfBirth">
                                <Form.Label>Date of Birth:</Form.Label>
                                <Form.Control type="date" name="r_dateOfBirth" value={formData.r_dateOfBirth} onChange={handleChange} required />
                            </Form.Group>
                            {/* You can add password field here if needed */}
                            <Button variant="primary" type="submit">Continue</Button>
                        </Form>
                    </div>
                </div>
            </Col>
            </Row>
        </Container>
    );
};

export default StaffBookingForm;
