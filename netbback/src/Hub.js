import React, { useState, useEffect } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import SessionStorage from './SessionStorage';

const HubSelectionForm = () => {
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
            const pickupCityId = bookingFormData.pickupCityId; // Assuming pickupCityId is stored in booking form data
    
            
    
            const response = await fetch(`https://localhost:7185/api/Hub/city/${pickupCityId}`);
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
            sessionStorage.setItem('selectedHub', JSON.stringify(selectedHub));
            window.location.href = "/ReturnHubSelectionForm";
        } else {
            console.error('Please select a hub');
        }
    };

    return (
        <div className="container-fluid" style={{padding:'80px' , backgroundColor:'lightblue'}}>
            <h2 style={{marginBottom:'30px'}}>Your Pickup location {cityName} has {numHubs} hub. Please select one</h2>
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

export default HubSelectionForm;
