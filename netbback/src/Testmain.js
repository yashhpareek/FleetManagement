// import React from 'react';

// const BookingButton = () => {
//   const handleClick = () => {
//     postDataToServer();
//   };
// const postDataToServer = async () => {
//     try {
      
  
//       // Retrieve data from session storage and parse it
//       const customerData = JSON.parse(sessionStorage.getItem('customerData'));
//       const selectedCar = JSON.parse(sessionStorage.getItem('selectedCar'));
//       const bookingFormData = JSON.parse(sessionStorage.getItem('bookingFormData'));
//       const customerFormData = JSON.parse(sessionStorage.getItem('customerFormData'));
//       const selectedHub = JSON.parse(sessionStorage.getItem('selectedHub'));
//       const selectedReturnHub = JSON.parse(sessionStorage.getItem('selectedReturnHub'));
//       const currentDate = new Date();
  
//       // Format current date to YYYY-MM-DD format
//       const formattedCurrentDate = currentDate.toISOString().split('T')[0];
  
//       const postData = {
//         "bookingDate": "2024-02-26",
//         "customerId": 1,
//         "customer": null,
//         "startDate": "2024-02-19",
//         "endDate": "2024-03-04",
//         "carTypeId": 1,
//         "carType": null,
//         "firstName": "mayur",
//         "lastName": "patil",
//         "address": "21 B Chirai Mata Colony demo",
//         "state": "Sakri",
//         "pin": "111",
//         "dailyRate": 1,
//         "weeklyRate": 1,
//         "monthlyRate": 1,
//         "emailId": "mayur1792001@gmail.com",
//         "p_HubId": 1,
//         "r_HubId": 1,
//         "pickupHub": null,
//         "returnHub": null,
//         "bookingDetails": []
//     };
  
//       console.log('postData:----', postData);
  
//       // Make a POST request to the specified link with the formatted data
//       const response = await fetch('https://localhost:7185/api/booking', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(postData)
//       });
  
//       if (!response.ok) {
//         throw new Error('Failed to perform booking');
//       }
  
//       const responseData = await response.json();
  
//       sessionStorage.setItem('bookingResponseData', JSON.stringify(responseData));
//       console.log("response", responseData);
//       alert("Booking Successful");
//       setTimeout(() => {
//         window.location.href = "/"; // Redirect to homepage after 5 seconds
//       }, 5000);
//     } catch (error) {
//       console.error('Error posting data:', error);
//     }
//   };
 

//   return (
//     <button onClick={handleClick}>Confirm Booking</button>
//   );
// };

// export default BookingButton;
