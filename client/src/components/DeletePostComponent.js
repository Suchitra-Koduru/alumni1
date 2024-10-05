import React from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../providers/AuthProvider'; // Replace with your auth provider

const DeletePostComponent = () => {
  const { id } = useParams();
  const { userId } = useAuth();
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (!userId) {
      alert('Please log in to delete a post.');
      return;
    }

    try {
      const res=await axios.delete(`http://localhost:5000/posts/${id}`, {
        headers: { Authorization: `Bearer ${userId}` }
      });
      console.log(res.data)
      prompt('Are you sure you want to delete this post?')
      navigate('/getposts');
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <Button variant="contained" color="error" onClick={handleDelete}>
      Delete Post
    </Button>
  );
};

export default DeletePostComponent;
