// import React from 'react';

// const CustomerCare = () => {
//     return (
//         <div className="container">
//             <h2>Customer Care</h2>
//             <p>At Fleet Management, we are committed to providing exceptional customer care and support to our valued users.</p>
//             <p>Our dedicated customer care team is available to assist you with any inquiries, concerns, or technical issues you may encounter while using our app.</p>
//             <p>Whether you need help getting started, have questions about specific features, or require troubleshooting assistance, we're here to help.</p>
//             <p>You can reach our customer care team via phone, email, or live chat during our business hours. We strive to provide prompt and personalized support to ensure your experience with our app is smooth and hassle-free.</p>
//             <p>Your satisfaction is our top priority, and we're committed to going above and beyond to meet your needs and exceed your expectations.</p>
//             <p>Thank you for choosing Fleet Management. We appreciate your trust and look forward to serving you.</p>
//         </div>
//     );
// };

// export default CustomerCare;




import React, { useState } from 'react';

function CustomerCare() {
  const [comment, setComment] = useState('');

  const handleCommentSubmit = () => {
    alert('Thank you for your comment!');
    setComment('');
  };

  return (
    <div className="container-fluid" style={{backgroundColor: '#e9c28a'}}>
      <div className="row">
        {/* Image on the right */}
        <div className="col-md-6 order-md-2" style={{ padding: 0 }}>
          <img
            src="https://images.pexels.com/photos/7564196/pexels-photo-7564196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Replace with your image URL
            alt="Customer Care Image"
            style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
          />
        </div>

        {/* customer-care-page on the left */}
        <div className="col-md-6 order-md-1 customer-care-page" style={{ padding: '60px'}}>
          <h2>Customer Care</h2>
          <div className="contact-info">
            <p>
              <strong>Address:</strong> 123 Customer Care Street, City, Country, ZIP Code
            </p>
            <p>
              <strong>Phone:</strong> +1-123-456-7890
            </p>
            <p>
              <strong>Fax:</strong> +1-123-456-7890
            </p>
            <p>
              <strong>Toll-Free:</strong> 1-800-123-4567
            </p>
            <p>
              <strong>Email:</strong> customercare@example.com
            </p>
          </div>

          <div className="comment-section" style={{ marginTop: '20px' }}>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Enter your comment..."
            />
          </div>
          <button onClick={handleCommentSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default CustomerCare;
