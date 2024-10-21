// // // import React, { useEffect, useState } from 'react';
// // // import axios from 'axios';
// // // import { Container, Typography, Card, CardContent, CardMedia, Button, Divider, CircularProgress } from '@mui/material';
// // // import { useParams, useNavigate } from 'react-router-dom';
// // // import CommentSection from './CommentSection';
// // // import { useAuth } from '../providers/AuthProvider';

// // // const SinglePostComponent = () => {
// // //   const { id } = useParams();
// // //   const [post, setPost] = useState(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState('');
// // //   const navigate = useNavigate();
// // //   const { userId } = useAuth();
// // //   const [liked, setLiked] = useState(false);

// // //   useEffect(() => {
// // //     const fetchPost = async () => {
// // //       try {
// // //         const response = await axios.get(`http://localhost:5000/posts/${id}`);
// // //         setPost(response.data);
// // //         setLiked(response.data.likes.includes(userId));
// // //         setLoading(false);
// // //       } catch (err) {
// // //         console.error('Error fetching post:', err);
// // //         setError('Failed to load post.');
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchPost();
// // //   }, [id, userId]);

  
// // //   const handleLike = async () => {
// // //     if (!userId) {
// // //       alert('Please log in to like a post.');
// // //       return;
// // //     }

// // //     try {
// // //       await axios.patch(`http://localhost:5000/posts/${id}/likePost`, {}, {
// // //         headers: { Authorization: `Bearer ${userId}` }
// // //       });
// // //       setLiked(!liked);
// // //     } catch (error) {
// // //       console.error('Error liking post:', error);
// // //     }
// // //   };

// // //   if (loading) return <CircularProgress />;
// // //   if (error) return <Typography variant="h6" color="error">{error}</Typography>;

// // //   return (
// // //     <Container style={{ padding: '80px' }}>
// // //       <Button onClick={() => navigate(-1)} variant="outlined" color="primary">Back</Button>
// // //       <Card sx={{ marginTop: 2 }}>
// // //         {post.selectedFile && (
// // //           <CardMedia
// // //             component="img"
// // //             height="300"
// // //             image={`http://localhost:5000/${post.selectedFile}`}
// // //             alt={post.title}
// // //           />
// // //         )}
// // //         <CardContent>
// // //           <Typography variant="h5">{post.title}</Typography>
// // //           <Typography variant="body2" color="textSecondary">{post.message}</Typography>
// // //           <Typography variant="caption" color="textSecondary">Tags: {post.tags.join(', ')}</Typography>
// // //           <Typography variant="caption" color="textSecondary">Created by: {post.creator}</Typography>
// // //           <Divider sx={{ my: 2 }} />
// // //           <Button onClick={handleLike} variant={liked ? "contained" : "outlined"}>
// // //           </Button>
// // //           <CommentSection postId={post._id} comments={post.comments} />
// // //         </CardContent>
// // //       </Card>
// // //     </Container>
// // //   );
// // // };

// // // export default SinglePostComponent;


// // // import React, { useEffect, useState } from 'react';
// // // import axios from 'axios';
// // // import { Container, Typography, Card, CardContent, CardMedia, Button, Divider, CircularProgress } from '@mui/material';
// // // import { useParams, useNavigate } from 'react-router-dom';
// // // import CommentSection from './CommentSection';
// // // import { useAuth } from '../providers/AuthProvider';
// // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // // import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

// // // const SinglePostComponent = () => {
// // //   const { id } = useParams();
// // //   const [post, setPost] = useState(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState('');
// // //   const navigate = useNavigate();
// // //   const { userId } = useAuth();
// // //   const [liked, setLiked] = useState(false);

// // //   useEffect(() => {
// // //     const fetchPost = async () => {
// // //       try {
// // //         const response = await axios.get(`http://localhost:5000/posts/${id}`);
// // //         setPost(response.data);
// // //         setLiked(response.data.likes.includes(userId));
// // //         setLoading(false);
// // //       } catch (err) {
// // //         console.error('Error fetching post:', err);
// // //         setError('Failed to load post.');
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchPost();
// // //   }, [id, userId]);

