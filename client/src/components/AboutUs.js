// import React from 'react';
// import { Card, Col, Row } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// const styles = {
//   gallery: {
//     padding: '80px', // Add padding to the image grid
//     margin: '0 auto', // Center the gallery
//   },
//   galleryItem: {
//     position: 'relative', // Set relative positioning for text overlay
//     overflow: 'hidden',
//     transition: 'transform 0.3s ease',
//     borderRadius: '8px',
//   },
//   galleryImage: {
//     width: '100%',
//     height: 'auto',
//     display: 'block',
//     transition: 'transform 0.3s ease',
//   },
//   overlay: {
//     position: 'absolute',
//     top: '0',
//     left: '0',
//     right: '0',
//     bottom: '0',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(255, 255, 255, 0.8)', // White background with some transparency
//     opacity: '0',
//     transition: 'opacity 0.3s ease',
//     textAlign: 'center',
//     padding: '16px',
//     borderRadius: '8px',
//   },
//   overlayText: {
//     color: '#333',
//   },
// };

// const galleryItems = [
//    { id: 1, src: 'https://www.shutterstock.com/image-photo/group-students-digital-tablet-laptop-600nw-2347371743.jpg', alt: 'Placeholder Image 1', text: 'Join our community of alumni who are making a difference!' },
//     { id: 2, src: 'https://ideas.time.com/wp-content/uploads/sites/5/2013/03/college.jpg?w=720&h=480&crop=1', alt: 'Placeholder Image 2', text: 'Reconnect with your classmates and expand your network.' },
//     { id: 3, src: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', alt: 'Placeholder Image 3', text: 'Stay updated with the latest alumni events and opportunities.' },
//    { id: 4, src: 'https://media.istockphoto.com/id/1371896330/photo/happy-asian-woman-in-his-graduation-day.jpg?s=612x612&w=0&k=20&c=Ur3moWl1fKFms-6UACseglMjoYAynYKzsanZpgK8lFk=', alt: 'Placeholder Image 4', text: 'Contribute to the alumni community and share your journey.' },
//     { id: 5, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUl9tbIOPQsYaqKG56r38B4cBPCzdbrmiJgw&s', alt: 'Placeholder Image 5', text: 'Explore our alumni resources and get involved!' },
//     { id: 6, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2DwsoT-MsBaSlaKCO2Lw0rwPqoUWnaJzfWQ&s', alt: 'Placeholder Image 6', text: 'Support our initiatives and help future generations.' },
//     { id: 7, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLKPA-W3ra4hmhfEJnyf4fzznBXS70sCZjRQ&s', alt: 'Placeholder Image 7', text: 'Share your success stories and inspire others.' },
//     { id: 8, src: 'https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Placeholder Image 8', text: 'Explore the rich history and culture of our alma mater.' },
//     { id: 9, src: 'https://t4.ftcdn.net/jpg/04/98/14/49/360_F_498144940_DkzvRAkgBv1ILU6DiDeMZr6vUufPOra4.jpg', alt: 'Placeholder Image 9', text: 'Join us in our journey towards excellence!' },
//     { id: 10, src: 'https://images.unsplash.com/photo-1590579491624-f98f36d4c763?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sbGVnZSUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D', alt: 'Placeholder Image 10', text: 'Network with professionals from various industries.' },
//     { id: 11, src: 'https://media.istockphoto.com/id/1456729829/photo/young-friends-taking-a-break-between-college-classes.jpg?s=612x612&w=0&k=20&c=s8CzLEtuQeeIoKlz09ICdCWLVpZ9tuwPWV24GgeWzsY=', alt: 'Placeholder Image 11', text: 'Connect with others who share your interests.' },
//     { id: 11, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBEX638gC6ioLn7_F5pfx-BNlhJAU5VQy7_w&s', alt: 'Placeholder Image 11', text: 'Share your success and Inspire others.' },
// ];


// const AboutUs = () => {
//   return (
//     <div style={styles.gallery}>
//       <Row xs={1} md={2} lg={4} className="g-4">
//         {galleryItems.map((item) => (
//           <Col key={item.id}>
//             <Card style={styles.galleryItem}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = 'scale(1.05)';
//                 e.currentTarget.querySelector('.overlay').style.opacity = '1';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = 'scale(1)';
//                 e.currentTarget.querySelector('.overlay').style.opacity = '0';
//               }}
//             >
//               <Card.Img variant="top" src={item.src} alt={item.alt} style={styles.galleryImage} />
//               <div className="overlay" style={styles.overlay}>
//                 <div style={styles.overlayText}>{item.text}</div>
//               </div>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// };

