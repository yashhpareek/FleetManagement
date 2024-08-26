import React, { useEffect } from 'react';
import html2pdf from 'html2pdf.js';
import { Button, Container, Row, Col } from 'react-bootstrap';
import companyLogo from './logimg.png';

const PDFGenerator = () => {
  // Retrieve and parse session data
  const carData = JSON.parse(sessionStorage.getItem('carData'));
  const invoiceDetails = JSON.parse(sessionStorage.getItem('invoiceDetails'));
  const customerData = JSON.parse(sessionStorage.getItem('customerData'));
  const rentalAmount = sessionStorage.getItem('rentalAmount');
  const selectedInvoice = JSON.parse(sessionStorage.getItem('selectedInvoice'));
  const totalamount = sessionStorage.getItem('totalamount');
  const totalAmountfffff = sessionStorage.getItem('totalAmountfffff');

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const generatePDF = () => {
    const content = document.createElement('div');

    // // Add India Drive heading
    // const heading = document.createElement('h1');
    // heading.textContent = 'India Drive';
    // content.appendChild(heading);


    const logo = document.createElement('img');
    logo.src = companyLogo; // Use the imported image
    logo.alt = 'Company Logo';
    logo.style.width = '150px';
    logo.style.height = '150px';
    content.appendChild(logo);

    // Add customer details table
    const customerTable = document.createElement('table');
    customerTable.style.width = '100%';
    customerTable.style.borderCollapse = 'collapse';
    customerTable.style.border = '1px solid black';

    const addRow = (data) => {
      const row = customerTable.insertRow();
      const cell1 = row.insertCell();
      const cell2 = row.insertCell();
      cell1.style.border = '2px solid black';
      cell2.style.border = '2px solid black';
      cell1.textContent = data[0];
      cell2.textContent = data[1];
    };

    addRow(['Customer ID:', customerData.customerId]);
    addRow(['Name:', `${customerData.firstName} ${customerData.lastName}`]);
    addRow(['Email:', customerData.email]);
    addRow(['Address:', `${customerData.addressLine1}, ${customerData.addressLine2}, ${customerData.city}`]);
    addRow(['Pincode:', customerData.pincode]);
    addRow(['Phone Number:', customerData.phoneNumber]);
    addRow(['Mobile Number:', customerData.mobileNumber]);

    content.appendChild(customerTable);

    // Add car details table
    const carTable = document.createElement('table');
    carTable.style.width = '100%';
    carTable.style.borderCollapse = 'collapse';
    carTable.style.border = '1px solid black';

    addRow(['Car Name:', carData.carName]);
    addRow(['Car Type:', carData.carType.carTypeName]);
    addRow(['Number Plate:', carData.numberPlate]);

    content.appendChild(carTable);

    // Add invoice details table
    const invoiceTable = document.createElement('table');
    invoiceTable.style.width = '100%';
    invoiceTable.style.borderCollapse = 'collapse';
    invoiceTable.style.border = '1px solid black';

    addRow(['Invoice ID:', selectedInvoice.invoiceId]);
    addRow(['Booking ID:', selectedInvoice.bookid]);
    addRow(['Rental Amount:', rentalAmount]);
    addRow(['Total Addon Amount:', totalamount]);
    addRow(['Total Amount:', totalAmountfffff]);

    content.appendChild(invoiceTable);

    // Configuring options for html2pdf
    const options = {
      margin: 10,
      filename: 'invoice.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    // Generating PDF using html2pdf
    html2pdf(content, options);
  };
  const currentDatenewwww = formatDate(new Date());
  const emailMsg = `
Subject: Car Return Confirmation - ${selectedInvoice.bookid}

Dear ${customerData.firstName} ${customerData.lastName},

We hope you had a pleasant experience with India Drive during your recent car rental. 

This email serves as confirmation that your booking with the following details has been successfully completed:

- Booking ID: ${selectedInvoice.bookid}
- Car Returned: ${carData.carName}, ${carData.numberPlate}
- Date of Return: ${currentDatenewwww}
- Total Rental Amount: ${totalAmountfffff}

We have received the car in good condition and completed the necessary inspections. 

If you have any questions regarding your rental or need further assistance, please do not hesitate to contact us at INDIA DRIVE

Thank you for choosing India Drive. We appreciate your business and look forward to serving you again in the future.

Best regards,
India Drive Team
`;

function sendMail() {
  const url = "http://localhost:8080/sendMail";
  const payload = {
    recipient: customerData.email,
    msgBody: emailMsg
  };

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
  .then(response => {
    if (response.ok) {
      console.log("Mail sent successfully!");
    } else {
      console.error("Failed to send mail");
    }
  })
  .catch(error => {
    console.error('Error sending mail:', error);
  });
}

useEffect(() => {
  sendMail();
}, []);




  return (
    <Container style={{ height: '49vh' }}>
      <Row>
        <Col>
          <h1>PDF Generator</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={generatePDF}>Generate PDF</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default PDFGenerator;