// // //   const handleLike = async () => {
// // //     if (!userId) {
// // //       alert('Please log in to like a post.');
// // //       return;
// // //     }

// // //     try {
// // //       await axios.patch(`http://localhost:5000/posts/${id}/likePost`, {}, {
// // //         headers: { Authorization: `Bearer ${userId}` }
// // //       });
// // //       setLiked(!liked);
// // //       // Update post likes count after liking/unliking
// // //       setPost((prevPost) => ({
// // //         ...prevPost,
// // //         likes: liked ? prevPost.likes.filter(user => user !== userId) : [...prevPost.likes, userId]
// // //       }));
// // //     } catch (error) {
// // //       console.error('Error liking post:', error);
// // //     }
// // //   };

// // //   if (loading) return <CircularProgress />;
// // //   if (error) return <Typography variant="h6" color="error">{error}</Typography>;

// // //   return (
// // //     <Container style={{ padding: '80px' }}>
// // //       <Button onClick={() => navigate(-1)} variant="outlined" color="primary">Back</Button>
// // //       <Card sx={{ marginTop: 2 }}>
// // //         {post.selectedFile && (
// // //           <CardMedia
// // //             component="img"
// // //             height="300"
// // //             image={`http://localhost:5000/${post.selectedFile}`}
// // //             alt={post.title}
// // //           />
// // //         )}
// // //         <CardContent>
// // //           <Typography variant="h5">{post.title}</Typography>
// // //           <Typography variant="body2" color="textSecondary">{post.message}</Typography>
// // //           <Typography variant="caption" color="textSecondary">Tags: {post.tags.join(', ')}</Typography>
// // //           <Typography variant="caption" color="textSecondary">Created by: {post.creator}</Typography>
// // //           <Divider sx={{ my: 2 }} />
// // //           <Button
// // //             onClick={handleLike}
// // //             variant={liked ? "contained" : "outlined"}
// // //             color={liked ? "primary" : "default"}
// // //             startIcon={<FontAwesomeIcon icon={faThumbsUp} />}
// // //           >
// // //             {liked ? 'Liked' : 'Like'}
// // //           </Button>
// // //           <Typography variant="body2" color="textSecondary" style={{ marginLeft: '10px' }}>
// // //             {post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}
// // //           </Typography>
// // //           <CommentSection postId={post._id} comments={post.comments} />
// // //         </CardContent>
// // //       </Card>
// // //     </Container>
// // //   );
// // // };

// // // export default SinglePostComponent;


// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { Container, Typography, Card, CardContent, CardMedia, Button, Divider, CircularProgress } from '@mui/material';
// // import { useParams, useNavigate } from 'react-router-dom';
// // import CommentSection from './CommentSection';
// // import { useAuth } from '../providers/AuthProvider';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
// // import { AiFillLike } from 'react-icons/ai';

// // const SinglePostComponent = () => {
// //     const { id } = useParams();
// //     const [post, setPost] = useState(null);
// //     const [loading, setLoading] = useState(true);
// //     const [error, setError] = useState('');
// //     const navigate = useNavigate();
// //     const { userId } = useAuth();
// //     const [liked, setLiked] = useState(false);

// //     useEffect(() => {
// //         const fetchPost = async () => {
// //             try {
// //                 const response = await axios.get(`http://localhost:5000/posts/${id}`);
// //                 setPost(response.data);
// //                 setLiked(response.data.likes.includes(userId));
// //                 setLoading(false);
// //             } catch (err) {
// //                 console.error('Error fetching post:', err);
// //                 setError('Failed to load post.');
// //                 setLoading(false);
// //             }
// //         };

// //         fetchPost();
// //     }, [id, userId]);

// //     const handleLike = async () => {
// //         if (!userId) {
// //             alert('Please log in to like a post.');
// //             return;
// //         }

