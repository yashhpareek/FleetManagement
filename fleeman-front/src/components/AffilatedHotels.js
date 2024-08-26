// import React from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';

// function AffiliatedHotels() {
//   return (
//     <Container>
//       <h2 className="mt-4 mb-3">Affiliated Hotels</h2>
//       <Row className="justify-content-center">
//         <Col xs="auto">
//           <Button variant="primary" href="https://www.makemytrip.com/">Book on MakeMyTrip</Button>
//         </Col>
//         <Col xs="auto">
//           <Button variant="primary" href="https://www.goibibo.com/">Book on Goibibo</Button>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default AffiliatedHotels;
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';


function AffilatedHotels() {
  return (
    <Container style ={{minHeight:"50vh"}}>
      <h2 className="mt-4 mb-3" style ={{textAlign:"center"}}>Affiliated Hotels</h2>
      <Row className="justify-content-center" style={{marginTop:"100px"}}>
        <Col xs="auto">
          <Button variant="primary" href="https://www.makemytrip.com/">Book on MakeMyTrip</Button>
        </Col>
        <Col xs="auto">
          <Button variant="primary" href="https://www.goibibo.com/">Book on Goibibo</Button>
        </Col>
      </Row>
    </Container>
  );
}


export default AffilatedHotels;
