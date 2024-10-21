// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Card, CardContent, Typography, CircularProgress, Grid } from '@mui/material';
// import { useAuth } from '../providers/AuthProvider'; // Assuming you have an auth context
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'; // Ensure both icons are imported
// import { useNavigate } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
// const MyPostsComponent = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { userId } = useAuth(); // Get user ID from auth provider
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUserPosts = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/posts/user/${userId}`);
//         setPosts(response.data);
//       } catch (err) {
//         setError('Failed to fetch posts');
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUserPosts();
//   }, [userId]);

//   const handleEdit = (id) => {
//     navigate(`/update/${id}`); // Navigate to edit page
//   };
//   function handleSinglePost(id) {
//     navigate(`/posts/${id}`);
// }

//   const handleDelete = async (id) => {
//     if (!userId) {
//       alert('Please log in to delete a post.');
//       return;
//     }

//     try {
//       await axios.delete(`http://localhost:5000/posts/${id}`, {
//         headers: { Authorization: `Bearer ${userId}` }
//       });
//       alert('Post deleted successfully');
//       // Refresh the posts after deletion
//       setPosts(posts.filter((post) => post._id !== id));
//     } catch (error) {
//       console.error('Error deleting post:', error);
//     }
//   };

//   if (loading) {
//     return <CircularProgress />;
//   }

//   if (error) {
//     return <Typography variant="h6" color="error">{error}</Typography>;
//   }

//   return (
//     <Grid container spacing={3} padding={'80px'}>
//       {posts.length === 0 ? (
//         <Typography variant="h6">No posts available</Typography>
//       ) : (
//         posts.map((post) => (
//           <Grid item xs={12} sm={6} md={4} key={post._id}>
//             <Card>
//               <CardContent>
//                 <Typography variant="h5">{post.title}</Typography>
//                 <Typography variant="body2" color="textSecondary">{post.message}</Typography>
//                 {post.selectedFile && (
//                   <img
//                     src={`http://localhost:5000/${post.selectedFile}`} // Adjust this URL as per your server setup
//                     alt={post.title}
//                     style={{ width: '100%', height: 'auto', marginBottom: '10px' }}
//                   />
//                 )}
//                 <Typography variant="caption">Tags: {post.tags.join(', ')}</Typography>
//                 <div></div>
//                 <Button className="custom-button" onClick={() => handleSinglePost(post._id)} variant="primary" size="sm">
//                                                 See More
//                                             </Button>
//                 <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
//                   <FontAwesomeIcon 
//                     icon={faPenToSquare} // Use the correct icon definition
//                     onClick={() => handleEdit(post._id)} // Attach edit handler
//                     style={{ cursor: 'pointer', color: 'purple', fontSize: '24px' }} // Increase size and add styles
//                   />
//                   <FontAwesomeIcon 
//                     icon={faTrash} 
//                     onClick={() => handleDelete(post._id)} // Attach delete handler
//                     style={{ cursor: 'pointer', color: 'purple', fontSize: '24px' }} // Increase size and add styles
//                   />
//                 </div>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))
//       )}
//     </Grid>
//   );
// };

// export default MyPostsComponent;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Card, Button, Spinner, Row, Col, Alert } from 'react-bootstrap';
// import { useAuth } from '../providers/AuthProvider';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
// import { useNavigate } from 'react-router-dom';
// import { Typography } from '@mui/material';
// const MyPostsComponent = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { userId } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUserPosts = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/posts/user/${userId}`);
//         setPosts(response.data);
//       } catch (err) {
//         setError('Failed to fetch posts');
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUserPosts();
//   }, [userId]);

//   const handleEdit = (id) => {
//     navigate(`/update/${id}`);
//   };

//   const handleSinglePost = (id) => {
//     navigate(`/posts/${id}`);
//   };

//   const handleDelete = async (id) => {
//     if (!userId) {
//       alert('Please log in to delete a post.');
//       return;
//     }

