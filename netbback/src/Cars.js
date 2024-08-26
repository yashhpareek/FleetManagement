import React, { useState, useEffect } from 'react';
import { Form, Card, Button, Container, Row, Col } from 'react-bootstrap';

const Car = () => {
    const [carTypes, setCarTypes] = useState([]);
    const [selectedCarType, setSelectedCarType] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchCarTypes();
    }, []);

    const fetchCarTypes = async () => {
        try {
            const response = await fetch('https://localhost:7185/api/CarType');
            if (response.ok) {
                const data = await response.json();
                setCarTypes(data);
            } else {
                setError('Failed to fetch car types');
            }
        } catch (error) {
            setError('Error fetching car types:', error.message);
        }
    };

    const handleSelectCarType = (carType) => {
        setSelectedCarType(carType);
    };

    const handleNextButtonClick = () => {
        if (selectedCarType) {
            const selectedCarJson = JSON.stringify(selectedCarType);
            sessionStorage.setItem('selectedCar', selectedCarJson);
            window.location.href = "/AddonList";
        } else {
            setError('Please select a car type');
        }
    };

    return (
        <Container fluid className="p-0" style={{ backgroundImage: `url("https://images.pexels.com/photos/6322548/pexels-photo-6322548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`, backgroundSize: 'cover', minHeight: '100vh' }}>
            <Row className="justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <Col md={6}>
                    <div className="card p-4" style={{ width: '100%', margin: '50px auto', opacity:0.9, background: 'linear-gradient(45deg, black, transparent)', color:'ButtonHighlight', marginTop:'20px', marginBottom:'20px' }}>
                        <h2 className="text-center mb-4">Select a Car Type</h2>
                        <Form>
                            {error && <div className="text-danger mb-3" >{error}</div>}
                            <div className="card-deck">
                                {carTypes.map((carType) => (
                                    <Card key={carType.carTypeId} className="mb-3">
                                        <Card.Body>
                                            <Card.Title>{carType.carTypeName}</Card.Title>
                                            <Card.Text>
                                                <strong>Daily Rate:</strong> {carType.dailyRate}<br />
                                                <strong>Weekly Rate:</strong> {carType.weeklyRate}<br />
                                                <strong>Monthly Rate:</strong> {carType.monthlyRate}<br />
                                            </Card.Text>
                                            <Form.Check
                                                type="radio"
                                                name="carType"
                                                id={`carType-${carType.carTypeId}`}
                                                label="Select"
                                                onChange={() => handleSelectCarType(carType)}
                                            />
                                        </Card.Body>
                                    </Card>
                                ))}
                            </div>
                            <div className="text-center mt-4">
                                <Button variant="primary" onClick={handleNextButtonClick}>Next</Button>
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Car;
