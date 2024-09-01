import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IconButton } from '@mui/material';
import { AiFillLike } from 'react-icons/ai';
import { useAuth } from '../providers/AuthProvider'; // Replace with your auth provider

const LikeButton = ({ postId, likes }) => {
  const [liked, setLiked] = useState(false);
  const { userId } = useAuth();

  useEffect(() => {
    setLiked(likes.includes(userId));
  }, [likes, userId]);

  const handleLike = async () => {
    if (!userId) {
      alert('Please log in to like a post.');
      return;
    }

    try {
      await axios.patch(`http://localhost:3001/api/posts/${postId}/likePost`, {}, {
        headers: { Authorization: `Bearer ${userId}` }
      });
      setLiked(!liked);
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  return (
    <IconButton onClick={handleLike} color={liked ? 'primary' : 'default'}>
      <AiFillLike />
      {likes.length}
    </IconButton>
  );
};

export default LikeButton;
