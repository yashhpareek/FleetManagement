import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';


const BookingFormRitik = () => {
  const [formData, setFormData] = useState({
    rentalDate: '',
    rentalTime: '',
    returnDate: '',
    returnTime: '',
    pickupLocation: '',
    pickupState: '',
    pickupCity: '',
    returnLocation: '',
    returnState: '',
    returnCity: '',
    returnToDifferentLocation: false,
  });

  const [airportCodes, setAirportCodes] = useState([]);

  useEffect(() => {
    const fetchAirportCodes = async () => {
      try {
        const response = await axios.get('http://localhost:8080/airport/code');
        setAirportCodes(response.data);
      } catch (error) {
        console.error('Error fetching airport codes:', error);
      }
    };

    fetchAirportCodes();
  }, []);


  useEffect(() => {
    // Parse query parameter from the URL and set the form data
    const queryParams = new URLSearchParams(window.location.search);
    const dataParam = queryParams.get('data');
    if (dataParam) {
      setFormData(JSON.parse(decodeURIComponent(dataParam)));
    }
  }, [window.location.search]);


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
        ...prevState,
        [name]: type === 'checkbox' ? checked : value
    }));
};


  const handleChangeAirport = async (e) => {
    const { name, value, type, checked } = e.target;

    if (name === 'pickupLocation') {

     // Update pickupLocation with the selected airport code
       setFormData(prevState => ({
        ...prevState,
        pickupLocation: value
        }));

      const selectedAirport = airportCodes.find((airport) => airport.airportCode === value);

      if (selectedAirport && selectedAirport.cityId && selectedAirport.cityId.state) {
        const { stateName } = selectedAirport.cityId.state;
        const cityName = selectedAirport.cityId.cityName;

        setFormData((prevState) => ({
          ...prevState,
          pickupState: stateName,
          pickupCity: cityName,
          [name]: type === 'checkbox' ? checked : value,
        }));
      }
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: type === 'checkbox' ? checked : value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const jsonData = JSON.stringify(formData);
      sessionStorage.setItem('bookingFormData', jsonData);
      //navigator.navigate('/ConfirmBooking'); // Navigate to ConfirmBooking page

      window.location.href = './ConfirmBooking';
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <div className="card">
            <div className="card-body">
              <h2 className="mb-4">Make Reservation</h2>
              <Form onSubmit={handleSubmit}>
            
              <Form.Group controlId="rentalDate">
                                    <Form.Label>Rental Date:</Form.Label>
                                    <Form.Control type="date" name="rentalDate" value={formData.rentalDate} onChange={handleChange} required />
                                </Form.Group>
                                <Form.Group controlId="rentalTime">
                                    <Form.Label>Rental Time:</Form.Label>
                                    <Form.Control type="time" name="rentalTime" value={formData.rentalTime} onChange={handleChange} required />
                                </Form.Group>
                                <Form.Group controlId="returnDate">
                                    <Form.Label>Return Date:</Form.Label>
                                    <Form.Control type="date" name="returnDate" value={formData.returnDate} onChange={handleChange} required />
                                </Form.Group>
                                <Form.Group controlId="returnTime">
                                    <Form.Label>Return Time:</Form.Label>
                                    <Form.Control type="time" name="returnTime" value={formData.returnTime} onChange={handleChange} required />
                                </Form.Group>

                                <Form.Group controlId="pickupLocation">
                                    <Form.Label>Pickup Location:</Form.Label>
                                    <Form.Select name="pickupLocation" onChange={handleChangeAirport} >
                                        <option value="">Select Pickup Location</option>
                                        {airportCodes.map(airport => (
                                            <option key={airport} value={airport}>
                                                {`${airport}`}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group controlId="pickupState">
                                    <Form.Label>Pickup State:</Form.Label>
                                    <Form.Control type="text" name="pickupState" value={formData.pickupState} onChange={handleChange} placeholder="Enter pickup state" required />
                                </Form.Group>
                                <Form.Group controlId="pickupCity">
                                    <Form.Label>Pickup City:</Form.Label>
                                    <Form.Control type="text" name="pickupCity" value={formData.pickupCity} onChange={handleChange} placeholder="Enter pickup city" required />
                                </Form.Group>
                                <Form.Group controlId="returnLocation">
                                    <Form.Label>Return Location:</Form.Label>
                                    <Form.Select name="returnLocation" onChange={handleChangeAirport} >
                                        <option value="">Select Return Location</option>
                                        {airportCodes.map(airport => (
                                            <option key={airport} value={airport}>
                                                {`${airport}`}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group controlId="returnState">
                                    <Form.Label>Return State:</Form.Label>
                                    <Form.Control type="text" name="returnState" value={formData.returnState} onChange={handleChange} placeholder="Enter return state" required />
                                </Form.Group>
                                <Form.Group controlId="returnCity">
                                    <Form.Label>Return City:</Form.Label>
                                    <Form.Control type="text" name="returnCity" value={formData.returnCity} onChange={handleChange} placeholder="Enter return city" required />
                                </Form.Group>
                                <Form.Group controlId="returnToDifferentLocation">
                                    <Form.Check type="checkbox" name="returnToDifferentLocation" checked={formData.returnToDifferentLocation} onChange={handleChange} label="I may return the car to a different location" />
                                </Form.Group>


                <Button variant="primary" type="submit">
                  Continue Booking
                </Button>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BookingFormRitik;
