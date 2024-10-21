// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { Container, Typography, Card, CardContent, CardMedia, CircularProgress, Grid } from '@mui/material';
// // import { useAuth } from '../providers/AuthProvider';
// // import { useNavigate } from 'react-router-dom';
// // import { Button } from 'react-bootstrap';

// // const LikedPosts = () => {
// //     const { userId } = useAuth(); // Get userId from the auth context
// //     const [likedPosts, setLikedPosts] = useState([]);
// //     const [loading, setLoading] = useState(true);
// //     const [error, setError] = useState('');
// //     const navigate=useNavigate()

// //     useEffect(() => {
// //         const fetchLikedPosts = async () => {
// //             try {
// //                 const response = await axios.get(`http://localhost:5000/posts/${userId}/likedPosts`);
// //                 setLikedPosts(response.data);
// //                 setLoading(false);
// //             } catch (err) {
// //                 console.error('Error fetching liked posts:', err);
// //                 setError('Failed to load liked posts.');
// //                 setLoading(false);
// //             }
// //         };

// //         fetchLikedPosts();
// //     }, [userId]);
// //     function handleSinglePost(id) {
// //         navigate(`/posts/${id}`);
// //     }


// //     if (loading) return <CircularProgress />;
// //     if (error) return <Typography variant="h6" color="error">{error}</Typography>;

// //     return (
// //         <Container style={{ padding: '80px' }}>
// //             <Typography variant="h4" gutterBottom>Liked Posts</Typography>
// //             <Grid container spacing={3}>
// //                 {likedPosts.length > 0 ? (
// //                     likedPosts.map((post) => (
// //                         <Grid item xs={12} sm={6} md={4} key={post._id}>
// //                             <Card>
// //                                 {post.selectedFile && (
// //                                     <CardMedia
// //                                         component="img"
// //                                         height="140"
// //                                         image={`http://localhost:5000/${post.selectedFile}`} // Make sure this path is correct
// //                                         alt={post.title}
// //                                     />
// //                                 )}
// //                                 <CardContent>
// //                                     <Typography variant="h5">{post.title}</Typography>
// //                                     <Typography variant="body2" color="textSecondary">{post.message}</Typography>
// //                                     <Typography variant="caption" color="textSecondary">Likes: {post.likes.length}</Typography>
// //                                     <div></div>
// //                                     <Button className="custom-button" onClick={() => handleSinglePost(post._id)} variant="primary" size="sm">
// //                                                 See More
// //                                             </Button>
// //                                 </CardContent>
// //                             </Card>
// //                         </Grid>
// //                     ))
// //                 ) : (
// //                     <Typography variant="body1">No liked posts found.</Typography>
// //                 )}
// //             </Grid>
// //         </Container>
// //     );
// // };

// // export default LikedPosts;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Container, Alert, Card, Button, Spinner, Row, Col } from 'react-bootstrap';
// import { useAuth } from '../providers/AuthProvider';
// import { useNavigate } from 'react-router-dom';

// const LikedPosts = () => {
//     const { userId } = useAuth();
//     const [likedPosts, setLikedPosts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchLikedPosts = async () => {
//             if (!userId) {
//                 setError('User not authenticated.');
//                 setLoading(false);
//                 return;
//             }

//             try {
//                 const response = await axios.get(`http://localhost:5000/posts/${userId}/likedPosts`);
//                 if (Array.isArray(response.data)) {
//                     setLikedPosts(response.data);
//                 } else {
//                     throw new Error('Expected an array response');
//                 }
//             } catch (err) {
//                 console.error('Error fetching liked posts:', err);
//                 setError('Failed to load liked posts.');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchLikedPosts();
//     }, [userId]);

//     const handleSinglePost = (id) => {
//         navigate(`/posts/${id}`);
//     };

//     if (loading) return <Spinner animation="border" variant="primary" />;
//     if (error) return <Alert variant="danger">{error}</Alert>;