// //         try {
// //             await axios.patch(`http://localhost:5000/posts/${id}/likePost`, {}, {
// //                 headers: { Authorization: `Bearer ${userId}` }
// //             });
// //             setLiked(!liked);
// //             // Update post likes count after liking/unliking
// //             setPost((prevPost) => ({
// //                 ...prevPost,
// //                 likes: liked ? prevPost.likes.filter(user => user !== userId) : [...prevPost.likes, userId]
// //             }));
// //         } catch (error) {
// //             console.error('Error liking post:', error);
// //         }
// //     };

// //     if (loading) return <CircularProgress />;
// //     if (error) return <Typography variant="h6" color="error">{error}</Typography>;

// //     return (
// //         <Container className="d-flex justify-content-center align-items-center mt-5" style={{ maxWidth: '800px' }}>
// //             <Card className="mb-3 text-white bg-black bg-opacity-50">
// //                 <div className="row g-0">
// //                     <div className="col-md-4 d-flex align-items-center justify-content-center">
// //                         {post.selectedFile && (
// //                             <CardMedia
// //                                 component="img"
// //                                 style={{ height: "300px", width: "auto" }}
// //                                 decoding="async"
// //                                 className="img-fluid rounded-start border"
// //                                 image={`http://localhost:5000/${post.selectedFile}`}
// //                                 alt={post.title}
// //                             />
// //                         )}
// //                     </div>
// //                     <div className="col-md-8">
// //                         <CardContent className="card-body">
// //                             <div className="d-flex justify-content-between align-items-center">
// //                                 <h2 className="card-title poetsen-one-regular">{post.title}</h2>
// //                                 <AiFillLike
// //                                     onClick={handleLike}
// //                                     style={{ cursor: "pointer", fontSize: "24px" }}
// //                                     className={liked ? "text-danger me-2" : ""}
// //                                 />
// //                             </div>
// //                             <Typography variant="body2" className="card-text">
// //                                 <strong>Message:</strong> {post.message}
// //                             </Typography>
// //                             <Typography variant="caption" className="card-text">
// //                                 <strong>Tags:</strong> {post.tags.join(', ')}
// //                             </Typography>
// //                             <div className="d-flex align-items-center pt-2">
// //                                 <h6 className="pt-2">{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</h6>
// //                             </div>
// //                         </CardContent>
// //                     </div>
// //                 </div>
// //                 <Divider sx={{ my: 2 }} />
// //                 <CommentSection postId={post._id} comments={post.comments} />
// //             </Card>
// //         </Container>
// //     );
// // };

// // export default SinglePostComponent;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Container, Typography, Card, CardContent, CardMedia, Divider, CircularProgress } from '@mui/material';
// import { useParams, useNavigate } from 'react-router-dom';
// import CommentSection from './CommentSection';
// import { useAuth } from '../providers/AuthProvider';
// import { AiFillLike } from 'react-icons/ai';

// const SinglePostComponent = () => {
//     const { id } = useParams();
//     const [post, setPost] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');
//     const navigate = useNavigate();
//     const { userId } = useAuth();
//     const [liked, setLiked] = useState(false);

//     useEffect(() => {
//         const fetchPost = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:5000/posts/${id}`);
//                 setPost(response.data);
//                 setLiked(response.data.likes.includes(userId));
//                 setLoading(false);
//             } catch (err) {
//                 console.error('Error fetching post:', err);
//                 setError('Failed to load post.');
//                 setLoading(false);
//             }
//         };

//         fetchPost();
//     }, [id, userId]);

//     const handleLike = async () => {
//         if (!userId) {
//             alert('Please log in to like a post.');
//             return;
//         }

//         try {
//             await axios.patch(`http://localhost:5000/posts/${id}/likePost`, {}, {
//                 headers: { Authorization: `Bearer ${userId}` }
//             });
//             setLiked(!liked);
//             // Update post likes count after liking/unliking
//             setPost((prevPost) => ({
//                 ...prevPost,
//                 likes: liked ? prevPost.likes.filter(user => user !== userId) : [...prevPost.likes, userId]
//             }));
//         } catch (error) {
//             console.error('Error liking post:', error);
//         }
//     };

//     if (loading) return <CircularProgress />;
//     if (error) return <Typography variant="h6" color="error">{error}</Typography>;

