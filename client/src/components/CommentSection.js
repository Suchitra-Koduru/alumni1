// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { TextField, Button, Card, CardContent, Typography, List, ListItem } from '@mui/material';
// import { useParams } from 'react-router-dom';
// import { useAuth } from '../providers/AuthProvider'; // Replace with your auth provider

// const CommentSection = () => {
//   const { id } = useParams();
//   const [comments, setComments] = useState([]);
//   const [comment, setComment] = useState('');
//   const { userId } = useAuth();

//   useEffect(() => {
//     const fetchComments = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/posts/${id}`);
//         setComments(response.data.comments);
//       } catch (error) {
//         console.error('Error fetching comments:', error);
//       }
//     };

//     fetchComments();
//   }, [id]);

//   const handleCommentSubmit = async (e) => {
//     e.preventDefault();
//     if (!userId) {
//       alert('Please log in to comment.');
//       return;
//     }

//     try {
//       await axios.post(`http://localhost:5000/posts/${id}/commentPost`, { value: comment }, {
//         headers: { Authorization: `Bearer ${userId}` }
//       });
//       setComment('');
//       setComments([...comments, comment]);
//     } catch (error) {
//       console.error('Error adding comment:', error);
//     }
//   };

//   return (
//     <Card style={{ marginTop: '16px', maxWidth: '600px' }}>
//       <CardContent>
//         <Typography variant="h6" component="div">
//           Comments
//         </Typography>
//         <List>
//           {comments.map((comment, index) => (
//             <ListItem key={index}>
//               <Typography variant="body2">{comment}</Typography>
//             </ListItem>
//           ))}
//         </List>
//         <form onSubmit={handleCommentSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
//           <TextField
//             label="Add a comment"
//             variant="outlined"
//             value={comment}
//             onChange={(e) => setComment(e.target.value)}
//             required
//           />
//           <Button variant="contained" color="primary" type="submit">
//             Comment
//           </Button>
//         </form>
//       </CardContent>
//     </Card>
//   );
// };

// export default CommentSection;

import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider"; // Replace with your auth provider

const CommentSection = () => {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const { userId } = useAuth();

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/posts/${id}`);
        setComments(response.data.comments);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [id]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!userId) {
      alert("Please log in to comment.");
      return;
    }

    try {
      await axios.post(
        `http://localhost:5000/posts/${id}/commentPost`,
        { value: comment },
        {
          headers: { Authorization: `Bearer ${userId}` },
        }
      );
      setComment("");
      setComments([...comments, comment]);
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  return (
    <Card
      style={{
        marginTop: "16px",
        maxWidth: "600px",
        backgroundColor: "#DDA0DD",
      }}
      sx={{
        borderRadius: 10,
        padding: "16px",
        marginBottom: "10px",
        marginLeft: "10px",
      }}
    >
      {" "}
      {/* Change background to plum */}
      <CardContent>
        <Typography variant="h6" component="div">
          Comments
        </Typography>
        <List>
          {comments.map((comment, index) => (
            <ListItem key={index}>
              <Typography variant="body2">{comment}</Typography>
            </ListItem>
          ))}
        </List>
        <form
          onSubmit={handleCommentSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginTop: "16px",
          }}
        >
          <TextField
            label="Add a comment"
            variant="outlined"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
          <Button
            variant="contained"
            style={{ backgroundColor: "purple", width: "100px" }}
            type="submit"
          >
            {" "}
            {/* Change button to lavender */}
            Comment
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CommentSection;
