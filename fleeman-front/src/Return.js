import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';

const Cancel = () => {
    const [email, setEmail] = useState('');
    const [invoices, setInvoices] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedInvoice, setSelectedInvoice] = useState(null);

    const handleInputChange = (event) => {
        setEmail(event.target.value);
    };

    const fetchInvoicesByEmail = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(`http://localhost:8080/invoice/email/${email}`);
            setInvoices(response.data);
        } catch (error) {
            console.error("Error fetching invoice data:", error);
        } finally {
            setIsLoading(false);
        }
    };

    async function fetchDataAndStoreInSessionStorage(id) {
        try {
          const response = await fetch(`http://localhost:8080/car/id/${id}`);
          const data = await response.json();
          
          // Store data in sessionStorage
          sessionStorage.setItem('carData', JSON.stringify(data));
          
          console.log('Data stored in sessionStorage:', data);
        } catch (error) {
          console.error('Error fetching or storing data:', error);
        }
      }
      
      

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await fetchInvoicesByEmail();
        } catch (error) {
            console.error("Error occurred during form submission:", error);
        }
    };

    async function fetchCustomerDataAndStoreInSessionStorage(id) {
        try {
          const response = await fetch(`http://localhost:8080/getcustomer/id/${id}`);
          const data = await response.json();
          
          // Store data in sessionStorage
          sessionStorage.setItem('customerData', JSON.stringify(data));
          
          console.log('Customer data stored in sessionStorage:', data);
        } catch (error) {
          console.error('Error fetching or storing customer data:', error);
        }
      }

      async function fetchInvoiceDetailsAndStoreInSessionStorage(id) {
        try {
          const response = await fetch(`http://localhost:8080/Invoice_details/${id}`);
          const data = await response.json();
          
          // Store data in sessionStorage
          sessionStorage.setItem('invoiceDetails', JSON.stringify(data));
          
          console.log('Invoice details stored in sessionStorage:', data);
        } catch (error) {
          console.error('Error fetching or storing invoice details:', error);
        }
      }

      const handleSelectInvoice = async (invoice) => {
        // Set selected invoice
        setSelectedInvoice(invoice);
        // Fetch and store customer data in sessionStorage
        await fetchCustomerDataAndStoreInSessionStorage(invoice.customerid);
        // Fetch and store invoice details in sessionStorage
        await fetchInvoiceDetailsAndStoreInSessionStorage(invoice.invoiceId);
        // Fetch and store car data in sessionStorage
        await fetchDataAndStoreInSessionStorage(invoice.carid);
        // Store selected invoice in sessionStorage
        sessionStorage.setItem('selectedInvoice', JSON.stringify(invoice));
        // Redirect to ReturnLogic component
        window.location.href = '/ReturnLogic';
    };
    

    useEffect(() => {
        const selectedInvoiceFromSession = sessionStorage.getItem('selectedInvoice');
        if (selectedInvoiceFromSession) {
            setSelectedInvoice(JSON.parse(selectedInvoiceFromSession));
        }
    }, []);

    return (
        <Container fluid className="p-5" style={{ backgroundImage: `url("https://images.pexels.com/photos/327540/pexels-photo-327540.jpeg")`, backgroundSize: 'cover', minHeight: '100vh' }}>
            <Row className="justify-content-end" > {/* Align items to the start of the row */}
            <Col xs={4} style={{ width: '40%', margin: '0 auto', opacity:0.8, background: 'linear-gradient(45deg, black, transparent)',  marginTop:'20px', marginBottom:'20px', color:'white'}}> 
            <h1 style={{marginLeft:'20px'}} >Return</h1>
            <Form style={{margin: '20px'}} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" value={email} onChange={handleInputChange} />
                    </Form.Group>
                </Row>
                <Button variant="primary" type="submit" disabled={isLoading} style={{backgroundColor: 'silver',color: 'black', border: '2px solid black'}}>
                    {isLoading ? 'Loading...' : 'Fetch Invoices'}
                </Button>
            </Form>
            {invoices.length > 0 && (
                <Table striped bordered hover className="mt-3">
                    <thead>
                        <tr>
                            <th>Invoice ID</th>
                            <th>Customer Name</th>
                            <th>Customer Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoices.map((invoice, index) => (
                            <tr key={index}>
                                <td>{invoice.invoiceId}</td>
                                <td>{invoice.cName}</td>
                                <td>{invoice.cEmailId}</td>
                                <td>
                                    <Button variant="primary" style={{backgroundColor:'wheat'}} onClick={() => handleSelectInvoice(invoice)}>Select</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
            </Col>
            </Row>
        </Container>
    );
}

export default Cancel;
