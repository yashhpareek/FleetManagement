import React, { useState} from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const StaffBookingForm = () => {

    const storedData = sessionStorage.getItem('customerData');
    const sessionData = storedData ? JSON.parse(storedData) : {};
    
    // Function to format date string as "yyyy-MM-dd"
    const formatDate = (dateString) => {
        if (!dateString) return ''; // Return empty string if dateString is falsy
        const date = new Date(dateString);
        const year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();

        // Add leading zero if month/day is less than 10
        if (month < 10) {
            month = `0${month}`;
        }
        if (day < 10) {
            day = `0${day}`;
        }

        return `${year}-${month}-${day}`;
    };

    const defaultFormData = {
        r_firstName: sessionData.firstName || '',
        r_lastName: sessionData.lastName || '',
        r_addressLine1: sessionData.addressLine1 || '',
        r_addressLine2: sessionData.addressLine2 || '',
        r_email: sessionData.email || '',
        r_city: sessionData.city || '',
        r_pincode: sessionData.pincode || '',
        r_phoneNumber: sessionData.phoneNumber || '',
        r_mobileNumber: sessionData.mobileNumber || '',
        r_creditCardType: sessionData.creditCardType || '',
        r_creditCardNumber: sessionData.creditCardNumber || '',
        r_drivingLicenseNumber: sessionData.drivingLicenseNumber || '',
        r_idpNumber: sessionData.idpNumber || '',
        r_issuedByDL: sessionData.issuedByDL || '',
        r_validThroughDL: formatDate(sessionData.validThroughDL) || '',
        r_passportNumber: sessionData.passportNumber || '',
        r_passportValidThrough: formatDate(sessionData.passportValidThrough) || '',
        r_passportIssuedBy: sessionData.passportIssuedBy || '',
        r_passportValidFrom: formatDate(sessionData.passportValidFrom) || '',
        r_passportIssueDate: formatDate(sessionData.passportIssueDate) || '',
        r_dateOfBirth: formatDate(sessionData.dateOfBirth) || '',
    };
    
    const [formData, setFormData] = useState(defaultFormData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const isStaff = sessionStorage.getItem('staff') === 'true';
            if (isStaff) {
                window.location.href = '/ConfirmBooking';
                sessionStorage.setItem('customerFormData', JSON.stringify(formData));
            } else {
                const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
                if (isLoggedIn) {
                    sessionStorage.setItem('customerFormData', JSON.stringify(formData));
                    console.log('Customer data saved to session storage');
                    window.location.href = '/ConfirmBooking';
                } else {
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
