 import React, { useEffect, useState } from 'react';
const ReturnLogic = () => {
    function calculateAndStoreRemainingTime() {
        // Get the data from sessionStorage
        var selectedInvoice = JSON.parse(sessionStorage.selectedInvoice);
    
        // Extract startDate from the selectedInvoice
        var startDate = new Date(selectedInvoice.startDate);
    
        // Current date
        var currentDate = new Date();
        
        // Calculate the difference in milliseconds
        var timeDifference = currentDate - startDate;
        
        // Convert milliseconds to days, weeks, and months
        var millisecondsInDay = 1000 * 60 * 60 * 24;
        var millisecondsInWeek = millisecondsInDay * 7;
        var millisecondsInMonth = millisecondsInDay * 30.44; // Average days in a month
        
        var remainingMonths = Math.floor(timeDifference / millisecondsInMonth);
        var remainingWeeks = Math.floor((timeDifference % millisecondsInMonth) / millisecondsInWeek);
        var remainingDays = Math.floor((timeDifference % millisecondsInWeek) / millisecondsInDay);
        
        // Calculate  remaining days
        var totalRemainingDays = Math.floor(timeDifference / millisecondsInDay);
        
        if (remainingMonths === 0 && remainingWeeks === 0 && remainingDays === 0) {
          remainingDays = 1;
          totalRemainingDays = 1;
      }

        // Store the remaining time data in sessionStorage
        var remainingTimeData = {
            months: remainingMonths,
            weeks: remainingWeeks,
            days: remainingDays,
            totalDays: totalRemainingDays
        };
        sessionStorage.remainingTime = JSON.stringify(remainingTimeData);
        
        return remainingTimeData;
    }
    calculateAndStoreRemainingTime();

    
    function calculateTotalAmount() {
        // Access carData and remainingTime from sessionStorage
        const carData = sessionStorage.getItem('carData');
        const remainingTime = sessionStorage.getItem('remainingTime');
    
        // Parse carData and remainingTime
        const car = JSON.parse(carData);
        const time = JSON.parse(remainingTime);
    
        // Calculate total amount based on remaining time and rates
        let totalAmount = 0;
        totalAmount += time.months * car[0].carType.monthlyRate;
        totalAmount += time.weeks * car[0].carType.weeklyRate;
        totalAmount += time.days * car[0].carType.dailyRate;
    
        // Store total amount in sessionStorage
        sessionStorage.setItem('rentalAmount', totalAmount);
    
        return totalAmount;
    }
     calculateTotalAmount();
 // Define the function to calculate total amount
function calculateTotalAmount2() {
    // Retrieve data from sessionStorage
    const remainingTime = JSON.parse(sessionStorage.remainingTime);
    const invoiceDetails = JSON.parse(sessionStorage.invoiceDetails);

    // Extract total days
    const totalDays = remainingTime.totalDays;

    // Initialize total amount
    let totalAmount = 0;

    // Iterate through invoice details and calculate total amount
    invoiceDetails.forEach(detail => {
        totalAmount += detail.addonRate * totalDays;
    });
    sessionStorage.setItem('totalAddonAmount', totalAmount);

    return totalAmount;
}
 calculateTotalAmount2();

function storeTotalAmount() {
    // Retrieve data from sessionStorage
    const remainingTime = JSON.parse(sessionStorage.remainingTime);
    const invoiceDetails = JSON.parse(sessionStorage.invoiceDetails);

    // Extract total days
    const totalDays = remainingTime.totalDays;

    // Initialize total amount
    let totalAmount = 0;

    // Iterate through invoice details and calculate total amount
    invoiceDetails.forEach(detail => {
        totalAmount += detail.addonRate * totalDays;
    });

    sessionStorage.setItem('totalamount', totalAmount);
}

// Call the function to calculate and store the total amount
// storeTotalAmount();

// function addTotalAddonAmountToTotalAmount() {
//     // Retrieve totalAmount and totalAddonAmount from sessionStorage
//     let totalAmount = parseFloat(sessionStorage.totalAmount || 0);
//     let totalAddonAmount = parseFloat(sessionStorage.totalAddonAmount || 0);
    
//     // Add totalAddonAmount to totalAmount
//     totalAmount += totalAddonAmount;
    
//     // Store the updated totalAmount back in sessionStorage
//     sessionStorage.finalAmount = totalAmount;
//     sessionStorage.setItem('totalamountforall', totalAmount);
// }

// addTotalAddonAmountToTotalAmount();

const calculateAndStoreTotalAmount = () => {
    // Retrieve rentalAmount and totalAddonAmount from sessionStorage
    const rentalAmount = parseFloat(sessionStorage.rentalAmount || 0);
    const totalAddonAmount = parseFloat(sessionStorage.totalAddonAmount || 0);

    // Calculate total amount
    const totalAmount = rentalAmount + totalAddonAmount;

    // Store total amount in sessionStorage
    sessionStorage.setItem('totalAmountfffff', totalAmount);

    return totalAmount;
};
 calculateAndStoreTotalAmount();

const sendInvoiceData = async () => {
    try {
        // Retrieve data from sessionStorage
        const totalAmount = sessionStorage.getItem('totalAmountfffff');
        console.log('totalAmount', totalAmount);
        const rentalAmount = sessionStorage.getItem('rentalAmount');
        console.log('rentalAmount', rentalAmount);
        const totalAddonAmount = sessionStorage.getItem('totalAddonAmount');
        console.log('totalAddonAmount', totalAddonAmount);
        const invoiceIdmain = JSON.parse(sessionStorage.selectedInvoice).invoiceId;
        console.log('invoiceIdmain', invoiceIdmain);

        // Construct the URL with parameters
        const url = `https://localhost:7185/api/Invoice/invoice/${totalAddonAmount}/${totalAmount}/${rentalAmount}/${invoiceIdmain}`;
        console.log('url', url);

        // Make GET request to the constructed URL
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to send invoice data');
        }

        // Only parse response as JSON if there is data
        if (response.headers.get('content-length') > 0) {
            const responseData = await response.json();
            console.log('Invoice data sent successfully:', responseData);
        } else {
            console.log('No data returned from server');
        }
    } catch (error) {
        console.error('Error sending invoice data:', error);
    }
};

