import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carousel from "react-bootstrap/Carousel";

const AdminHome = () => {
    const navigate = useNavigate();

    const handleGetPost = () => {
        const token = localStorage.getItem("token");
        if (!token) {
            alert('Please log in.');
            navigate('/login');
        } else {
            navigate('/getAllAlumni');
        }
    };

    const styles = {
        container: {
            position: 'relative',
            minHeight: '100vh',
            backgroundImage: 'url("https://www.wilson.edu/sites/default/files/styles/1920_x_1080/public/campus.jpg?itok=6tjXNHDU")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },
        overlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Darker overlay for better text visibility
            zIndex: 1,
        },
        header: {
            backgroundColor: 'transparent', // Make header background transparent
            color: '#E6E6FA', // Light text color
            textAlign: 'center',
            padding: '2rem 0',
            zIndex: 2,
        },
        main: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '2rem',
            marginTop: '1rem',
            zIndex: 2,
        },
        getPostsButton: {
            backgroundColor: '#DDA0DD',
            color: 'white',
            border: 'none',
            padding: '0.75rem 1.5rem',
            fontSize: '1.25rem',
            cursor: 'pointer',
            borderRadius: '5px',
            marginTop: '1.5rem', // Adjusted margin for spacing
            transition: 'background-color 0.3s ease',
            zIndex: 2,
        },
        footer: {
            backgroundColor: 'transparent', // Make footer background transparent
            color: '#E6E6FA', // Light text color
            textAlign: 'center',
            padding: '1rem 0',
            zIndex: 2,
        },
        carouselCaption: {
            textAlign: 'right',
            zIndex: 2,
        },
        carouselImage: {
            width: '30%', // Full width
            height: 'auto', // Fixed height for consistency
            objectFit: 'cover', // Ensures the image covers the area while maintaining aspect ratio
            zIndex: 2,
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.overlay}></div>
            <header style={styles.header}>
                <h1>Welcome to the Alumni Network</h1>
                <p>Connect, Share, and Grow Together</p>
            </header>
            {/* <main style={styles.main}> */}
                <Carousel className='w-75'>
                    {/* First Slide */}
                    <Carousel.Item>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Carousel.Caption style={styles.carouselCaption}>
                                <h3 style={{ color: '#E6E6FA' }}>Stay Connected</h3>
                                <p style={{ fontSize: 'medium', color: '#E6E6FA' }}>
                                    Join our vibrant community of alumni. <br />
                                    Share your experiences, stories, and updates <br />
                                    with fellow alumni. <br /> Let's stay connected!
                                </p>
                            </Carousel.Caption>
                            <img
                                className="d-block"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS12iUZRbMRmY-pWd1bFOgsvehdIMWJl4lIag&s"
                                alt="First slide"
                                style={styles.carouselImage} // Image style
                            />
                        </div>
                    </Carousel.Item>

                    {/* Second Slide */}
                    <Carousel.Item>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Carousel.Caption style={styles.carouselCaption}>
                                <h3 style={{ color: '#E6E6FA' }}>Networking Opportunities</h3>
                                <p style={{ fontSize: 'medium', color: '#E6E6FA' }}>
                                    Explore opportunities, network with peers, <br />
                                    and contribute to the alumni community.
                                </p>
                            </Carousel.Caption>
                            <img
                                className="d-block"
                                src="https://media.licdn.com/dms/image/C5612AQGD0FUSKQRX9Q/article-cover_image-shrink_600_2000/0/1602129987189?e=2147483647&v=beta&t=M7jgi-jh7oSDJEgw8snHpoqoD0NqfsZFmYaj1NUAZ74"
                                alt="Second slide"
                                style={styles.carouselImage} // Image style
                            />
                        </div>
                    </Carousel.Item>

                    {/* Third Slide */}
                    <Carousel.Item>
                        <div style={{ display: 'flex', alignItems: 'center'}}>
                            <Carousel.Caption style={styles.carouselCaption}>
                                <h3 style={{ color: '#E6E6FA' }}>Collaboration & Discussion</h3>
                                <p style={{ fontSize: 'medium', color: '#E6E6FA' }}>
                                    Engage in discussions, seek advice, <br />
                                    and collaborate on projects with fellow alumni.
                                </p>
                            </Carousel.Caption>
                            <img
                                className="d-block"
                                src="https://cdn.prod.website-files.com/62bc0c6ce91b764dad9326a6/65576daaf2253e3ef326f7c4_oKc4yjYdWg4257__KAZXUBcCnmCNI_InN_2WklMOWNFspGTLCc_sEuhJtUs1yG9FdaCMeenna1VwYoLbQ9u-cY2OU8JIjMgd6oO5lnPxKc5DmeUfsG1jTY4QR1KrbLvVnxr69kkNXXaj03Qll8AwAcU.png"
                                alt="Third slide"
                                style={styles.carouselImage} // Image style
                            />
                        </div>
                    </Carousel.Item>
                </Carousel>
                <button 
                    style={styles.getPostsButton}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#BA55D3')}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#DDA0DD')}
                    onClick={handleGetPost}
                >
                    Get All Alumni Details
                </button>
            {/* </main> */}
            <footer style={styles.footer}>
                <p>&copy; 2024 Alumni Network. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default AdminHome;
