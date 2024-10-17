// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Container, Typography, Card, CardContent, CardMedia, Button, Divider, CircularProgress } from '@mui/material';
// import { useParams, useNavigate } from 'react-router-dom';
// import CommentSection from './CommentSection';
// import { useAuth } from '../providers/AuthProvider';

// const SinglePostComponent = () => {
//   const { id } = useParams();
//   const [post, setPost] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();
//   const { userId } = useAuth();
//   const [liked, setLiked] = useState(false);

//   useEffect(() => {
//     const fetchPost = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/posts/${id}`);
//         setPost(response.data);
//         setLiked(response.data.likes.includes(userId));
//         setLoading(false);
//       } catch (err) {
//         console.error('Error fetching post:', err);
//         setError('Failed to load post.');
//         setLoading(false);
//       }
//     };

//     fetchPost();
//   }, [id, userId]);

  
//   const handleLike = async () => {
//     if (!userId) {
//       alert('Please log in to like a post.');
//       return;
//     }

//     try {
//       await axios.patch(`http://localhost:5000/posts/${id}/likePost`, {}, {
//         headers: { Authorization: `Bearer ${userId}` }
//       });
//       setLiked(!liked);
//     } catch (error) {
//       console.error('Error liking post:', error);
//     }
//   };

//   if (loading) return <CircularProgress />;
//   if (error) return <Typography variant="h6" color="error">{error}</Typography>;

//   return (
//     <Container style={{ padding: '80px' }}>
//       <Button onClick={() => navigate(-1)} variant="outlined" color="primary">Back</Button>
//       <Card sx={{ marginTop: 2 }}>
//         {post.selectedFile && (
//           <CardMedia
//             component="img"
//             height="300"
//             image={`http://localhost:5000/${post.selectedFile}`}
//             alt={post.title}
//           />
//         )}
//         <CardContent>
//           <Typography variant="h5">{post.title}</Typography>
//           <Typography variant="body2" color="textSecondary">{post.message}</Typography>
//           <Typography variant="caption" color="textSecondary">Tags: {post.tags.join(', ')}</Typography>
//           <Typography variant="caption" color="textSecondary">Created by: {post.creator}</Typography>
//           <Divider sx={{ my: 2 }} />
//           <Button onClick={handleLike} variant={liked ? "contained" : "outlined"}>
//           </Button>
//           <CommentSection postId={post._id} comments={post.comments} />
//         </CardContent>
//       </Card>
//     </Container>
//   );
// };

// export default SinglePostComponent;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Card, CardContent, CardMedia, Button, Divider, CircularProgress } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import CommentSection from './CommentSection';
import { useAuth } from '../providers/AuthProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

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
    if (!userId) {
      alert('Please log in to like a post.');
      return;
    }

    try {
      await axios.patch(`http://localhost:5000/posts/${id}/likePost`, {}, {
        headers: { Authorization: `Bearer ${userId}` }
      });
      setLiked(!liked);
      // Update post likes count after liking/unliking
      setPost((prevPost) => ({
        ...prevPost,
        likes: liked ? prevPost.likes.filter(user => user !== userId) : [...prevPost.likes, userId]
      }));
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  if (loading) return <CircularProgress />;
  if (error) return <Typography variant="h6" color="error">{error}</Typography>;

  return (
    <Container style={{ padding: '80px' }}>
      <Button onClick={() => navigate(-1)} variant="outlined" color="primary">Back</Button>
      <Card sx={{ marginTop: 2 }}>
        {post.selectedFile && (
          <CardMedia
            component="img"
            height="300"
            image={`http://localhost:5000/${post.selectedFile}`}
            alt={post.title}
          />
        )}
        <CardContent>
          <Typography variant="h5">{post.title}</Typography>
          <Typography variant="body2" color="textSecondary">{post.message}</Typography>
          <Typography variant="caption" color="textSecondary">Tags: {post.tags.join(', ')}</Typography>
          <Typography variant="caption" color="textSecondary">Created by: {post.creator}</Typography>
          <Divider sx={{ my: 2 }} />
          <Button
            onClick={handleLike}
            variant={liked ? "contained" : "outlined"}
            color={liked ? "primary" : "default"}
            startIcon={<FontAwesomeIcon icon={faThumbsUp} />}
          >
            {liked ? 'Liked' : 'Like'}
          </Button>
          <Typography variant="body2" color="textSecondary" style={{ marginLeft: '10px' }}>
            {post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}
          </Typography>
          <CommentSection postId={post._id} comments={post.comments} />
        </CardContent>
      </Card>
    </Container>
  );
};

export default SinglePostComponent;
