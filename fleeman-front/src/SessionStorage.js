import React, { useState, useEffect } from 'react';

// Import your BookingForm component here
import BookingForm from './BookingForm';  // Adjust the import path accordingly

const SessionStorage = () => {
    const [formData, setFormData] = useState({});

    useEffect(() => {
        const storedFormData = sessionStorage.getItem('bookingFormData');
        if (storedFormData) {
            const parsedFormData = JSON.parse(storedFormData);
            console.log('Stored Form Data:', parsedFormData);

            // Set the retrieved form data to the component state
            setFormData(parsedFormData);
        }
    }, []);

    return (
        <div>
            {/* Render or use formData as needed */}
            {/* <BookingForm formData={formData} setFormData={setFormData} /> */}
        </div>
    );
};

export default SessionStorage;
