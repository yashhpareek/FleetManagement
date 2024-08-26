// import React from 'react';
// import { Button } from 'react-bootstrap';

// function WeatherRedirect() {
//   const handleRedirect = () => {
//     window.location.href = 'https://www.weather.com/';
//   };

//   return (
//     <div className="text-center mt-4">
//       <h2>Check Weather</h2>
//       <Button variant="primary" onClick={handleRedirect}>Go to Weather.com</Button>
//     </div>
//   );
// }

// export default WeatherRedirect;
import React from 'react';
import { Button } from 'react-bootstrap';

function WeatherRedirect() {
  const handleRedirect = () => {
    window.location.href = 'https://www.weather.com/';
  };

  return (
    <div className="text-center mt-4" style = {{minHeight:"50vh",paddingTop:"50px"}}>
      <h2>Check Weather</h2>
      <Button variant="primary" style={{marginTop:"40px"}} onClick={handleRedirect}>Go to Weather.com</Button>
    </div>
  );
}

export default WeatherRedirect;