//     try {
//       await axios.delete(`http://localhost:5000/posts/${id}`, {
//         headers: { Authorization: `Bearer ${userId}` }
//       });
//       alert('Post deleted successfully');
//       setPosts(posts.filter((post) => post._id !== id));
//     } catch (error) {
//       console.error('Error deleting post:', error);
//     }
//   };

//   if (loading) {
//     return <Spinner animation="border" variant="primary" />;
//   }

//   if (error) {
//     return <Alert variant="danger">{error}</Alert>;
//   }

//   return (
//     <div style={{ padding: '80px 0', backgroundColor: '#E6E6FA' }}> {/* Lavender background */}
//       <Row xs={1} md={2} lg={3} className="g-4">
//         {posts.length === 0 ? (
//           <Col>
//             <Alert variant="info">No posts available</Alert>
//           </Col>
//         ) : (
//           posts.map((post) => (
//             <Col key={post._id}>
//               <Card style={{ backgroundColor: '#4B0082', color: '#FFFFFF' }} className="h-100"> {/* Indigo background */}
//                 <Card.Img 
//                   variant="top" 
//                   src={`http://localhost:5000/${post.selectedFile}`} // Adjust URL as per your server setup
//                   alt={post.title} 
//                   style={{ height: '200px', objectFit: 'cover' }} // Ensures consistent image size
//                 />
//                 <Card.Body>
//                   <Card.Title>{post.title}</Card.Title>
//                   <Card.Text>{post.message}</Card.Text>
//                   <Typography variant="caption">Tags: {post.tags.join(', ')}</Typography>
//                   <Button 
//                     style={{ backgroundColor: '#DDA0DD', color: '#FFFFFF' }} // Plum background for button
//                     onClick={() => handleSinglePost(post._id)}
//                     className="w-100 mt-2" // Full-width button
//                   >
//                     See More
//                   </Button>
//                   <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
//                     <FontAwesomeIcon 
//                       icon={faPenToSquare} 
//                       onClick={() => handleEdit(post._id)} 
//                       style={{ cursor: 'pointer', color: 'purple', fontSize: '24px' }} 
//                     />
//                     <FontAwesomeIcon 
//                       icon={faTrash} 
//                       onClick={() => handleDelete(post._id)} 
//                       style={{ cursor: 'pointer', color: 'purple', fontSize: '24px' }} 
//                     />
//                   </div>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))
//         )}
//       </Row>
//     </div>
//   );
// };

// export default MyPostsComponent;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Card, Button, Spinner, Row, Col, Alert } from 'react-bootstrap';
// import { useAuth } from '../providers/AuthProvider';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
// import { useNavigate } from 'react-router-dom';
// import { Typography } from '@mui/material';

// const MyPostsComponent = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { userId } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUserPosts = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/posts/user/${userId}`);
//         setPosts(response.data);
//       } catch (err) {
//         setError('Failed to fetch posts');
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUserPosts();
//   }, [userId]);

//   const handleEdit = (id) => {
//     navigate(`/update/${id}`);
//   };

//   const handleSinglePost = (id) => {
//     navigate(`/posts/${id}`);
//   };

//   const handleDelete = async (id) => {
//     if (!userId) {
//       alert('Please log in to delete a post.');
//       return;
//     }

//     try {
//       await axios.delete(`http://localhost:5000/posts/${id}`, {
//         headers: { Authorization: `Bearer ${userId}` }
//       });
//       alert('Post deleted successfully');
//       setPosts(posts.filter((post) => post._id !== id));
//     } catch (error) {
//       console.error('Error deleting post:', error);
//     }
//   };

//   if (loading) {
//     return <Spinner animation="border" variant="primary" />;
//   }

//   if (error) {
//     return <Alert variant="danger">{error}</Alert>;
//   }