const [carData11, setCarData11] = useState({});
const [customerData11, setCustomerData11] = useState({});
const [fuelStatus, setFuelStatus] = useState('');

useEffect(() => {
  // Retrieve carData and customerData from sessionStorage
  const carDataFromStorage = JSON.parse(sessionStorage.getItem('carData')) || {};
  const customerDataFromStorage = JSON.parse(sessionStorage.getItem('customerData')) || {};

  // Set state with retrieved data
  setCarData11(carDataFromStorage[0]);
  setCustomerData11(customerDataFromStorage);
}, []);

async function updateCarStatus(carId, status) {
    const url = `https://localhost:7185/api/Car/car/update/${carId}/${status}`;
    console.log('Updating fuel status of car ', carId, ' to ', status);
    console.log('url', url);
  
    try {
      const response = await fetch(url, {
        method: 'PUT', // Assuming you're using PUT method, adjust if necessary
        // You can add headers or body payload if required
      });
  
      if (!response.ok) {
        throw new Error('Failed to update car status');
      }
  
      // Handle success, if needed
      console.log('Car status updated successfully');
    } catch (error) {
      console.error('Error updating car status:', error.message);
    }
  }
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Fuel Status Selected:', fuelStatus);
    await sendInvoiceData();
    await updateCarStatus(carData11.carId, fuelStatus);
    window.location.href = '/PDFGenerator';
  
    // Add logic to send fuel status to the server or perform other actions
  };

  

return (
    <div className="container mt-5">
    <table className="table">
      <thead>
        <tr>
          <th colSpan="2">Car Details:</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Car ID:</td>
          <td>{carData11.carId}</td>
        </tr>
        <tr>
          <td>Car Type:</td>
          <td>{carData11.carType?.carTypeName}</td>
        </tr>
        <tr>
          <td>Car Name:</td>
          <td>{carData11.carName}</td>
        </tr>
        {/* Add other car details similarly */}
      </tbody>
    </table>
  
    <table className="table">
      <thead>
        <tr>
          <th colSpan="2">Customer Details:</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Customer ID:</td>
          <td>{customerData11.customerId}</td>
        </tr>
        <tr>
          <td>Name:</td>
          <td>{customerData11.firstName} {customerData11.lastName}</td>
        </tr>
        <tr>
          <td>Email:</td>
          <td>{customerData11.email}</td>
        </tr>
        <tr>
          <td>City:</td>
          <td>{customerData11.city}</td>
        </tr>
        <tr>
          <td>Phone Number:</td>
          <td>{customerData11.phoneNumber}</td>
        </tr>
        {/* Add other customer details similarly */}
      </tbody>
    </table>
  
    <form onSubmit={handleSubmit} className="mt-5">
      <div className="form-group">
        <label htmlFor="fuelStatus">Fuel Status:</label>
        <select
          className="form-control"
          id="fuelStatus"
          value={fuelStatus}
          onChange={(e) => setFuelStatus(e.target.value)}
          required
        >
          <option value="">Select Fuel Status</option>
          <option value="Full">Full</option>
          <option value="Half">Half</option>
          <option value="Empty">Empty</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>
  
);
};

export default ReturnLogic;