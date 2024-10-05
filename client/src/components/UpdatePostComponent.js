import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';
import { useAuth } from '../providers/AuthProvider'; // Replace with your auth provider

const UpdatePostComponent = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [tags, setTags] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
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
        setSelectedFile(response.data.selectedFile);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userId) {
      alert('Please log in to update a post.');
      return;
    }

    try {
      await axios.patch(`http://localhost:5000/posts/${id}`, {
        title,
        message,
        tags,
        selectedFile,
      }, {
        headers: { Authorization: `Bearer ${userId}` }
      });
      navigate('/getposts');
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  return (
    <Card style={{ margin: '16px', maxWidth: '600px' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Update Post
        </Typography>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <TextField
            label="Title"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <TextField
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <TextField
            label="Tags (comma-separated)"
            variant="outlined"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
          <input
            type="file"
            onChange={(e) => setSelectedFile(e.target.files[0])}
          />
          <Button variant="contained" color="primary" type="submit">
            Update Post
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default UpdatePostComponent;