//     const styles = {
//         // container: {
//         //     position: 'relative',
//         //     minHeight: '100vh', // Ensure full viewport height
//         //     overflow: 'hidden', // Prevent overflow from the blurred background
//         // },
//         // background: {
//         //     position: 'absolute',
//         //     top: 0,
//         //     left: 0,
//         //     right: 0,
//         //     bottom: 0,
//         //     backgroundImage: 'url("https://www.wilson.edu/sites/default/files/styles/1920_x_1080/public/campus.jpg?itok=6tjXNHDU")',
//         //     backgroundSize: 'cover',
//         //     backgroundPosition: 'center',
//         //     filter: 'blur(8px)', // Blur effect
//         //     zIndex: -1, // Behind all other elements
//         // },
//         container: {
//           position: 'relative',
//           minHeight: '100vh',
//           backgroundImage: 'url("https://www.wilson.edu/sites/default/files/styles/1920_x_1080/public/campus.jpg?itok=6tjXNHDU")',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//       },
//       overlay: {
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundColor: 'rgba(255, 255, 255, 0.5)',
//           backdropFilter: 'blur(8px)',
//           zIndex: 1,
//       },
//         card: {
//             maxWidth: '1000px', // Increase maxWidth to make the card wider
//             margin: '0 auto', // Center the card
//             backgroundColor: 'rgba(75, 0, 130, 0.8)', // Semi-transparent card color for visibility
//             color: '#FFFFFF',
//             borderRadius: '10px',
//             boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//             position: 'relative',
//             zIndex: 1, // Ensure card is above background
//             padding: '150px', // Padding for the card
//         },
//         media: {
//             height: "300px",
//             width: "auto",
//             objectFit: 'cover',
//         },
//     };

//     return (
//         <Container style={styles.container}>
//           <div style={styles.overlay}></div>
//             {/* <div style={styles.background} /> Background with blur */}
//             <Card className="mb-3" sx={styles.card}>
//                 <div className="row g-0">
//                     <div className="col-md-4 d-flex align-items-center justify-content-center">
//                         {post.selectedFile && (
//                             <CardMedia
//                                 component="img"
//                                 style={styles.media}
//                                 decoding="async"
//                                 className="img-fluid rounded-start border"
//                                 image={`http://localhost:5000/${post.selectedFile}`}
//                                 alt={post.title}
//                             />
//                         )}
//                     </div>
//                     <div className="col-md-8">
//                         <CardContent className="card-body">
//                             <div className="d-flex justify-content-between align-items-center">
//                                 <h2 className="card-title poetsen-one-regular">{post.title}</h2>
//                                 <AiFillLike
//                                     onClick={handleLike}
//                                     style={{ cursor: "pointer", fontSize: "24px" }}
//                                     className={liked ? "text-danger me-2" : ""}
//                                 />
//                             </div>
//                             <Typography variant="body2" className="card-text">
//                                 <strong>Message:</strong> {post.message}
//                             </Typography>
//                             <Typography variant="caption" className="card-text">
//                                 <strong>Tags:</strong> {post.tags.join(', ')}
//                             </Typography>
//                             <div className="d-flex align-items-center pt-2">
//                                 <h6 className="pt-2">{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</h6>
//                             </div>
//                         </CardContent>
//                     </div>
//                 </div>
//                 <Divider sx={{ my: 2 }} />
//                 <CommentSection postId={post._id} comments={post.comments} />
//             </Card>
//         </Container>
//     );
// };

// export default SinglePostComponent;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Container, Typography, Card, CardContent, CardMedia, Divider, CircularProgress } from '@mui/material';
// import { useParams, useNavigate } from 'react-router-dom';
// import CommentSection from './CommentSection';
// import { useAuth } from '../providers/AuthProvider';
// import { AiFillLike } from 'react-icons/ai';

// const SinglePostComponent = () => {
//     const { id } = useParams();
//     const [post, setPost] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');
//     const navigate = useNavigate();
//     const { userId } = useAuth();
//     const [liked, setLiked] = useState(false);

