import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Card, CardContent, CardMedia, CircularProgress, Grid } from '@mui/material';
import { useAuth } from '../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const LikedPosts = () => {
    const { userId } = useAuth(); // Get userId from the auth context
    const [likedPosts, setLikedPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate=useNavigate

    useEffect(() => {
        const fetchLikedPosts = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/posts/${userId}/likedPosts`);
                setLikedPosts(response.data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching liked posts:', err);
                setError('Failed to load liked posts.');
                setLoading(false);
            }
        };

        fetchLikedPosts();
    }, [userId]);
    function handleSinglePost(id) {
        navigate(`/posts/${id}`);
    }


    if (loading) return <CircularProgress />;
    if (error) return <Typography variant="h6" color="error">{error}</Typography>;

    return (
        <Container style={{ padding: '80px' }}>
            <Typography variant="h4" gutterBottom>Liked Posts</Typography>
            <Grid container spacing={3}>
                {likedPosts.length > 0 ? (
                    likedPosts.map((post) => (
                        <Grid item xs={12} sm={6} md={4} key={post._id}>
                            <Card>
                                {post.selectedFile && (
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={`http://localhost:5000/${post.selectedFile}`} // Make sure this path is correct
                                        alt={post.title}
                                    />
                                )}
                                <CardContent>
                                    <Typography variant="h5">{post.title}</Typography>
                                    <Typography variant="body2" color="textSecondary">{post.message}</Typography>
                                    <Typography variant="caption" color="textSecondary">Likes: {post.likes.length}</Typography>
                                    <div></div>
                                    <Button className="custom-button" onClick={() => handleSinglePost(post._id)} variant="primary" size="sm">
                                                See More
                                            </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                ) : (
                    <Typography variant="body1">No liked posts found.</Typography>
                )}
            </Grid>
        </Container>
    );
};

export default LikedPosts;
