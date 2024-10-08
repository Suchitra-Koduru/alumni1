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


// import React, { useEffect, useState } from 'react';
// import { Button, Card, Col, Container, Row } from "react-bootstrap";
// import { useNavigate } from 'react-router-dom';
// import axios from "axios";

// const SearchComponent = () => {
//   const navigate = useNavigate();
//   const [query, setQuery] = useState('');
//   const [search, setSearch] = useState([]);
//   const [error, setError] = useState('');

//   const handleInputChange = (e) => {
//     setQuery(e.target.value);
//   };

//   useEffect(() => {
//     const fetchPosts = async () => {
//       if (query) { // Only fetch if there's a query
//         try {
//           const response = await axios.get('http://localhost:5000/posts/search', {
//             params: { searchQuery: query }
//           });
//           console.log(response.data);
//           setSearch(response.data.data); // Adjust according to your API response structure
//           setError(''); // Clear any previous errors
//         } catch (err) {
//           console.log(err);
//           setError('Failed to fetch posts. Please try again later.');
//         }
//       } else {
//         setSearch([]); // Clear search results if query is empty
//       }
//     };

//     const debounceFetch = setTimeout(fetchPosts, 300); // Debounce for 300ms

//     return () => clearTimeout(debounceFetch); // Cleanup on unmount or change
//   }, [query]);

//   const handleSinglePost = (id) => {
//     try {
//       console.log(id);
//       navigate(`/getPost/${id}`);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className='mt-5'>
//       <div className='d-flex justify-content-end pe-5 me-5 align-content-center'>
//         <input
//           type="search"
//           value={query}
//           onChange={handleInputChange}
//           placeholder="Search for a post..."
//           style={{
//             width: "25%",
//             padding: "10px 15px",
//             borderRadius: "5px",
//             border: "1px solid #ced4da",
//             fontSize: "16px",
//             outline: "none",
//             boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//           }}
//         />
//       </div>
//       {error && <div className="text-danger text-center">{error}</div>} {/* Display error message */}
//       <Container className="container-custom">
//         <Row className="custom-row">
//           {search.map((post) => (
//             <Col key={post._id} xs={12} sm={6} md={4} lg={2} className="custom-col-lg custom-col mb-4">
//               <Card className="card-custom">
//                 <Card.Body className="card-body-custom">
//                   <div className="card-content">
//                     <Card.Title className="card-title-custom fs-6">{post.title}</Card.Title>
//                     <Card.Text className="card-text-custom fs-7">{post.message}</Card.Text>
//                     <Card.Text className="card-text-custom fs-7">Tags: {post.tags.join(', ')}</Card.Text>
//                   </div>
//                   <div className="button-group-custom p-1">
//                     <Button className="custom-button" onClick={() => handleSinglePost(post._id)} variant="primary" size="sm">See More</Button>
//                   </div>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default SearchComponent;