//   return (
//     <div style={{ padding: '80px 0', backgroundColor: '#E6E6FA' }}> {/* Lavender background */}
//       <Row xs={1} md={2} lg={3} className="g-4">
//         {posts.length === 0 ? (
//           <Col>
//             <Alert variant="info">No posts available</Alert>
//           </Col>
//         ) : (
//           posts.map((post) => (
//             <Col key={post._id}>
//               <Card style={{ backgroundColor: '#4B0082', color: '#FFFFFF' }} className="h-100"> {/* Indigo background */}
//                 <Card.Img 
//                   variant="top" 
//                   src={`http://localhost:5000/${post.selectedFile}`} // Adjust URL as per your server setup
//                   alt={post.title} 
//                   style={{ height: '200px', objectFit: 'cover' }} // Ensures consistent image size
//                 />
//                 <Card.Body>
//                   <Card.Title>{post.title}</Card.Title>
//                   <Card.Text>{post.message}</Card.Text>
//                   <Typography variant="caption">Tags: {post.tags.join(', ')}</Typography>
//                   <Button 
//                     style={{ backgroundColor: '#DDA0DD', color: '#FFFFFF' }} // Plum background for button
//                     onClick={() => handleSinglePost(post._id)}
//                     className="w-100 mt-2" // Full-width button
//                   >
//                     See More
//                   </Button>
//                   <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
//                     <FontAwesomeIcon 
//                       icon={faPenToSquare} 
//                       onClick={() => handleEdit(post._id)} 
//                       style={{ cursor: 'pointer', color: '#DDA0DD', fontSize: '24px' }} // Plum color for edit icon
//                     />
//                     <FontAwesomeIcon 
//                       icon={faTrash} 
//                       onClick={() => handleDelete(post._id)} 
//                       style={{ cursor: 'pointer', color: '#DDA0DD', fontSize: '24px' }} // Plum color for delete icon
//                     />
//                   </div>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))
//         )}
//       </Row>
//     </div>
//   );
// };

// export default MyPostsComponent;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Card, Button, Spinner, Row, Col, Alert } from 'react-bootstrap';
// import { useAuth } from '../providers/AuthProvider';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
// import { useNavigate } from 'react-router-dom';
// import { Typography } from '@mui/material';

// const MyPostsComponent = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { userId } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUserPosts = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/posts/user/${userId}`);
//         setPosts(response.data);
//       } catch (err) {
//         setError('Failed to fetch posts');
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUserPosts();
//   }, [userId]);

//   const handleEdit = (id) => {
//     navigate(`/update/${id}`);
//   };

//   const handleSinglePost = (id) => {
//     navigate(`/posts/${id}`);
//   };

//   const handleDelete = async (id) => {
//     if (!userId) {
//       alert('Please log in to delete a post.');
//       return;
//     }

//     try {
//       await axios.delete(`http://localhost:5000/posts/${id}`, {
//         headers: { Authorization: `Bearer ${userId}` }
//       });
//       alert('Post deleted successfully');
//       setPosts(posts.filter((post) => post._id !== id));
//     } catch (error) {
//       console.error('Error deleting post:', error);
//     }
//   };

//   if (loading) {
//     return <Spinner animation="border" variant="primary" />;
//   }

//   if (error) {
//     return <Alert variant="danger">{error}</Alert>;
//   }

