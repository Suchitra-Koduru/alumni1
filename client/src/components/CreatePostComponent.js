import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';
import { useAuth } from '../providers/AuthProvider'; // Replace with your auth provider
import '../styles/CreatePostComponent.css'; // Import the CSS file

const CreatePostComponent = () => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [tags, setTags] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  const { userId } = useAuth();
  
  const navigate = useNavigate();
   
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userId) {
      alert('Please log in to create a post.');
      return;
    }

    try {
        const token = localStorage.getItem('token'); // Ensure 'token' is a string key
        if (!token) {
            throw new Error("No token found. Please log in.");
        }
      
        const formData = new FormData();
        formData.append('title', title);
        formData.append('message', message);
        formData.append('tags', tags.split(',').map(tag => tag.trim()));
        formData.append('selectedFile', selectedFile);

        await axios.post('http://localhost:5000/posts/', formData, {
            headers: { Authorization: `Bearer ${token}` }
        });

        alert("Post created successfully");
        navigate('/getposts');
    } catch (error) {
        console.error('Error creating post:', error);
    }
};






  return (
    <div className="create-post-container">
      <Card className="create-post-card">
        <CardContent>
          <Typography variant="h5" component="div">
            Create Post
          </Typography>
          <form onSubmit={handleSubmit} className="create-post-form">
            <TextField
              label="Title"
              variant="outlined"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="create-post-input"
            />
            <TextField
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="create-post-input"
            />
            <TextField
              label="Tags (comma-separated)"
              variant="outlined"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="create-post-input"
            />
            <input
              type="file"
              onChange={(e) => setSelectedFile(e.target.files[0])}
              className="create-post-file-input"
            />
            <Button variant="contained" color="primary" type="submit" className="create-post-button">
              Create Post
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreatePostComponent;
