import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';
import { useAuth } from '../providers/AuthProvider'; // Assuming you have an auth context
import '../styles/CreatePostComponent.css'; // Assuming you have a CSS file for styling

function CreatePostComponent() {
  const navigate = useNavigate();
  const { userId } = useAuth(); // Assuming you get the user ID from the auth provider
  const [newPost, setNewPost] = useState({
    title: "",
    message: "",
    tags: "",
    selectedFile: null,
  });
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleCreatePost(e) {
    e.preventDefault();

    if (!userId) {
      alert("Please log in to create a post");
      navigate("/login");
      return;
    }

    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      
      const formData = new FormData();
      formData.append('title', newPost.title);
      formData.append('message', newPost.message);
      formData.append('tags', newPost.tags.split(',').map(tag => tag.trim()));
      if (newPost.selectedFile) {
        formData.append('selectedFile', newPost.selectedFile); // Only append if file exists
      }

      const res = await axios.post(`http://localhost:5000/posts/`, formData, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "multipart/form-data"
        }
      });

      if (res.data.status === false) {
        if (res.data.login === false) {
          alert("Please log in to proceed");
          navigate("/login");
        }
      } else {
        setPosts([...posts, res.data]);
        setNewPost({
          title: "",
          message: "",
          tags: "",
          selectedFile: null
        });
        navigate("/getPosts");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="create-post-container">
      <Card className="create-post-card">
        <CardContent>
          <Typography variant="h5" component="div">
            Create Post
          </Typography>
          <form className="create-post-form" style={{ maxWidth: '800px', margin: 'auto' }} onSubmit={handleCreatePost}>
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
/>

            <Button variant="contained" color="primary" type="submit" disabled={loading}>
              {loading ? 'Creating Post...' : 'Create Post'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default CreatePostComponent;