//     useEffect(() => {
//         const fetchPost = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:5000/posts/${id}`);
//                 setPost(response.data);
//                 setLiked(response.data.likes.includes(userId));
//                 setLoading(false);
//             } catch (err) {
//                 console.error('Error fetching post:', err);
//                 setError('Failed to load post.');
//                 setLoading(false);
//             }
//         };

//         fetchPost();
//     }, [id, userId]);

//     const handleLike = async () => {
//         if (!userId) {
//             alert('Please log in to like a post.');
//             return;
//         }

//         try {
//             await axios.patch(`http://localhost:5000/posts/${id}/likePost`, {}, {
//                 headers: { Authorization: `Bearer ${userId}` }
//             });
//             setLiked(!liked);
//             // Update post likes count after liking/unliking
//             setPost((prevPost) => ({
//                 ...prevPost,
//                 likes: liked ? prevPost.likes.filter(user => user !== userId) : [...prevPost.likes, userId]
//             }));
//         } catch (error) {
//             console.error('Error liking post:', error);
//         }
//     };

//     if (loading) return <CircularProgress />;
//     if (error) return <Typography variant="h6" color="error">{error}</Typography>;

//     const styles = {
//     container: {
//         position: 'relative',
//         minHeight: '100vh',
//         overflow: 'hidden',
//         width:'100%',
//     },
//     background: {
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         backgroundImage: 'url("https://www.wilson.edu/sites/default/files/styles/1920_x_1080/public/campus.jpg?itok=6tjXNHDU")',
//         backgroundSize: 'cover', // Ensures the image covers the entire background
//         //backgroundPosition: 'center center', // Centers the image
//         filter: 'blur(8px)',
//         zIndex: -1,
//         width: '100%',
//     },
//     card: {
//         maxWidth: '1000px',
//         margin: '0 auto',
//         backgroundColor: 'rgba(75, 0, 130, 0.8)',
//         color: '#FFFFFF',
//         borderRadius: '10px',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//         position: 'relative',
//         zIndex: 1,
//         padding: '80px',
//     },
//     media: {
//         height: "300px",
//         width: "auto",
//         objectFit: 'cover',
//     },
//     commentSection: {
//         marginTop: '16px',
//         marginLeft: '16px',
//     },
//     likeButton: {
//         cursor: "pointer",
//         fontSize: "24px",
//     },
// };

  

//     return (
//         <Container style={styles.container}>
//             <div style={styles.background} />
//             <Card className="mb-3" sx={styles.card}>
//                 <div className="row g-0">
//                     <div className="col-md-4 d-flex align-items-center justify-content-center">
//                         {post.selectedFile && (
//                             <CardMedia
//                                 component="img"
//                                 style={styles.media}
//                                 decoding="async"
//                                 className="img-fluid rounded-start border"
//                                 image={`http://localhost:5000/${post.selectedFile}`}
//                                 alt={post.title}
//                             />
//                         )}
//                     </div>
//                     <div className="col-md-8">
//                         <CardContent className="card-body">
//                             <div className="d-flex justify-content-between align-items-center">
//                                 <h2 className="card-title poetsen-one-regular">{post.title}</h2>
//                                 <AiFillLike
//                                     onClick={handleLike}
//                                     style={styles.likeButton} // Apply the like button style
//                                     className={liked ? "text-danger me-2" : ""}
//                                 />
//                             </div>
//                             <Typography variant="body2" className="card-text">
//                                 <strong>Message:</strong> {post.message}
//                             </Typography>
//                             <Typography variant="caption" className="card-text">
//                                 <strong>Tags:</strong> {post.tags.join(', ')}
//                             </Typography>
//                             <div className="d-flex align-items-center pt-2">
//                                 <h6 className="pt-2">{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</h6>
//                             </div>
//                         </CardContent>
//                         <Divider sx={{ my: 2 }} />
//                         <div style={styles.commentSection}>
//                             <CommentSection postId={post._id} comments={post.comments} />
//                         </div>
//                     </div>
//                 </div>
//             </Card>
//         </Container>
//     );
// };

