// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const HomePage = () => {
//     const navigate = useNavigate();

//     const handleGetPost = () => {
//         navigate('/getposts');
//     };

//     const styles = {
//         container: {
//             display: 'flex',
//             flexDirection: 'column',
//             minHeight: '100vh',
//             backgroundColor: '#f4f4f4',
//             padding: '80px',
//         },
//         header: {
//             backgroundColor: '#E6E6FA', // Lavender background
//             color: '#4B0082', // Indigo text
//             textAlign: 'center',
//             padding: '2rem 0',
//         },
//         main: {
//             flex: 1,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             padding: '2rem',
//             marginTop: '1rem',
//         },
//         welcome: {
//             maxWidth: '600px',
//             textAlign: 'center',
//             marginBottom: '2rem',
//         },
//         getPostsButton: {
//             backgroundColor: '#DDA0DD', // Plum button color
//             color: 'white',
//             border: 'none',
//             padding: '0.75rem 1.5rem',
//             fontSize: '1.25rem',
//             cursor: 'pointer',
//             borderRadius: '5px',
//             marginTop: '1rem',
//             transition: 'background-color 0.3s ease',
//         },
//         gallery: {
//             columnCount: 3, // Adjust this number to have more or fewer columns
//             columnGap: '16px',
//             width: '100%',
//             maxWidth: '1000px',
//         },
//         galleryItem: {
//             breakInside: 'avoid',
//             marginBottom: '16px',
//             backgroundColor: '#fff',
//             borderRadius: '8px',
//             boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
//             overflow: 'hidden',
//             display: 'inline-block',
//             width: '100%',
//         },
//         galleryImage: {
//             width: '100%',
//             height: 'auto',
//             display: 'block',
//         },
//         footer: {
//             backgroundColor: '#E6E6FA', // Lavender footer
//             color: '#4B0082', // Indigo text
//             textAlign: 'center',
//             padding: '1rem 0',
//         },
//     };

//     // Sample gallery data
//     const galleryItems = [
//         { id: 1, src: 'https://www.shutterstock.com/image-photo/group-students-digital-tablet-laptop-600nw-2347371743.jpg', alt: 'Placeholder Image 1' },
//         { id: 2, src: 'https://media.istockphoto.com/id/1371896330/photo/happy-asian-woman-in-his-graduation-day.jpg?s=612x612&w=0&k=20&c=Ur3moWl1fKFms-6UACseglMjoYAynYKzsanZpgK8lFk=', alt: 'Placeholder Image 2' },
//         //{ id: 3, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmDFZSXVWxXS9OWy16gwy7EJynNLLR3oJpuQ&s', alt: 'Placeholder Image 3' },
//         { id: 4, src: 'https://ideas.time.com/wp-content/uploads/sites/5/2013/03/college.jpg?w=720&h=480&crop=1', alt: 'Placeholder Image 4' },
//         { id: 5, src: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', alt: 'Placeholder Image 5' },
//         { id: 6, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6KnyKsjXlDuJvHmFw-ZPbfmQ_c23sNfCd3Q&s', alt: 'Placeholder Image 6' },
//         { id: 7, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUl9tbIOPQsYaqKG56r38B4cBPCzdbrmiJgw&s', alt: 'Placeholder Image 6' },
//         { id: 8, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2DwsoT-MsBaSlaKCO2Lw0rwPqoUWnaJzfWQ&s', alt: 'Placeholder Image 6' },
//         { id: 9, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLKPA-W3ra4hmhfEJnyf4fzznBXS70sCZjRQ&s', alt: 'Placeholder Image 6' },
//         { id: 3, src: 'https://images.moneycontrol.com/static-mcnews/2024/08/20240805084402_EA-Sports-College-Football-25.png?impolicy=website&width=1600&height=900', alt: 'Placeholder Image 3' },
        
//     ];

