
// // import React, { useState, useEffect } from 'react';
// // import { Form, Button, Table } from 'react-bootstrap';

// // const Cancel = () => {
// //   const [invoices, setInvoices] = useState([]);
// //   const [email, setEmail] = useState('');

// //   const calculateAndStoreTotals = (invoiceDetails) => {
// //     // Extract addonName and addonDailyRate from each object in the array
// //     const addons = invoiceDetails.map(item => ({
// //       addonName: item.addon.addonName,
// //       addonDailyRate: item.addon.addonDailyRate
// //     }));
  
// //     // Convert the extracted data into a JSON string
// //     const addonsJSON = JSON.stringify(addons);
  
// //     // Store the JSON string in the session storage under a key named 'addons'
// //     sessionStorage.setItem('addons', addonsJSON);
  
// //     // Retrieve addon amount data from sessionStorage
// //     const addonAmountData = JSON.parse(sessionStorage.getItem('addonamount'));
  
// //     // Calculate the sum of the values
// //     const sum = Object.values(addonAmountData).reduce((acc, curr) => acc + curr, 0);
  
// //     // Store the sum in the session storage under a new key named 'addonAmountSum'
// //     sessionStorage.setItem('addonAmountSum', sum);
  
// //     // Extract start and end dates
// //     const startDate = new Date(invoiceDetails[0].invoice.startDate);
// //     const endDate = new Date();
  
// //     // Calculate the difference in milliseconds
// //     const difference = endDate - startDate;
  
// //     // Calculate the difference in days
// //     const differenceInDays = Math.floor(difference / (1000 * 60 * 60 * 24));
  
// //     // Calculate the difference in months
// //     const months = Math.floor(differenceInDays / 30);
  
// //     // Calculate the remaining days
// //     const remainingDays = differenceInDays % 30;
  
// //     // Calculate the difference in weeks
// //     const weeks = Math.floor(remainingDays / 7);
  
// //     // Calculate the remaining days after removing weeks
// //     const remainingDaysOfWeeks = remainingDays % 7;
  
// //     // Initialize variables to store total amounts
// //     let totalDaily = 0;
// //     let totalWeekly = 0;
// //     let totalMonthly = 0;
  
// //     // Loop through each invoice detail
// //     invoiceDetails.forEach(detail => {
// //       // Extract rates from the detail
// //       const dailyRate = detail.invoice.booking.carType.dailyRate;
// //       const weeklyRate = detail.invoice.booking.carType.weeklyRate;
// //       const monthlyRate = detail.invoice.booking.carType.monthlyRate;
  
// //       // Calculate the rental period in days
// //       const startDate = new Date(detail.invoice.booking.startDate);
// //       const endDate = new Date(detail.invoice.booking.endDate);
// //       const rentalDays = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));
  
// //       // Calculate the rental period in weeks and months
// //       const rentalWeeks = Math.floor(rentalDays / 7);
// //       const rentalMonths = Math.floor(rentalDays / 30);
  
// //       // Calculate the remaining days after removing complete weeks and months
// //       const remainingDaysOfWeeks = rentalDays % 7;
// //       const remainingDaysOfMonths = rentalDays % 30;
  
// //       // Calculate the total amount for this detail
// //       const detailTotal = dailyRate * remainingDaysOfWeeks + weeklyRate * (rentalWeeks + remainingDaysOfMonths / 7) + monthlyRate * rentalMonths;
  
// //       // Add the total amount to the corresponding total
// //       totalDaily += dailyRate * remainingDaysOfWeeks;
// //       totalWeekly += weeklyRate * (rentalWeeks + remainingDaysOfMonths / 7);
// //       totalMonthly += monthlyRate * rentalMonths;
// //     });
  
// //     // Calculate the grand total
// //     const grandTotal = totalDaily + totalWeekly + totalMonthly;
  
// //     // Store the totals in sessionStorage
// //     sessionStorage.setItem('totalDaily', totalDaily);
// //     sessionStorage.setItem('totalWeekly', totalWeekly);
// //     sessionStorage.setItem('totalMonthly', totalMonthly);
// //     sessionStorage.setItem('grandTotal', grandTotal);
  
// //     // Log the totals for verification
// //     console.log("Total Daily:", totalDaily);
// //     console.log("Total Weekly:", totalWeekly);
// //     console.log("Total Monthly:", totalMonthly);
// //     console.log("Grand Total:", grandTotal);
  
// //     // Retrieve the existing grand total from sessionStorage
// //     let grandTotal1 = parseInt(sessionStorage.getItem('grandTotal'));
  
// //     // Retrieve sessionStorage.addonAmountSum and convert it to a number
// //     const addonAmountSum = parseInt(sessionStorage.getItem('addonAmountSum'));
  
// //     // Add addonAmountSum to the grand total
// //     grandTotal1 += addonAmountSum;
  
// //     // Store the updated grand total back into sessionStorage
// //     sessionStorage.setItem('grandTotal1', grandTotal1);
  