// export default SinglePostComponent;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Box, Typography, Card, CardContent, CardMedia, Divider, CircularProgress } from '@mui/material';
// import { useParams, useNavigate } from 'react-router-dom';
// import CommentSection from './CommentSection';
// import { useAuth } from '../providers/AuthProvider';
// import { AiFillLike } from 'react-icons/ai';

// const SinglePostComponent = () => {
//     const { id } = useParams();
//     const [post, setPost] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');
//     const navigate = useNavigate();
//     const { userId } = useAuth();
//     const [liked, setLiked] = useState(false);

//     useEffect(() => {
//         const fetchPost = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:5000/posts/${id}`);
//                 setPost(response.data);
//                 setLiked(response.data.likes.includes(userId));
//                 setLoading(false);
//             } catch (err) {
//                 console.error('Error fetching post:', err);
//                 setError('Failed to load post.');
//                 setLoading(false);
//             }
//         };

//         fetchPost();
//     }, [id, userId]);

//     const handleLike = async () => {
//         if (!userId) {
//             alert('Please log in to like a post.');
//             return;
//         }

//         try {
//             await axios.patch(`http://localhost:5000/posts/${id}/likePost`, {}, {
//                 headers: { Authorization: `Bearer ${userId}` }
//             });
//             setLiked(!liked);
//             // Update post likes count after liking/unliking
//             setPost((prevPost) => ({
//                 ...prevPost,
//                 likes: liked ? prevPost.likes.filter(user => user !== userId) : [...prevPost.likes, userId]
//             }));
//         } catch (error) {
//             console.error('Error liking post:', error);
//         }
//     };

//     if (loading) return <CircularProgress />;
//     if (error) return <Typography variant="h6" color="error">{error}</Typography>;

//     const styles = {
//         container: {
//             position: 'relative',
//             height: '100vh', // Set height to 100% of the viewport
//             width: '100%',
//             margin: 0,       // Remove margin
//             padding: 0,      // Remove padding
//             overflow: 'hidden',
//         },
//         background: {
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             backgroundImage: 'url("https://www.wilson.edu/sites/default/files/styles/1920_x_1080/public/campus.jpg?itok=6tjXNHDU")',
//             backgroundSize: 'cover', // Ensures the image covers the entire background
//             backgroundPosition: 'center center', // Centers the image
//             filter: 'blur(8px)',
//             zIndex: -1,
//         },
//         card: {
//             maxWidth: '1000px',
//             margin: '0 auto',
//             backgroundColor: 'rgba(75, 0, 130, 0.8)',
//             color: '#FFFFFF',
//             borderRadius: '10px',
//             boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//             position: 'relative',
//             zIndex: 1,
//             padding: '80px',
//         },
//         media: {
//             height: "300px",
//             width: "auto",
//             objectFit: 'cover',
//         },
//         commentSection: {
//             marginTop: '16px',
//             marginLeft: '16px',
//         },
//         likeButton: {
//             cursor: "pointer",
//             fontSize: "24px",
//         },
//     };

//     return (
//         <Box style={styles.container}>
//             <div style={styles.background} />
//             <Card className="mb-3" sx={styles.card}>
//                 <div className="row g-0">
//                     <div className="col-md-4 d-flex align-items-center justify-content-center">
//                         {post.selectedFile && (
//                             <CardMedia
//                                 component="img"
//                                 style={styles.media}
//                                 decoding="async"
//                                 className="img-fluid rounded-start border"
//                                 image={`http://localhost:5000/${post.selectedFile}`}
//                                 alt={post.title}
//                             />
//                         )}
//                     </div>
//                     <div className="col-md-8">
//                         <CardContent className="card-body">
//                             <div className="d-flex justify-content-between align-items-center">
//                                 <h2 className="card-title poetsen-one-regular">{post.title}</h2>
//                                 <AiFillLike
//                                     onClick={handleLike}
//                                     style={styles.likeButton} // Apply the like button style
//                                     className={liked ? "text-danger me-2" : ""}
//                                 />
//                             </div>
//                             <Typography variant="body2" className="card-text">
//                                 <strong>Message:</strong> {post.message}
//                             </Typography>
//                             <Typography variant="caption" className="card-text">
//                                 <strong>Tags:</strong> {post.tags.join(', ')}
//                             </Typography>
//                             <div className="d-flex align-items-center pt-2">
//                                 <h6 className="pt-2">{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</h6>
//                             </div>
//                         </CardContent>
//                         <Divider sx={{ my: 2 }} />
//                         <div style={styles.commentSection}>
//                             <CommentSection postId={post._id} comments={post.comments} />
//                         </div>
//                     </div>
//                 </div>
//             </Card>
//         </Box>
//     );
// };

