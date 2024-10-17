import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, CircularProgress, Grid } from '@mui/material';
import { useAuth } from '../providers/AuthProvider'; // Assuming you have an auth context
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'; // Ensure both icons are imported
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
const MyPostsComponent = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { userId } = useAuth(); // Get user ID from auth provider
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
    navigate(`/update/${id}`); // Navigate to edit page
  };
  function handleSinglePost(id) {
    navigate(`/posts/${id}`);
}

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
      // Refresh the posts after deletion
      setPosts(posts.filter((post) => post._id !== id));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography variant="h6" color="error">{error}</Typography>;
  }

  return (
    <Grid container spacing={3} padding={'80px'}>
      {posts.length === 0 ? (
        <Typography variant="h6">No posts available</Typography>
      ) : (
        posts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post._id}>
            <Card>
              <CardContent>
                <Typography variant="h5">{post.title}</Typography>
                <Typography variant="body2" color="textSecondary">{post.message}</Typography>
                {post.selectedFile && (
                  <img
                    src={`http://localhost:5000/${post.selectedFile}`} // Adjust this URL as per your server setup
                    alt={post.title}
                    style={{ width: '100%', height: 'auto', marginBottom: '10px' }}
                  />
                )}
                <Typography variant="caption">Tags: {post.tags.join(', ')}</Typography>
                <div></div>
                <Button className="custom-button" onClick={() => handleSinglePost(post._id)} variant="primary" size="sm">
                                                See More
                                            </Button>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                  <FontAwesomeIcon 
                    icon={faPenToSquare} // Use the correct icon definition
                    onClick={() => handleEdit(post._id)} // Attach edit handler
                    style={{ cursor: 'pointer', color: 'purple', fontSize: '24px' }} // Increase size and add styles
                  />
                  <FontAwesomeIcon 
                    icon={faTrash} 
                    onClick={() => handleDelete(post._id)} // Attach delete handler
                    style={{ cursor: 'pointer', color: 'purple', fontSize: '24px' }} // Increase size and add styles
                  />
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default MyPostsComponent;