// //     // Log the final total for verification
// //     console.log("Final Total:", grandTotal1);
// //   };
  
  

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         if (email) {
// //           const response = await fetch(`http://localhost:8080/invoice/email/${email}`);
// //           if (!response.ok) {
// //             throw new Error('Network response was not ok');
// //           }
// //           const data = await response.json();
// //           setInvoices(data);
// //         }
// //       } catch (error) {
// //         console.error('Error fetching invoices:', error);
// //       }
// //     };

// //     fetchData();
// //   }, [email]);

// //   const handleReturnClick = async (invoiceId) => {
// //     try {
// //       const response = await fetch(`http://localhost:8080/Invoice_details/${invoiceId}`);
// //       if (!response.ok) {
// //         throw new Error('Network response was not ok');
// //       }
// //       const invoiceDetails = await response.json();
// //       const addonAmounts = invoiceDetails.reduce((acc, item) => {
// //         acc[item.addon.addonName] = item.amt;
// //         return acc;
// //       }, {});

// //       // Set the invoice details in session storage
// //       sessionStorage.setItem('addonamount', JSON.stringify(addonAmounts));
// //       calculateAndStoreTotals(invoiceDetails);
// //       sessionStorage.setItem('invoiceDetails', JSON.stringify(invoiceDetails));

// //       // Assuming success means the invoice was returned, so refetch invoices
// //       setEmail(email); // Trigger useEffect to refetch data
// //       window.location.href = "/Rlogic";
// //     } catch (error) {
// //       console.error('Error returning invoice:', error);
// //     }
// //   };

// //   const handleSearch = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await fetch(`http://localhost:8080/invoice/email/${email}`);
// //       if (!response.ok) {
// //         throw new Error('Network response was not ok');
// //       }
// //       const data = await response.json();
// //       setInvoices(data);
// //     } catch (error) {
// //       console.error('Error searching invoices:', error);
// //     }
// //   };

// //   return (
// //     <div className="container mt-5">
// //       <h1>Return Car</h1>
// //       <Form onSubmit={handleSearch}>
// //         <Form.Group controlId="formEmail">
// //           <Form.Label>Email address:</Form.Label>
// //           <Form.Control
// //             type="email"
// //             placeholder="Enter email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //           />
// //         </Form.Group>
// //         <Button variant="primary" type="submit">
// //           Search
// //         </Button>
// //       </Form>
// //       {invoices.length > 0 && (
// //         <div>
// //           <h2 className="mt-4">Invoices for {email}</h2>
// //           <Table striped bordered hover>
// //             <thead>
// //               <tr>
// //                 <th>Invoice ID</th>
// //                 <th>Customer Name</th>
// //                 <th>Email</th>
// //                 <th>Car Details</th>
// //                 <th>Return Info</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {invoices.map(invoice => (
// //                 <tr key={invoice.invoiceId}>
// //                   <td>{invoice.invoiceId}</td>
// //                   <td>{invoice.customer.firstName} {invoice.customer.lastName}</td>
// //                   <td>{invoice.customer.email}</td>
// //                   <td>
// //                     <div>
// //                       <strong>Car Name:</strong> {invoice.car.carName}<br />
// //                       <strong>Number Plate:</strong> {invoice.car.numberPlate}<br />
// //                       <strong>Fuel Type:</strong> {invoice.car.fuelType}<br />
// //                       <strong>Capacity:</strong> {invoice.car.capacity}<br />
// //                       <strong>Mileage:</strong> {invoice.car.mileage}<br />
// //                     </div>
// //                   </td>
// //                   <td>
// //                     {invoice.isReturned === 'N' ? (
// //                       <Button variant="success" onClick={() => handleReturnClick(invoice.invoiceId)}>Return</Button>
// //                     ) : (
// //                       <span>Returned</span>
// //                     )}
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </Table>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Cancel;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Cancel = () => {
//     const [invoices, setInvoices] = useState([]);

//     useEffect(() => {
//         const fetchInvoicesByEmail = async (email) => {
//             try {
//                 const response = await axios.get(`http://localhost:8080/invoice/email/${email}`);
//                 setInvoices(response.data);
//             } catch (error) {
//                 console.error("Error fetching invoice data:", error);
//             }
//         };

//         const email = "demo@gmail.com"; // Change this to the desired email
//         fetchInvoicesByEmail(email);
//     }, []);

//     const printCustomerInfo = () => {
//         if (invoices.length === 0) {
//             return (
//                 <div>No invoice data available.</div>
//             );
//         }

//         return (
//             <div>
//                 <h2>Customer Information:</h2>
//                 {invoices.map((invoice, index) => (
//                     <div key={index}>
//                         <h3>Invoice {index + 1}</h3>
//                         <table>
//                             <tbody>
//                                 <tr>
//                                     <td>Name:</td>
//                                     <td>{invoice.cName}</td>
//                                 </tr>
//                                 <tr>
//                                     <td>Email:</td>
//                                     <td>{invoice.cEmailId}</td>
//                                 </tr>
//                                 <tr>
//                                     <td>Mobile Number:</td>
//                                     <td>{invoice.cMobileNo}</td>
//                                 </tr>
//                                 <tr>
//                                     <td>Rental Amount:</td>
//                                     <td>{invoice.rentalAmount}</td>
//                                 </tr>
//                                 <tr>
//                                     <td>Total Amount:</td>
//                                     <td>{invoice.totalAmount}</td>
//                                 </tr>
//                                 <tr>
//                                     <td>Start Date:</td>
//                                     <td>{invoice.startDate}</td>
//                                 </tr>
//                                 <tr>
//                                     <td>End Date:</td>
//                                     <td>{invoice.endDate}</td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                     </div>
//                 ))}
//             </div>
//         );
//     };

//     return (
//         <div>
//             <h1>Return</h1>
//             {printCustomerInfo()}
//         </div>
//     );
// }

// export default Cancel;
