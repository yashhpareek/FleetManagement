import React, { useState, useEffect } from 'react';

const Rlogic = () => {
    const [fuelType, setFuelType] = useState("");
    const [firstInvoice, setFirstInvoice] = useState(null);
    const [grandTotal, setGrandTotal] = useState(0);
    const [grandTotal1, setGrandTotal1] = useState(0);
    const [addonAmountSum, setAddonAmountSum] = useState(0);

    useEffect(() => {
        const invoiceDetails = JSON.parse(sessionStorage.getItem('invoiceDetails'));
        if (invoiceDetails && invoiceDetails.length > 0) {
            setFirstInvoice(invoiceDetails[0]);
        }

        const grandTotal = parseFloat(sessionStorage.getItem('grandTotal')) || 0;
        setGrandTotal(grandTotal);

        const grandTotal1 = parseFloat(sessionStorage.getItem('grandTotal1')) || 0;
        setGrandTotal1(grandTotal1);

        const addonAmountSum = parseFloat(sessionStorage.getItem('addonAmountSum')) || 0;
        setAddonAmountSum(addonAmountSum);
    }, []);

    const handleFuelTypeChange = (event) => {
        setFuelType(event.target.value);
    };

    const handleReturnButtonClick = () => {
        if (!firstInvoice) return; // Ensure firstInvoice is defined before proceeding
        
        const url = `http://localhost:8080/car/update/${firstInvoice.invoice.car.carId}/${fuelType}`;
        
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        })
        .then(response => {
            if (response.ok) {
                ReturnButtonClick();
                console.log('Fuel status updated successfully');
            } else {
                console.error('Failed to update fuel status');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    const ReturnButtonClick = () => {
        if (!firstInvoice) return; // Ensure firstInvoice is defined before proceeding
        
        const url = `http://localhost:8080/invoice/${addonAmountSum}/${grandTotal1}/${grandTotal}/${firstInvoice.invoice.invoiceId}`;

        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                console.log('Invoice updated successfully');
            } else {
                console.error('Failed to update invoice');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    return (
        <div className="container">
            {firstInvoice && (
                <>
                    <h2 className="mt-4 mb-3">Car Details</h2>
                    <ul className="list-group">
                        <li className="list-group-item"><strong>Car Name:</strong> {firstInvoice.invoice.car.carName}</li>
                        <li className="list-group-item"><strong>Number Plate:</strong> {firstInvoice.invoice.car.numberPlate}</li>
                        
                        <li className="list-group-item"><strong>Capacity:</strong> {firstInvoice.invoice.car.capacity}</li>
                        <li className="list-group-item"><strong>Mileage:</strong> {firstInvoice.invoice.car.mileage}</li>
                        <li className="list-group-item"><strong>Hub Name:</strong> {firstInvoice.invoice.car.hub.hubName}</li>
                        <li className="list-group-item"><strong>Hub Address:</strong> {firstInvoice.invoice.car.hub.hubAddressAndDetails}</li>
                        <li className="list-group-item"><strong>Contact Number:</strong> {firstInvoice.invoice.car.hub.contactNumber}</li>
                        <li className="list-group-item"><strong>City:</strong> {firstInvoice.invoice.car.hub.city.cityName}</li>
                        <li className="list-group-item"><strong>State:</strong> {firstInvoice.invoice.car.hub.city.state.stateName}</li>
                        <li className="list-group-item">
                            <strong>Fuel Status:</strong> 
                            <select className="form-select" value={fuelType} onChange={handleFuelTypeChange}>
                                <option value="Full">Full</option>
                                <option value="Half">Half</option>
                                <option value="Empty">Empty</option>
                            </select>
                        </li>
                        {/* Add more car information here */}
                    </ul>
                    <button className="btn btn-primary mt-3" onClick={handleReturnButtonClick}>Return</button>
                </>
            )}
        </div>
    );
};

export default Rlogic;
