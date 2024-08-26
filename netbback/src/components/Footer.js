
// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import '@fortawesome/fontawesome-free/css/all.css';

// function Footer() {
//   const sectionStyle = {
//     background: `url('https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg') no-repeat center center fixed`,
//     backgroundSize: 'cover',
//     paddingTop: '50px', // Adjust as needed
//     paddingBottom: '50px', // Adjust as needed
//   };

//   return (
//     <footer style={sectionStyle} className="bg-dark text-light py-3 mt-auto">
//       <Container>
//         <Row>
//           <Col>
//             <p>India Drive</p>
//             <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
//             <div>
//               <li>
//                 <a href="mailto:example@gmail.com" className="text-light" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
//                   <i className="fa fa-envelope"></i> Gmail
//                 </a>
//               </li>
//               <li>
//                 <a href="https://www.instagram.com/" className="text-light" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
//                   <i className="fa-brands fa-instagram"></i> Instagram
//                 </a>
//               </li>
//               <li>
//                 <a href="https://www.facebook.com/" className="text-light" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
//                   <i className="fa-brands fa-facebook"></i> Facebook
//                 </a>
//               </li>
//               <li>
//                 <a href="https://twitter.com/" className="text-light" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
//                   <i className="fa-brands fa-twitter"></i> Twitter
//                 </a>
//               </li>
//             </div>
//           </Col>
//           <Col>
//             <h5>Useful Links</h5>
//             <ul className="list-unstyled">
//               <li><Link to="/aboutus" className="text-light" style={{ textDecoration: 'none' }}>About Us</Link></li>
//               <li><Link to="/AffiliatedHotels" className="text-light" style={{ textDecoration: 'none' }}>Affiliated Hotels</Link></li>
//               <li><Link to="/WeatherRedirect" className="text-light" style={{ textDecoration: 'none' }}>Weather</Link></li>
//               <li><Link to="/CustomerCare" className="text-light" style={{ textDecoration: 'none' }}>Contact Us</Link></li>
//               <li><Link to="/sitemap" className="text-light" style={{ textDecoration: 'none' }}>SiteMap</Link></li>
//               <li><Link to="/CareerPage" className="text-light" style={{ textDecoration: 'none' }}>Careers</Link></li>
//             </ul>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// }

// export default Footer;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';


function Footer() {
  const sectionStyle = {
    background: `url('https://t4.ftcdn.net/jpg/05/00/76/75/360_F_500767502_AdezwSUsyb04l79RpV6zubKulRnIHpd0.jpg') no-repeat center center fixed`,
    backgroundSize: 'cover',
    paddingTop: '50px', // Adjust as needed
    paddingBottom: '50px', // Adjust as needed
  
  
  };

  return (
    <footer style={sectionStyle} className="bg-dark text-light py-3 mt-auto">
      <Container style = {{paddingTop:"50px"}}>
        <Row>
          <Col>
            <p>India Drive</p>
            <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
            <div>
              <li>
                <a href="mailto:example@gmail.com" className="text-light" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <i className="fa fa-envelope"></i> Gmail
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" className="text-light" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <i className="fa-brands fa-instagram"></i> Instagram
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/" className="text-light" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <i className="fa-brands fa-facebook"></i> Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com/" className="text-light" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <i className="fa-brands fa-twitter"></i> Twitter
                </a>
              </li>
            </div>
          </Col>
          <Col>
            <h5>Useful Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/aboutus" className="text-light" style={{ textDecoration: 'none' }}>About Us</Link></li>
              <li><Link to="/AffiliatedHotels" className="text-light" style={{ textDecoration: 'none' }}>Affiliated Hotels</Link></li>
              <li><Link to="/WeatherRedirect" className="text-light" style={{ textDecoration: 'none' }}>Weather</Link></li>
              <li><Link to="/CustomerCare" className="text-light" style={{ textDecoration: 'none' }}>Contact Us</Link></li>
              <li><Link to="/sitemap" className="text-light" style={{ textDecoration: 'none' }}>SiteMap</Link></li>
              <li><Link to="/CareerPage" className="text-light" style={{ textDecoration: 'none' }}>Careers</Link></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