// export default AboutUs;


import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const styles = {
    gallery: {
      padding: '80px', // Add padding to the image grid
      margin: '0 auto', // Center the gallery
      backgroundColor: 'lavender', // Use a semi-transparent color for blending
      backdropFilter: 'blur(10px)', // Apply the blur effect
      borderRadius: '8px', // Optional: Add border radius for rounded corners
    },
    galleryItem: {
      position: 'relative', // Set relative positioning for text overlay
      overflow: 'hidden',
      transition: 'transform 0.3s ease',
      borderRadius: '8px',
    },
    galleryImage: {
      width: '100%',
      height: 'auto',
      display: 'block',
      transition: 'transform 0.3s ease',
    },
    overlay: {
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.8)', // White background with some transparency
      opacity: '0',
      transition: 'opacity 0.3s ease',
      textAlign: 'center',
      padding: '16px',
      borderRadius: '8px',
    },
    overlayText: {
      color: '#333',
    },
  };

const galleryItems = [
  { id: 1, src: 'https://www.shutterstock.com/image-photo/group-students-digital-tablet-laptop-600nw-2347371743.jpg', alt: 'Placeholder Image 1', text: 'Join our community of alumni who are making a difference!' },
  { id: 2, src: 'https://ideas.time.com/wp-content/uploads/sites/5/2013/03/college.jpg?w=720&h=480&crop=1', alt: 'Placeholder Image 2', text: 'Reconnect with your classmates and expand your network.' },
  { id: 3, src: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', alt: 'Placeholder Image 3', text: 'Stay updated with the latest alumni events and opportunities.' },
  { id: 4, src: 'https://media.istockphoto.com/id/1371896330/photo/happy-asian-woman-in-his-graduation-day.jpg?s=612x612&w=0&k=20&c=Ur3moWl1fKFms-6UACseglMjoYAynYKzsanZpgK8lFk=', alt: 'Placeholder Image 4', text: 'Contribute to the alumni community and share your journey.' },
  { id: 5, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUl9tbIOPQsYaqKG56r38B4cBPCzdbrmiJgw&s', alt: 'Placeholder Image 5', text: 'Explore our alumni resources and get involved!' },
  { id: 6, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2DwsoT-MsBaSlaKCO2Lw0rwPqoUWnaJzfWQ&s', alt: 'Placeholder Image 6', text: 'Support our initiatives and help future generations.' },
  { id: 7, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLKPA-W3ra4hmhfEJnyf4fzznBXS70sCZjRQ&s', alt: 'Placeholder Image 7', text: 'Share your success stories and inspire others.' },
  { id: 8, src: 'https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Placeholder Image 8', text: 'Explore the rich history and culture of our alma mater.' },
  { id: 9, src: 'https://t4.ftcdn.net/jpg/04/98/14/49/360_F_498144940_DkzvRAkgBv1ILU6DiDeMZr6vUufPOra4.jpg', alt: 'Placeholder Image 9', text: 'Join us in our journey towards excellence!' },
  { id: 10, src: 'https://images.unsplash.com/photo-1590579491624-f98f36d4c763?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sbGVnZSUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D', alt: 'Placeholder Image 10', text: 'Network with professionals from various industries.' },
  { id: 11, src: 'https://media.istockphoto.com/id/1456729829/photo/young-friends-taking-a-break-between-college-classes.jpg?s=612x612&w=0&k=20&c=s8CzLEtuQeeIoKlz09ICdCWLVpZ9tuwPWV24GgeWzsY=', alt: 'Placeholder Image 11', text: 'Connect with others who share your interests.' },
  { id: 12, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBEX638gC6ioLn7_F5pfx-BNlhJAU5VQy7_w&s', alt: 'Placeholder Image 11', text: 'Share your success and Inspire others.' },
];

const AboutUs = () => {
  return (
    <div style={styles.gallery}>
      <Row xs={1} md={2} lg={4} className="g-4">
        {galleryItems.map((item) => (
          <Col key={item.id}>
            <Card style={styles.galleryItem}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.querySelector('.overlay').style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.querySelector('.overlay').style.opacity = '0';
              }}
            >
              <Card.Img variant="top" src={item.src} alt={item.alt} style={styles.galleryImage} />
              <div className="overlay" style={styles.overlay}>
                <div style={styles.overlayText}>{item.text}</div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AboutUs;