// export default SinglePostComponent;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Box, Typography, Card, CardContent, CardMedia, Divider, CircularProgress } from '@mui/material';
// import { useParams, useNavigate } from 'react-router-dom';
// import CommentSection from './CommentSection';
// import { useAuth } from '../providers/AuthProvider';
// import { AiFillLike } from 'react-icons/ai';

// const SinglePostComponent = () => {
//     const { id } = useParams();
//     const [post, setPost] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');
//     const navigate = useNavigate();
//     const { userId } = useAuth();
//     const [liked, setLiked] = useState(false);

//     useEffect(() => {
//         const fetchPost = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:5000/posts/${id}`);
//                 setPost(response.data);
//                 setLiked(response.data.likes.includes(userId));
//                 setLoading(false);
//             } catch (err) {
//                 console.error('Error fetching post:', err);
//                 setError('Failed to load post.');
//                 setLoading(false);
//             }
//         };

//         fetchPost();
//     }, [id, userId]);

//     const handleLike = async () => {
//         if (!userId) {
//             alert('Please log in to like a post.');
//             return;
//         }

//         try {
//             // Send userId in the body of the request
//             const response = await axios.patch(`http://localhost:5000/posts/${id}/likePost`, { userId }, {
//                 headers: { Authorization: `Bearer ${userId}` } // Make sure to include the authorization header if needed
//             });

//             const updatedPost = response.data;

//             setLiked(updatedPost.likes.includes(userId)); // Update liked state based on response
//             setPost(updatedPost); // Update post state with the updated post
//         } catch (error) {
//             console.error('Error liking post:', error);
//         }
//     };

//     if (loading) return <CircularProgress />;
//     if (error) return <Typography variant="h6" color="error">{error}</Typography>;

//     const styles = {
//         container: {
//             position: 'relative',
//             height: '100vh',
//             width: '100%',
//             margin: 0,
//             padding: 0,
//             overflow: 'hidden',
//         },
//         background: {
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             backgroundImage: 'url("https://www.wilson.edu/sites/default/files/styles/1920_x_1080/public/campus.jpg?itok=6tjXNHDU")',
//             backgroundSize: 'cover',
//             backgroundPosition: 'center center',
//             filter: 'blur(8px)',
//             zIndex: -1,
//         },
//         card: {
//             maxWidth: '1000px',
//             margin: '0 auto',
//             backgroundColor: 'rgba(75, 0, 130, 0.8)',
//             color: '#FFFFFF',
//             borderRadius: '10px',
//             boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//             position: 'relative',
//             zIndex: 1,
//             padding: '80px',
//         },
//         media: {
//             height: "300px",
//             width: "auto",
//             objectFit: 'cover',
//         },
//         commentSection: {
//             marginTop: '16px',
//             marginLeft: '16px',
//         },
//         likeButton: {
//             cursor: "pointer",
//             fontSize: "24px",
//         },
//     };

