// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useAuth } from '../providers/AuthProvider';
// import { useNavigate } from 'react-router-dom';

// const Profile = () => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { userId } = useAuth();
//   const navigate=useNavigate();

//   useEffect(() => {
//     const fetchUser = async () => {
//       if (userId) {
//         try {
//           console.log(userId);
//           const response = await axios.get(`http://localhost:5000/user/${userId}`);
//           console.log(response.data);
//           setUser(response.data);
//         } catch (error) {
//           console.log("hello");
//           setError('Failed to fetch user data');
//         } finally {
//           setLoading(false);
//         }
//       } else {
//         setError('No user ID found in local storage');
//         setLoading(false);
//       }
//     };

//     fetchUser();
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   const firstLetter = user?.name?.charAt(0).toUpperCase();
//   function handleMyPosts(userId){
//     navigate('/myposts/:userId')
//   }
//   function handleMyLikedPosts(userId){
//     navigate('/mylikedposts/:userId')
//   }
//   return (
//     user && (
//       <div style={styles.profileContainer}>
//         <div style={styles.profileImage}>
//           <span style={styles.profileInitial}>{firstLetter}</span>
//         </div>
//         <div style={styles.profileDetails}>
//           <h1 style={styles.profileTitle}>Profile</h1>
//           <p><strong>Name:</strong> {user.name}</p>
//           <p><strong>Email:</strong> {user.email}</p>
//           <div onClick={()=>handleMyPosts(user._id)}>My Posts</div>
//           <div onClick={()=>handleMyLikedPosts(user._id)}>My Liked Posts</div>
//         </div>
//       </div>
//     )
//   );
// };

// const styles = {
//   profileContainer: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: '50px',
//     padding: '80px'
//   },
//   profileImage: {
//     width: '100px',
//     height: '100px',
//     backgroundColor: '#007bff', // Change color as needed
//     color: 'white',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontSize: '36px',
//     borderRadius: '50%',
//     marginRight: '20px',
//   },
//   profileInitial: {
//     fontWeight: 'bold',
//   },
//   profileDetails: {
//     fontFamily: 'Arial, sans-serif',
//   },
//   profileTitle: {
//     margin: 0,
//     fontSize: '24px',
//   },
// };

// export default Profile;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Profile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const { userId } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            if (userId) {
                try {
                    const response = await axios.get(`http://localhost:5000/user/${userId}`);
                    setUser(response.data);
                } catch (error) {
                    setError('Failed to fetch user data');
                } finally {
                    setLoading(false);
                }
            } else {
                setError('No user ID found in local storage');
                setLoading(false);
            }
        };

        fetchUser();
    }, [userId]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <Alert variant="danger">{error}</Alert>;
    }

    const firstLetter = user?.name?.charAt(0).toUpperCase();

    function handleMyPosts(userId) {
        const role=JSON.parse(localStorage.getItem('role'));
            if(role==='user'){
                navigate('/noUserPosts');
            }
            else{
                navigate(`/myposts/${userId}`);
            }
    }

    function handleMyLikedPosts(userId) {
        navigate(`/mylikedposts/${userId}`);
    }

    const styles = {
        container: {
            position: 'relative',
            minHeight: '100vh',
            backgroundImage: 'url("https://www.wilson.edu/sites/default/files/styles/1920_x_1080/public/campus.jpg?itok=6tjXNHDU")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        overlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            backdropFilter: 'blur(8px)',
            zIndex: 1,
        },
        card: {
            width: '30rem',
            backgroundColor: '#4B0082', // Same color as the Login background
            color: '#FFFFFF', // White text for contrast
            zIndex: 2,
            padding: '2rem',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        },
        profileImage: {
            width: '100px',
            height: '100px',
            backgroundColor: '#DDA0DD', // Same color as the "Get Posts" button
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '36px',
            borderRadius: '50%',
            margin: '0 auto 20px auto',
        },
        profileInitial: {
            fontWeight: 'bold',
        },
        profileTitle: {
            margin: '10px 0',
            fontSize: '24px',
        },
        button: {
            backgroundColor: '#DDA0DD', // Same color as the "Get Posts" button
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            padding: '0.5rem 1rem',
            margin: '0.5rem',
            transition: 'background-color 0.3s ease',
        },
        buttonHover: {
            backgroundColor: '#ba7fba', // Darker shade for hover effect
        },
    };

    return (
        user && (
            <div style={styles.container}>
                <div style={styles.overlay}></div>
                <div className="container d-flex align-items-center justify-content-center h-100" style={{ zIndex: 2 }}>
                    <Card style={styles.card}>
                        <Card.Body className="text-center">
                            <div style={styles.profileImage}>
                                <span style={styles.profileInitial}>{firstLetter}</span>
                            </div>
                            <h1 style={styles.profileTitle}>Profile</h1>
                            <p><strong>Name:</strong> {user.name}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                            <div className="d-flex justify-content-center">
                                <Button
                                    style={styles.button}
                                    onClick={() => handleMyPosts(user._id)}
                                >
                                    My Posts
                                </Button>
                                <Button
                                    style={styles.button}
                                    onClick={() => handleMyLikedPosts(user._id)}
                                >
                                    My Liked Posts
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    );
};

export default Profile;