//     return (
//         <Container style={{ padding: '80px', backgroundColor: '#E6E6FA' }}> {/* Lavender background */}
//             <h4 className="mb-4">Liked Posts</h4>
//             <Row>
//                 {likedPosts.length > 0 ? (
//                     likedPosts.map((post) => (
//                         <Col xs={12} sm={6} md={4} key={post._id}>
//                             <Card style={{ backgroundColor: '#4B0082', color: '#FFFFFF', height: '100%' }}>
//                                 {post.selectedFile && (
//                                     <Card.Img
//                                         variant="top"
//                                         src={`http://localhost:5000/${post.selectedFile}`}
//                                         alt={post.title}
//                                         style={{ objectFit: 'cover', height: '140px' }}
//                                     />
//                                 )}
//                                 <Card.Body>
//                                     <Card.Title>{post.title}</Card.Title>
//                                     <Card.Text style={{ color: '#D3D3D3' }}>{post.message}</Card.Text>
//                                     <Card.Text style={{ color: '#D3D3D3' }}>Likes: {post.likes.length}</Card.Text>
//                                     <Button 
//                                         style={{ backgroundColor: '#DDA0DD', color: '#FFFFFF', width: '100%', marginTop: '10px' }} 
//                                         onClick={() => handleSinglePost(post._id)}
//                                     >
//                                         See More
//                                     </Button>
//                                 </Card.Body>
//                             </Card>
//                         </Col>
//                     ))
//                 ) : (
//                     <p>No liked posts found.</p>
//                 )}
//             </Row>
//         </Container>
//     );
// };

// export default LikedPosts;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Alert, Card, Button, Spinner, Row, Col } from 'react-bootstrap';
import { useAuth } from '../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const LikedPosts = () => {
    const { userId } = useAuth();
    const [likedPosts, setLikedPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchLikedPosts = async () => {
            if (!userId) {
                setError('User not authenticated.');
                setLoading(false);
                return;
            }

            try {
                const response = await axios.get(`http://localhost:5000/posts/${userId}/likedPosts`);
                if (Array.isArray(response.data)) {
                    setLikedPosts(response.data);
                } else {
                    throw new Error('Expected an array response');
                }
            } catch (err) {
                console.error('Error fetching liked posts:', err);
                setError('Failed to load liked posts.');
            } finally {
                setLoading(false);
            }
        };

        fetchLikedPosts();
    }, [userId]);

    const handleSinglePost = (id) => {
        navigate(`/posts/${id}`);
    };

    if (loading) return <Spinner animation="border" variant="primary" />;
    if (error) return <Alert variant="danger">{error}</Alert>;

    return (
        <div style={{ backgroundColor: '#E6E6FA', minHeight: '100vh', padding: '80px' }}> {/* Lavender background */}
            <Container> 
                <h4 className="mb-4">Liked Posts</h4>
                <Row>
                    {likedPosts.length > 0 ? (
                        likedPosts.map((post) => (
                            <Col xs={12} sm={6} md={4} key={post._id}>
                                <Card style={{ backgroundColor: '#4B0082', color: '#FFFFFF', height: '100%' }}>
                                    {post.selectedFile && (
                                        <Card.Img
                                            variant="top"
                                            src={`http://localhost:5000/${post.selectedFile}`}
                                            alt={post.title}
                                            style={{ objectFit: 'cover', height: '140px' }}
                                        />
                                    )}
                                    <Card.Body>
                                        <Card.Title>{post.title}</Card.Title>
                                        {/* Removed the Card.Text for message */}
                                        <Card.Text style={{ color: '#D3D3D3' }}>Likes: {post.likes.length}</Card.Text>
                                        <Button 
                                            style={{ backgroundColor: '#DDA0DD', color: '#FFFFFF', width: '100%', marginTop: '10px' }} 
                                            onClick={() => handleSinglePost(post._id)}
                                        >
                                            See More
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    ) : (
                        <p>No liked posts found.</p>
                    )}
                </Row>
            </Container>
        </div>
    );
};

export default LikedPosts;
