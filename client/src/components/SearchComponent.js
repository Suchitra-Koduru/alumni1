import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Grid, Typography, Card, CardContent } from '@mui/material';

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [tags, setTags] = useState('');
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/posts/search`, {
        params: { searchQuery, tags }
      });
      console.log(response.data)
      setPosts(response.data.data);
      setError(''); // Clear any previous errors
    } catch (err) {
      setError('Failed to fetch posts. Please try again later.');
      setPosts([]); // Clear posts in case of error
      console.error('Error fetching posts:', err);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Search Posts</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField 
            label="Search Query" 
            variant="outlined" 
            fullWidth 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)} 
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
            label="Tags (comma-separated)" 
            variant="outlined" 
            fullWidth 
            value={tags} 
            onChange={(e) => setTags(e.target.value)} 
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleSearch}>
            Search
          </Button>
        </Grid>
      </Grid>
      {error && <Typography variant="h6" color="error">{error}</Typography>}
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        {posts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post._id}>
            <Card>
              <CardContent>
                <Typography variant="h5">{post.title}</Typography>
                <Typography variant="body2" color="textSecondary">{post.message}</Typography>
                <Typography variant="caption" color="textSecondary">Tags: {post.tags.join(', ')}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SearchComponent;
