import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Card, CardContent, CardMedia, Button, Divider, CircularProgress } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import LikeButton from './LikeButton';
import CommentSection from './CommentSection';
import UpdatePostComponent from './UpdatePostComponent'; // Component to update a post
import DeletePostComponent from './DeletePostComponent'; // Component to delete a post

const SinglePostComponent= () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/posts/${id}`);
        setPost(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching post:', err);
        setError('Failed to load post.');
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <CircularProgress />;
  if (error) return <Typography variant="h6" color="error">{error}</Typography>;

  return (
    <Container>
      <Button onClick={() => navigate(-1)} variant="outlined" color="primary">Back</Button>
      <Card sx={{ marginTop: 2 }}>
        {post.selectedFile && (
          <CardMedia
            component="img"
            height="140"
            image={post.selectedFile}
            alt="Post image"
          />
        )}
        <CardContent>
          <Typography variant="h5">{post.title}</Typography>
          <Typography variant="body2" color="textSecondary">{post.message}</Typography>
          <Typography variant="caption" color="textSecondary">Tags: {post.tags.join(', ')}</Typography>
          <Typography variant="caption" color="textSecondary">Created by: {post.creator}</Typography>
          <Divider sx={{ my: 2 }} />
          <LikeButton postId={post._id} likes={post.likes} />
          <DeletePostComponent postId={post._id} />
          <UpdatePostComponent postId={post._id} />
          <CommentSection postId={post._id} comments={post.comments} />
        </CardContent>
      </Card>
    </Container>
  );
};

export default SinglePostComponent;