//     return (
//         <Box style={styles.container}>
//             <div style={styles.background} />
//             <Card className="mb-3" sx={styles.card}>
//                 <div className="row g-0">
//                     <div className="col-md-4 d-flex align-items-center justify-content-center">
//                         {post.selectedFile && (
//                             <CardMedia
//                                 component="img"
//                                 style={styles.media}
//                                 decoding="async"
//                                 className="img-fluid rounded-start border"
//                                 image={`http://localhost:5000/${post.selectedFile}`}
//                                 alt={post.title}
//                             />
//                         )}
//                     </div>
//                     <div className="col-md-8">
//                         <CardContent className="card-body">
//                             <div className="d-flex justify-content-between align-items-center">
//                                 <h2 className="card-title poetsen-one-regular">{post.title}</h2>
//                                 <AiFillLike
//                                     onClick={handleLike}
//                                     style={styles.likeButton}
//                                     className={liked ? "text-danger me-2" : ""} // Add text-danger if liked
//                                 />
//                             </div>
//                             <Typography variant="body2" className="card-text">
//                                 <strong>Message:</strong> {post.message}
//                             </Typography>
//                             <Typography variant="caption" className="card-text">
//                                 <strong>Tags:</strong> {post.tags.join(', ')}
//                             </Typography>
//                             <div className="d-flex align-items-center pt-2">
//                                 <h6 className="pt-2">{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</h6>
//                             </div>
//                         </CardContent>
//                         <Divider sx={{ my: 2 }} />
//                         <div style={styles.commentSection}>
//                             <CommentSection postId={post._id} comments={post.comments} />
//                         </div>
//                     </div>
//                 </div>
//             </Card>
//         </Box>
//     );
// };

// export default SinglePostComponent;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography, Card, CardContent, CardMedia, Divider, CircularProgress, Button } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import CommentSection from './CommentSection';
import { useAuth } from '../providers/AuthProvider';
import { AiFillLike } from 'react-icons/ai';

const SinglePostComponent = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { userId } = useAuth();
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/posts/${id}`);
                setPost(response.data);
                setLiked(response.data.likes.includes(userId));
                setLoading(false);
            } catch (err) {
                console.error('Error fetching post:', err);
                setError('Failed to load post.');
                setLoading(false);
            }
        };

        fetchPost();
    }, [id, userId]);

    const handleLike = async () => {
        const token=localStorage.getItem('token');
        if (!token) {
            alert('Please log in to like a post.');
            return;
        }

        try {
            const response = await axios.patch(`http://localhost:5000/posts/${id}/likePost`, { userId }, {
                headers: { Authorization: `Bearer ${userId}` }
            });

            const updatedPost = response.data;

            setLiked(updatedPost.likes.includes(userId));
            setPost(updatedPost);
        } catch (error) {
            console.error('Error liking post:', error);
        }
    };

    if (loading) return <CircularProgress />;
    if (error) return <Typography variant="h6" color="error">{error}</Typography>;

    return (
        <Box style={{ position: 'relative', padding: '80px', minHeight: '100vh', backgroundColor: 'lavender' }}>
            <Card className="mb-3" sx={{ maxWidth: 1000, margin: '0 auto', backgroundColor: '#800080', color: '#fff' }}>
                <div className="row g-0">
                    <div className="col-md-4 d-flex align-items-center justify-content-center">
                        {post.selectedFile && (
                            <CardMedia
                                component="img"
                                height="300"
                                image={`http://localhost:5000/${post.selectedFile}`}
                                alt={post.title}
                                style={{ margin: '20px' }} // Space around the image
                            />
                        )}
                    </div>
                    <div className="col-md-8">
                        <CardContent>
                            <div className="d-flex justify-content-between align-items-center">
                                <Typography variant="h5" component="h2" className="card-title">{post.title}</Typography>
                                <Button onClick={handleLike} style={{ cursor: "pointer", fontSize: "24px" }}>
                                    <AiFillLike className={liked ? "text-danger" : ""} />
                                </Button>
                            </div>
                            <Typography variant="body2" color="text.secondary">
                                <strong>Message:</strong> {post.message}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                <strong>Tags:</strong> {post.tags.join(', ')}
                            </Typography>
                            <Divider sx={{ my: 2 }} />
                            <Typography variant="h6">
                                {post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}
                            </Typography>
                        </CardContent>
                        <Divider />
                        <div style={{ padding: '16px 16px 0 16px' }}> {/* Add padding to create space */}
                            <CommentSection postId={post._id} comments={post.comments} />
                        </div>
                    </div>
                </div>
            </Card>
        </Box>
    );
};

export default SinglePostComponent;