//   return (
//     <div style={{ padding: '80px 0', backgroundColor: '#E6E6FA' }}> {/* Lavender background */}
//       <Row xs={1} md={2} lg={3} className="g-4">
//         {posts.length === 0 ? (
//           <Col>
//             <Alert variant="info">No posts available</Alert>
//           </Col>
//         ) : (
//           posts.map((post) => (
//             <Col key={post._id}>
//               <Card style={{ backgroundColor: '#4B0082', color: '#FFFFFF', height: '400px' }} className="h-100"> {/* Fixed card height */}
//                 <Card.Img 
//                   variant="top" 
//                   src={`http://localhost:5000/${post.selectedFile}`} // Adjust URL as per your server setup
//                   alt={post.title} 
//                   style={{ height: '200px', objectFit: 'cover' }} // Ensures consistent image size
//                 />
//                 <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
//                   <Card.Title style={{ color: '#D3D3D3' }}>{post.title}</Card.Title>
//                   <Typography variant="caption" style={{ color: '#D3D3D3' }}>Tags: {post.tags.join(', ')}</Typography>
//                   <Button 
//                     style={{ backgroundColor: '#DDA0DD', color: '#FFFFFF' }} // Plum background for button
//                     onClick={() => handleSinglePost(post._id)}
//                     className="w-100 mt-2" // Full-width button
//                   >
//                     See More
//                   </Button>
//                   <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
//                     <FontAwesomeIcon 
//                       icon={faPenToSquare} 
//                       onClick={() => handleEdit(post._id)} 
//                       style={{ cursor: 'pointer', color: '#DDA0DD', fontSize: '24px' }} // Plum color for edit icon
//                     />
//                     <FontAwesomeIcon 
//                       icon={faTrash} 
//                       onClick={() => handleDelete(post._id)} 
//                       style={{ cursor: 'pointer', color: '#DDA0DD', fontSize: '24px' }} // Plum color for delete icon
//                     />
//                   </div>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))
//         )}
//       </Row>
//     </div>
//   );
// };

// export default MyPostsComponent;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button, Spinner, Row, Col, Alert } from 'react-bootstrap';
import { useAuth } from '../providers/AuthProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

const MyPostsComponent = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { userId } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/posts/user/${userId}`);
        setPosts(response.data);
      } catch (err) {
        setError('Failed to fetch posts');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserPosts();
  }, [userId]);

  const handleEdit = (id) => {
    navigate(`/update/${id}`);
  };

  const handleSinglePost = (id) => {
    navigate(`/posts/${id}`);
  };

  const handleDelete = async (id) => {
    if (!userId) {
      alert('Please log in to delete a post.');
      return;
    }

    try {
      await axios.delete(`http://localhost:5000/posts/${id}`, {
        headers: { Authorization: `Bearer ${userId}` }
      });
      alert('Post deleted successfully');
      setPosts(posts.filter((post) => post._id !== id));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  if (loading) {
    return <Spinner animation="border" variant="primary" />;
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  return (
    <div style={{ padding: '80px 0', backgroundColor: '#E6E6FA', minHeight: '100vh' }}> {/* Lavender background with full height */}
      <Row xs={1} md={2} lg={3} className="g-4">
        {posts.length === 0 ? (
          <Col>
            <Alert variant="info">No posts available</Alert>
          </Col>
        ) : (
          posts.map((post) => (
            <Col key={post._id}>
              <Card style={{ backgroundColor: '#4B0082', color: '#FFFFFF', height: '400px' }}> {/* Fixed card height */}
                <Card.Img 
                  variant="top" 
                  src={`http://localhost:5000/${post.selectedFile}`} // Adjust URL as per your server setup
                  alt={post.title} 
                  style={{ height: '200px', objectFit: 'cover' }} // Ensures consistent image size
                />
                <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <Card.Title style={{ color: '#D3D3D3' }}>{post.title}</Card.Title>
                  <Typography variant="caption" style={{ color: '#D3D3D3' }}>Tags: {post.tags.join(', ')}</Typography>
                  <Button 
                    style={{ backgroundColor: '#DDA0DD', color: '#FFFFFF' }} // Plum background for button
                    onClick={() => handleSinglePost(post._id)}
                    className="w-100 mt-2" // Full-width button
                  >
                    See More
                  </Button>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                    <FontAwesomeIcon 
                      icon={faPenToSquare} 
                      onClick={() => handleEdit(post._id)} 
                      style={{ cursor: 'pointer', color: '#DDA0DD', fontSize: '24px' }} // Plum color for edit icon
                    />
                    <FontAwesomeIcon 
                      icon={faTrash} 
                      onClick={() => handleDelete(post._id)} 
                      style={{ cursor: 'pointer', color: '#DDA0DD', fontSize: '24px' }} // Plum color for delete icon
                    />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </div>
  );
};

export default MyPostsComponent;

