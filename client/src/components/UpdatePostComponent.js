import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';
import { useAuth } from '../providers/AuthProvider';

const UpdatePostComponent = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [tags, setTags] = useState('');
  const { userId } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/posts/${id}`);
        setPost(response.data);
        setTitle(response.data.title);
        setMessage(response.data.message);
        setTags(response.data.tags.join(', '));
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please log in to update a post.');
      return;
    }

    try {
      await axios.patch(
        `http://localhost:5000/posts/${id}`,
        { title, message, tags },
        {
          headers: { Authorization: `Bearer ${userId}` },
        }
      );
      navigate('/getposts');
    } catch (error) {
      console.error('Error updating post:', error);
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
      width: '80%',
      maxWidth: '600px',
      backgroundColor: '#4B0082',
      color: '#FFFFFF',
      zIndex: 2,
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      padding: '20px', // Adjust padding as needed
    },
    updateButton: {
      backgroundColor: '#DDA0DD',
      color: 'white',
      border: 'none',
      padding: '0.75rem 1.5rem',
      fontSize: '1rem',
      marginTop: '1rem',
      cursor: 'pointer',
      borderRadius: '5px',
      transition: 'background-color 0.3s ease',
      display: 'block',
      width: '100%',
    },
    inputLabel: {
      color: '#FFFFFF',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div>
      <Card style={styles.card}>
        <CardContent>
          <Typography variant="h5" component="div" align="center">
            Update Post
          </Typography>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <TextField
              label="Title"
              variant="outlined"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              fullWidth
              InputLabelProps={{ style: styles.inputLabel }}
            />
            <TextField
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              fullWidth
              InputLabelProps={{ style: styles.inputLabel }}
            />
            <TextField
              label="Tags (comma-separated)"
              variant="outlined"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              fullWidth
              InputLabelProps={{ style: styles.inputLabel }}
            />
            <Button variant="contained" style={styles.updateButton} type="submit">
              Update Post
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default UpdatePostComponent;
