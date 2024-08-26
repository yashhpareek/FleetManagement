import React, { useState, useEffect } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

const ReturnHubSelectionForm = () => {
    const [hubs, setHubs] = useState([]);
    const [selectedHub, setSelectedHub] = useState(null);
    const [cityName, setCityName] = useState('');
    const [numHubs, setNumHubs] = useState(0);

    useEffect(() => {
        fetchHubs();
    }, []);

    const fetchHubs = async () => {
        try {
            const bookingFormData = JSON.parse(sessionStorage.getItem('bookingFormData'));
            const returnCityId = bookingFormData.returnCityId; // Assuming returnCityId is stored in booking form data

            const response = await fetch(`http://localhost:8080/hub/${returnCityId}`);
            if (response.ok) {
                const data = await response.json();
                setHubs(data);
                calculateCityInfo(data);
            } else {
                console.error('Failed to fetch hubs');
            }
        } catch (error) {
            console.error('Error fetching hubs:', error);
        }
    };

    const calculateCityInfo = (data) => {
        const city = data[0]?.city?.cityName || '';
        const numHubs = data.length;
        setCityName(city);
        setNumHubs(numHubs);
    };

    const handleHubSelection = (hub) => {
        setSelectedHub(hub);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedHub) {
            sessionStorage.setItem('selectedReturnHub', JSON.stringify(selectedHub)); // Store return hub separately
            window.location.href = "/Car";
        } else {
            console.error('Please select a hub');
        }
    };

    return (
        <div className="container-fluid" style={{padding:'80px' , backgroundColor:'lightblue'}}>
            <h2 style={{marginBottom:'30px'}}>Your Return location {cityName} has {numHubs} hubs. Please select one</h2>
            <Form onSubmit={handleSubmit}>
                {hubs.map((hub) => (
                    <Card key={hub.hubId} className="mb-3">
                        <Card.Body>
                            <Form.Check
                                type="radio"
                                id={`hub-${hub.hubId}`}
                                name="selectedHub"
                                label={
                                    <div>
                                        <strong>{hub.hubName}</strong><br />
                                        <span>Address: {hub.hubAddressAndDetails}</span><br />
                                        <span>Contact: {hub.contactNumber}</span>
                                    </div>
                                }
                                onChange={() => handleHubSelection(hub)}
                            />
                        </Card.Body>
                    </Card>
                ))}
                <Button variant="primary" type="submit">Continue</Button>
            </Form>
        </div>
    );
};


export default ReturnHubSelectionForm;
