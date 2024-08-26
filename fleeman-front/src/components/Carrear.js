import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function CareerPage() {
  // Sample job openings data
  const jobOpenings = [
    {
      id: 1,
      position: 'Software Engineer',
      location: 'New York, NY',
      description: 'We are seeking a talented software engineer to join our team...',
      requirements: 'Requirements: Bachelor\'s degree in Computer Science or related field...',
    },
    {
      id: 2,
      position: 'Marketing Specialist',
      location: 'San Francisco, CA',
      description: 'We are looking for a creative marketing specialist to help us promote our products...',
      requirements: 'Requirements: Bachelor\'s degree in Marketing or related field...',
    },
    // Add more job openings as needed
  ];

  return (
    <Container style={{padding:"40px"}}>
      <h2 className="mt-4 mb-3">Job Openings</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {jobOpenings.map(job => (
          <Col key={job.id}>
            <Card>
              <Card.Body>
                <Card.Title>{job.position}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{job.location}</Card.Subtitle>
                <Card.Text>{job.description}</Card.Text>
                <Card.Text>{job.requirements}</Card.Text>
                <Button variant="primary">Apply Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CareerPage;