//     return (
//         <div style={styles.container}>
//             <header style={styles.header}>
//                 <h1>Welcome to the Alumni Network</h1>
//                 <p>Connect, Share, and Grow Together</p>
//             </header>
//             <main style={styles.main}>
//                 <section style={styles.welcome}>
//                     <h2>Create and Share Your Posts</h2>
//                     <p>
//                         Join our vibrant community of alumni. Share your experiences, stories,
//                         and updates with fellow alumni. Let's stay connected!
//                     </p>
//                     <button
//                         style={styles.getPostsButton}
//                         onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#BA55D3')}
//                         onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#DDA0DD')}
//                         onClick={handleGetPost}
//                     >
//                         Get Posts
//                     </button>
//                 </section>
//                 <section style={styles.gallery}>
//                     {galleryItems.map((item) => (
//                         <div key={item.id} style={styles.galleryItem}>
//                             <img
//                                 src={item.src}
//                                 alt={item.alt}
//                                 style={styles.galleryImage}
//                             />
//                         </div>
//                     ))}
//                 </section>
//             </main>
//             <footer style={styles.footer}>
//                 <p>&copy; 2024 Alumni Network. All rights reserved.</p>
//             </footer>
//         </div>
//     );
// };

// export default HomePage;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useAuth } from '../providers/AuthProvider';
import Carousel from "react-bootstrap/Carousel";

