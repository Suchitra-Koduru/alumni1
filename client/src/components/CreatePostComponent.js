import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';
import { useAuth } from '../providers/AuthProvider';
import '../styles/CreatePostComponent.css';

function CreatePostComponent() {
  const { userId } = useAuth();
  const navigate = useNavigate();
  
  const [newPost, setNewPost] = useState({
    title: '',
    message: '',
    tags: '',
    selectedFile: null,
  });

  const [posts, setPosts] = useState([]);

  async function handleCreatePost(e) {
    e.preventDefault();

    if (!userId) {
      alert('Please log in to create a post.');
      return;
    }

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found. Please log in.");
      }

      const formData = new FormData();
      formData.append('title', newPost.title);
      formData.append('message', newPost.message);
      formData.append('tags', newPost.tags.split(',').map(tag => tag.trim()));
      formData.append('selectedFile', newPost.selectedFile);

      const res = await axios.post('http://localhost:5000/posts/', formData, {
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data', // Important for file uploads
        },
      });
      console.log(res)
      if (res.status === 200) {
        setPosts([...posts, res.data]); // Update the posts state with the new post
        setNewPost({
          title: '',
          message: '',
          tags: '',
          selectedFile: null,
        });
        navigate('/getposts');
      } else {
        alert('Failed to create post');
      }
    } catch (err) {
      console.error('Error creating post:', err);
    }
  }

  return (
    <div className="create-post-container">
      <Card className="create-post-card">
        <CardContent>
          <Typography variant="h5" component="div">
            Create Post
          </Typography>
          <form className="create-post-form" style={{ maxWidth: '800px', margin: 'auto' }}>
            <TextField
              label="Title"
              variant="outlined"
              value={newPost.title}
              onChange={(e) => setNewPost((prevPost) => ({ ...prevPost, title: e.target.value }))}
              required
              fullWidth
              margin="normal"
            />
            <TextField
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              value={newPost.message}
              onChange={(e) => setNewPost((prevPost) => ({ ...prevPost, message: e.target.value }))}
              required
              fullWidth
              margin="normal"
            />
            <TextField
              label="Tags (comma-separated)"
              variant="outlined"
              value={newPost.tags}
              onChange={(e) => setNewPost((prevPost) => ({ ...prevPost, tags: e.target.value }))}
              fullWidth
              margin="normal"
            />
            <input
              type="file"
              onChange={(e) => setNewPost((prevPost) => ({ ...prevPost, selectedFile: e.target.files[0] }))}
              style={{ marginTop: '16px', marginBottom: '16px' }}
            />
            <Button variant="contained" color="primary" type="submit" onClick={handleCreatePost}>
              Create Post
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default CreatePostComponent;
