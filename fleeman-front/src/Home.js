import React, { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import * as THREE from "three";
import './App.css'

// const Home = () => {
//     const [vantaEffect, setVantaEffect] = useState(0);
//     const vantaRef = useRef(null);
  
//     useEffect(() => {
//       if (!vantaEffect) {
//         setVantaEffect(
//           BIRDS({
//             el: vantaRef.current,
//             THREE: THREE,
//             mouseControls: true,
//             touchControls: true,
//             gyroControls: false,
//             minHeight: 600.0,
//             minWidth: 600.0,
//             scale: 1.0,
//             scaleMobile: 1.0
//           })
//         );
//       }
  
//       return () => {
//         if (vantaEffect) vantaEffect.destroy();
//       };
//     }, [vantaEffect]);
  
//     return (
//       <div
//         ref={vantaRef}
//         style={{ // Inline styles for .home-container
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           height: "100vh"
//         }}
//       >
        
//          <div className="home-content" style={{ textAlign: "center" }}>
//           <div>
//             <h1 style={{ 
//               color: "#ff5722", 
//               fontWeight: "bold", 
//               fontStyle: "italic", 
//               textDecoration: "none", 
//               fontSize: "6rem", 
//               textShadow: "2px 2px 4px #000",
//               marginBottom: "0" 
//             }}>INDIADRIVE</h1>
//             <h2 style={{ 
//               color: "#FFC300", 
//               textDecoration: "none", 
//               fontSize: "4rem", 
//               textShadow: "2px 2px 4px #000",
//               marginTop: "0", 
//               marginLeft: "0.5rem" 
//             }}>Rent-A-car</h2>
//           </div>
//         </div>
//       </div>
//     );
// };
// export default Home;

const Home = () => {
    const [vantaEffect, setVantaEffect] = useState(0);
    const vantaRef = useRef(null);
  
    useEffect(() => {
      if (!vantaEffect) {
        setVantaEffect(
          BIRDS({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 600.0,
            minWidth: 600.0,
            scale: 1.0,
            scaleMobile: 1.0
          })
        );
      }
  
      return () => {
        if (vantaEffect) vantaEffect.destroy();
      };
    }, [vantaEffect]);
  
    return (
      <div
        ref={vantaRef}
        style={{ // Inline styles for .home-container
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        }}
      >
        
         <div className="home-content" style={{ textAlign: "center" }}>
          <div>
          <h1 style={{ 
          fontSize: "130px", 
          color: "rgba(37, 131, 253)",
          margin: "-25px 0",
          background: "-webkit-linear-gradient(160deg, rgb(233 145 80) 0%, rgb(235 233 222) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: "bold",
          textAlign: "right",
          marginRight: "500px" // Align the text to the right
        }}>INDIADRIVE</h1>
          </div>
        </div>

        <img 
  // src="/Images/CarHome.png"
  // alt="Image Above INDIADRIVE" 
  style={{
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "500px", // Adjust the width of the image as needed
    zIndex: 1
  }}
/>
      </div>
    );
};
export default Home;