const HomePage = () => {
    const navigate = useNavigate();

    const handleGetPost = () => {
        const token = localStorage.getItem("token");
        if (!token) {
            alert('Please log in.');
            navigate('/login');
        } else {
            navigate('/getposts');
        }
    };

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            backgroundColor: '#f4f4f4',
            padding: '80px',
        },
        header: {
            backgroundColor: '#E6E6FA', // Lavender background
            color: '#4B0082', // Indigo text
            textAlign: 'center',
            padding: '2rem 0',
        },
        main: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '2rem',
            marginTop: '1rem',
        },
        carousel: {
            width: '500%',
            maxWidth: '600px',
            marginBottom: '2rem',
        },
        getPostsButton: {
            backgroundColor: '#DDA0DD', // Plum button color
            color: 'white',
            border: 'none',
            padding: '0.75rem 1.5rem',
            fontSize: '1.25rem',
            cursor: 'pointer',
            borderRadius: '5px',
            marginTop: '1rem',
            transition: 'background-color 0.3s ease',
        },
        gallery: {
            //padding: '80px',
            columnCount: 4, // Adjust this number to have more or fewer columns
            columnGap: '15px',
            width: '100%',
            maxWidth: '1000px',
        },
        galleryItem: {
            breakInside: 'avoid',
            marginBottom: '16px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            display: 'inline-block',
            width: '100%',
        },
        galleryImage: {
            width: '100%',
            height: 'auto',
            display: 'block',
        },
        footer: {
            backgroundColor: '#E6E6FA', // Lavender footer
            color: '#4B0082', // Indigo text
            textAlign: 'center',
            padding: '1rem 0',
        },
    };


    // Updated gallery data after removing the three images
    const galleryItems = [
        { id: 1, src: 'https://www.shutterstock.com/image-photo/group-students-digital-tablet-laptop-600nw-2347371743.jpg', alt: 'Placeholder Image 1' },
        { id: 4, src: 'https://ideas.time.com/wp-content/uploads/sites/5/2013/03/college.jpg?w=720&h=480&crop=1', alt: 'Placeholder Image 4' },
        { id: 5, src: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', alt: 'Placeholder Image 5' },
        { id: 6, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4jE7no3yRRKvGgSiJyy8Rqa-zgo4Zb_FtsQ&ss', alt: 'Placeholder Image 6' },
        { id: 7, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUl9tbIOPQsYaqKG56r38B4cBPCzdbrmiJgw&s', alt: 'Placeholder Image 7' },
        { id: 8, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2DwsoT-MsBaSlaKCO2Lw0rwPqoUWnaJzfWQ&s', alt: 'Placeholder Image 8' },
        { id: 9, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLKPA-W3ra4hmhfEJnyf4fzznBXS70sCZjRQ&s', alt: 'Placeholder Image 9' },
        { id: 9, src: 'https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Placeholder Image 9' },
        { id: 9, src: 'https://t4.ftcdn.net/jpg/04/98/14/49/360_F_498144940_DkzvRAkgBv1ILU6DiDeMZr6vUufPOra4.jpg', alt: 'Placeholder Image 9' },
        { id: 9, src: 'https://images.unsplash.com/photo-1590579491624-f98f36d4c763?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sbGVnZSUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D', alt: 'Placeholder Image 9' },
        { id: 9, src: 'https://media.istockphoto.com/id/1456729829/photo/young-friends-taking-a-break-between-college-classes.jpg?s=612x612&w=0&k=20&c=s8CzLEtuQeeIoKlz09ICdCWLVpZ9tuwPWV24GgeWzsY=', alt: 'Placeholder Image 9' },
    ];


    // Slider settings
    // const sliderSettings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    // };

    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1>Welcome to the Alumni Network</h1>
                <p>Connect, Share, and Grow Together</p>
            </header>
            <main style={styles.main}>
            {/* <section style={styles.carousel}> */}
            <section style={styles.gallery}>
                    {galleryItems.map((item) => (
                        <div key={item.id} style={styles.galleryItem}>
                            <img
                                src={item.src}
                                alt={item.alt}
                                style={styles.galleryImage}
                            />
                        </div>
                    ))}
                </section>
    <Carousel className='w-75'>
        {/* First Slide */}
        <Carousel.Item>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Carousel.Caption style={{textAlign:'right'}}>
                    <h3 style={{ color: 'black' }}>Stay Connected</h3>
                    <p style={{ fontSize: 'medium', color: 'black' }}>
                        Join our vibrant community of alumni. <br></br>
                        Share your experiences,stories,and updates <br></br>with fellow alumni.<br></br> Let's stay connected!
                    </p>
                </Carousel.Caption>
                <img
                    className="d-block w-40 center"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS12iUZRbMRmY-pWd1bFOgsvehdIMWJl4lIag&s"
                    alt="First slide"
                    style={{ width: '40%', height: 'auto' }} // 50% width for image
                />
            </div>
        </Carousel.Item>

        {/* Second Slide */}
        <Carousel.Item>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Carousel.Caption style={{textAlign: 'right' }}>
                    <h3 style={{ color: 'black' }}>Networking Opportunities</h3>
                    <p style={{ fontSize: 'medium', color: 'black' }}>
                        Explore opportunities, network with peers,<br></br> and contribute to the alumni community.
                    </p>
                </Carousel.Caption>
                <img
                    className="d-block" // Image class
                    src="https://media.licdn.com/dms/image/C5612AQGD0FUSKQRX9Q/article-cover_image-shrink_600_2000/0/1602129987189?e=2147483647&v=beta&t=M7jgi-jh7oSDJEgw8snHpoqoD0NqfsZFmYaj1NUAZ74"
                    alt="Second slide"
                    style={{ width: '40%', height: 'auto' }} // 50% width for image
                />
            </div>
        </Carousel.Item>

        {/* Third Slide */}
        <Carousel.Item>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Carousel.Caption style={{textAlign: 'right' }}>
                    <h3 style={{ color: 'black' }}>Collaboration & Discussion</h3>
                    <p style={{ fontSize: 'medium', color: 'black' }}>
                        Engage in discussions, seek advice,<br></br> and collaborate on projects with fellow alumni.
                    </p>
                </Carousel.Caption>
                <img
                    className="d-block" // Image class
                    src="https://cdn.prod.website-files.com/62bc0c6ce91b764dad9326a6/65576daaf2253e3ef326f7c4_oKc4yjYdWg4257__KAZXUBcCnmCNI_InN_2WklMOWNFspGTLCc_sEuhJtUs1yG9FdaCMeenna1VwYoLbQ9u-cY2OU8JIjMgd6oO5lnPxKc5DmeUfsG1jTY4QR1KrbLvVnxr69kkNXXaj03Qll8AwAcU.png"
                    alt="Third slide"
                    style={{ width: '40%', height: 'auto' }} // 50% width for image
                />
            </div>
        </Carousel.Item>
    </Carousel>
{/* </section> */}

                <button 
                    style={styles.getPostsButton}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#BA55D3')}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#DDA0DD')}
                    onClick={handleGetPost}
                >
                    Get Posts
                </button>
            </main>
            <footer style={styles.footer}>
                <p>&copy; 2024 Alumni Network. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;
