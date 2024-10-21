// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { TextField, Button, Card, CardContent, Typography } from '@mui/material';
// import { useAuth } from '../providers/AuthProvider'; // Assuming you have an auth context
// import '../styles/CreatePostComponent.css'; // Assuming you have a CSS file for styling

// function CreatePostComponent() {
//   const navigate = useNavigate();
//   const { userId } = useAuth(); // Assuming you get the user ID from the auth provider
//   const [newPost, setNewPost] = useState({
//     title: "",
//     message: "",
//     tags: "",
//     selectedFile: null,
//   });
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(false);

//   async function handleCreatePost(e) {
//     e.preventDefault();
//     const token=localStorage.getItem('token');

//     if (!token) {
//       alert("Please log in to create a post");
//       navigate("/login");
//       return;
//     }

//     try {
//       setLoading(true);
//       const token = localStorage.getItem("token");
      
//       const formData = new FormData();
//       formData.append('title', newPost.title);
//       formData.append('message', newPost.message);
//       formData.append('tags', newPost.tags.split(',').map(tag => tag.trim()));
//       if (newPost.selectedFile) {
//         formData.append('selectedFile', newPost.selectedFile); // Only append if file exists
//       }

//       const res = await axios.post(`http://localhost:5000/posts/`, formData, {
//         headers: {
//           "Authorization": `Bearer ${token}`,
//           "Content-Type": "multipart/form-data"
//         }
//       });

//       if (res.data.status === false) {
//         if (res.data.login === false) {
//           alert("Please log in to proceed");
//           navigate("/login");
//         }
//       } else {
//         setPosts([...posts, res.data]);
//         setNewPost({
//           title: "",
//           message: "",
//           tags: "",
//           selectedFile: null
//         });
//         navigate("/getPosts");
//       }
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div className="create-post-container">
//       <Card className="create-post-card">
//         <CardContent>
//           <Typography variant="h5" component="div">
//             Create Post
//           </Typography>
//           <form className="create-post-form" style={{ maxWidth: '800px', margin: 'auto' }} onSubmit={handleCreatePost}>
//             <TextField
//               label="Title"
//               variant="outlined"
//               value={newPost.title}
//               onChange={(e) => setNewPost((prevPost) => ({ ...prevPost, title: e.target.value }))}
//               required
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               label="Message"
//               variant="outlined"
//               multiline
//               rows={4}
//               value={newPost.message}
//               onChange={(e) => setNewPost((prevPost) => ({ ...prevPost, message: e.target.value }))}
//               required
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               label="Tags (comma-separated)"
//               variant="outlined"
//               value={newPost.tags}
//               onChange={(e) => setNewPost((prevPost) => ({ ...prevPost, tags: e.target.value }))}
//               fullWidth
//               margin="normal"
//             />
//             <input
//   type="file"
//   onChange={(e) => setNewPost((prevPost) => ({ ...prevPost, selectedFile: e.target.files[0] }))}
// />

//             <Button variant="contained" color="primary" type="submit" disabled={loading}>
//               {loading ? 'Creating Post...' : 'Create Post'}
//             </Button>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// export default CreatePostComponent;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { TextField, Button, Card, CardContent, Typography } from '@mui/material';
// import { useAuth } from '../providers/AuthProvider'; // Assuming you have an auth context
// import '../styles/CreatePostComponent.css'; // Assuming you have a CSS file for styling

// function CreatePostComponent() {
//   const navigate = useNavigate();
//   const { userId } = useAuth(); // Assuming you get the user ID from the auth provider
//   const [newPost, setNewPost] = useState({
//     title: "",
//     message: "",
//     tags: "",
//     selectedFile: null,
//   });
//   const [loading, setLoading] = useState(false);

//   async function handleCreatePost(e) {
//     e.preventDefault();
//     const token = localStorage.getItem('token');

//     if (!token) {
//       alert("Please log in to create a post");
//       navigate("/login");
//       return;
//     }

//     try {
//       setLoading(true);
      
//       const formData = new FormData();
//       formData.append('title', newPost.title);
//       formData.append('message', newPost.message);
//       formData.append('tags', newPost.tags.split(',').map(tag => tag.trim()));
//       formData.append('creator', userId); // Add userId as creator
//       if (newPost.selectedFile) {
//         formData.append('selectedFile', newPost.selectedFile); // Only append if file exists
//       }
//       console.log(formData)
//       const res = await axios.post(`http://localhost:5000/posts/`, formData, {
//         headers: {
//           "Authorization": `Bearer ${token}`,
//           "Content-Type": "multipart/form-data"
//         }
//       });
//       console.log(res.data)

//       if (res.data.status === false) {
//         if (res.data.login === false) {
//           alert("Please log in to proceed");
//           navigate("/login");
//         }
//       } else {
//         // Optionally navigate or reset form state if needed
//         navigate("/getPosts");
//       }
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div className="create-post-container">
//       <Card className="create-post-card">
//         <CardContent>
//           <Typography variant="h5" component="div">
//             Create Post
//           </Typography>
//           <form className="create-post-form" style={{ maxWidth: '800px', margin: 'auto' }} onSubmit={handleCreatePost}>
//             <TextField
//               label="Title"
//               variant="outlined"
//               value={newPost.title}
//               onChange={(e) => setNewPost((prevPost) => ({ ...prevPost, title: e.target.value }))} 
//               required
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               label="Message"
//               variant="outlined"
//               multiline
//               rows={4}
//               value={newPost.message}
//               onChange={(e) => setNewPost((prevPost) => ({ ...prevPost, message: e.target.value }))} 
//               required
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               label="Tags (comma-separated)"
//               variant="outlined"
//               value={newPost.tags}
//               onChange={(e) => setNewPost((prevPost) => ({ ...prevPost, tags: e.target.value }))} 
//               fullWidth
//               margin="normal"
//             />
//             <input
//               type="file"
//               onChange={(e) => setNewPost((prevPost) => ({ ...prevPost, selectedFile: e.target.files[0] }))} 
//             />

//             <Button variant="contained" color="primary" type="submit" disabled={loading}>
//               {loading ? 'Creating Post...' : 'Create Post'}
//             </Button>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// export default CreatePostComponent;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { TextField, Button, Card, CardContent, Typography } from '@mui/material';
// import { useAuth } from '../providers/AuthProvider';
// import '../styles/CreatePostComponent.css';

// function CreatePostComponent() {
//   const navigate = useNavigate();
//   const { userId } = useAuth();
//   const [newPost, setNewPost] = useState({
//     title: '',
//     message: '',
//     tags: '',
//     selectedFile: null,
//   });
//   const [loading, setLoading] = useState(false);

//   async function handleCreatePost(e) {
//     e.preventDefault();
//     const token = localStorage.getItem('token');

//     if (!token) {
//       alert('Please log in to create a post');
//       navigate('/login');
//       return;
//     }

//     try {
//       setLoading(true);
      
//       const formData = new FormData();
//       formData.append('title', newPost.title);
//       formData.append('message', newPost.message);
//       formData.append('tags', newPost.tags.split(',').map(tag => tag.trim()));
//       formData.append('creator', userId);
//       if (newPost.selectedFile) {
//         formData.append('selectedFile', newPost.selectedFile);
//       }

//       const res = await axios.post(`http://localhost:5000/posts/`, formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       if (res.data.status === false && res.data.login === false) {
//         alert('Please log in to proceed');
//         navigate('/login');
//       } else {
//         navigate('/getPosts');
//       }
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   }

//   const styles = {
//     container: {
//       position: 'relative',
//       minHeight: '100vh',
//       backgroundImage: 'url("https://www.wilson.edu/sites/default/files/styles/1920_x_1080/public/campus.jpg?itok=6tjXNHDU")',
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       backgroundRepeat: 'no-repeat',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     overlay: {
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       backgroundColor: 'rgba(255, 255, 255, 0.5)',
//       backdropFilter: 'blur(8px)',
//       zIndex: 1,
//     },
//     card: {
//       width: '80%',
//       maxWidth: '600px',
//       backgroundColor: '#4B0082',
//       color: '#FFFFFF',
//       zIndex: 2,
//       borderRadius: '10px',
//       boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//       padding: '100px',
//     },
//     createButton: {
//       backgroundColor: '#DDA0DD',
//       color: 'white',
//       border: 'none',
//       padding: '0.75rem 1.5rem',
//       fontSize: '1rem',
//       marginTop: '1rem',
//       cursor: 'pointer',
//       borderRadius: '5px',
//       transition: 'background-color 0.3s ease',
//       display: 'block',
//       width: '100%',
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.overlay}></div>
//       <Card style={styles.card}>
//         <CardContent>
//           <Typography variant="h5" component="div" align="center">
//             Create Post
//           </Typography>
//           <form className="create-post-form" onSubmit={handleCreatePost}>
//             <TextField
//               label="Title"
//               variant="outlined"
//               value={newPost.title}
//               onChange={(e) =>
//                 setNewPost((prevPost) => ({ ...prevPost, title: e.target.value }))
//               }
//               required
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               label="Message"
//               variant="outlined"
//               multiline
//               rows={4}
//               value={newPost.message}
//               onChange={(e) =>
//                 setNewPost((prevPost) => ({ ...prevPost, message: e.target.value }))
//               }
//               required
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               label="Tags (comma-separated)"
//               variant="outlined"
//               value={newPost.tags}
//               onChange={(e) =>
//                 setNewPost((prevPost) => ({ ...prevPost, tags: e.target.value }))
//               }
//               fullWidth
//               margin="normal"
//             />
//             <input
//               type="file"
//               style={{ marginTop: '1rem', display: 'block' }}
//               onChange={(e) =>
//                 setNewPost((prevPost) => ({ ...prevPost, selectedFile: e.target.files[0] }))
//               }
//             />

//             <Button
//               variant="contained"
//               style={styles.createButton}
//               type="submit"
//               disabled={loading}
//             >
//               {loading ? 'Creating Post...' : 'Create Post'}
//             </Button>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// export default CreatePostComponent;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { TextField, Button, Card, CardContent, Typography } from '@mui/material';
// import { useAuth } from '../providers/AuthProvider';
// import '../styles/CreatePostComponent.css';

// function CreatePostComponent() {
//   const navigate = useNavigate();
//   const { userId } = useAuth();
//   const [newPost, setNewPost] = useState({
//     title: '',
//     message: '',
//     tags: '',
//     selectedFile: null,
//   });
//   const [loading, setLoading] = useState(false);

//   async function handleCreatePost(e) {
//     e.preventDefault();
//     const token = localStorage.getItem('token');

//     if (!token) {
//       alert('Please log in to create a post');
//       navigate('/login');
//       return;
//     }

//     try {
//       setLoading(true);
      
//       const formData = new FormData();
//       formData.append('title', newPost.title);
//       formData.append('message', newPost.message);
//       formData.append('tags', newPost.tags.split(',').map(tag => tag.trim()));
//       formData.append('creator', userId);
//       if (newPost.selectedFile) {
//         formData.append('selectedFile', newPost.selectedFile);
//       }

//       const res = await axios.post(`http://localhost:5000/posts/`, formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       if (res.data.status === false && res.data.login === false) {
//         alert('Please log in to proceed');
//         navigate('/login');
//       } else {
//         navigate('/getPosts');
//       }
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   }

//   const styles = {
//     container: {
//       position: 'relative',
//       minHeight: '100vh',
//       backgroundImage: 'url("https://www.wilson.edu/sites/default/files/styles/1920_x_1080/public/campus.jpg?itok=6tjXNHDU")',
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       backgroundRepeat: 'no-repeat',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     overlay: {
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       backgroundColor: 'rgba(255, 255, 255, 0.5)',
//       backdropFilter: 'blur(8px)',
//       zIndex: 1,
//     },
//     card: {
//       width: '80%',
//       maxWidth: '600px',
//       backgroundColor: '#4B0082',
//       color: '#FFFFFF',
//       zIndex: 2,
//       borderRadius: '10px',
//       boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//       //padding: '100px',
//     },
//     createButton: {
//       backgroundColor: '#DDA0DD',
//       color: 'white',
//       border: 'none',
//       padding: '0.75rem 1.5rem',
//       fontSize: '1rem',
//       marginTop: '1rem',
//       cursor: 'pointer',
//       borderRadius: '5px',
//       transition: 'background-color 0.3s ease',
//       display: 'block',
//       width: '100%',
//     },
//     inputLabel: {
//       color: '#FFFFFF',
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.overlay}></div>
//       <Card style={styles.card}>
//         <CardContent>
//           <Typography variant="h5" component="div" align="center">
//             Create Post
//           </Typography>
//           <form className="create-post-form" onSubmit={handleCreatePost}>
//             <TextField
//               label="Title"
//               variant="outlined"
//               value={newPost.title}
//               onChange={(e) =>
//                 setNewPost((prevPost) => ({ ...prevPost, title: e.target.value }))
//               }
//               required
//               fullWidth
//               margin="normal"
//               InputLabelProps={{ style: styles.inputLabel }}
//             />
//             <TextField
//               label="Message"
//               variant="outlined"
//               multiline
//               rows={4}
//               value={newPost.message}
//               onChange={(e) =>
//                 setNewPost((prevPost) => ({ ...prevPost, message: e.target.value }))
//               }
//               required
//               fullWidth
//               margin="normal"
//               InputLabelProps={{ style: styles.inputLabel }}
//             />
//             <TextField
//               label="Tags (comma-separated)"
//               variant="outlined"
//               value={newPost.tags}
//               onChange={(e) =>
//                 setNewPost((prevPost) => ({ ...prevPost, tags: e.target.value }))
//               }
//               fullWidth
//               margin="normal"
//               InputLabelProps={{ style: styles.inputLabel }}
//             />
//             <input
//               type="file"
//               style={{ marginTop: '1rem', display: 'block' }}
//               onChange={(e) =>
//                 setNewPost((prevPost) => ({ ...prevPost, selectedFile: e.target.files[0] }))
//               }
//             />

//             <Button
//               variant="contained"
//               style={styles.createButton}
//               type="submit"
//               disabled={loading}
//             >
//               {loading ? 'Creating Post...' : 'Create Post'}
//             </Button>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// export default CreatePostComponent;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';
import { useAuth } from '../providers/AuthProvider';
import '../styles/CreatePostComponent.css';

function CreatePostComponent() {
  const navigate = useNavigate();
  const { userId } = useAuth();
  const [newPost, setNewPost] = useState({
    title: '',
    message: '',
    tags: '',
    selectedFile: null,
  });
  const [loading, setLoading] = useState(false);

  async function handleCreatePost(e) {
    e.preventDefault();
    const token = localStorage.getItem('token');

    if (!token) {
      alert('Please log in to create a post');
      navigate('/login');
      return;
    }

    try {
      setLoading(true);
      
      const formData = new FormData();
      formData.append('title', newPost.title);
      formData.append('message', newPost.message);
      formData.append('tags', newPost.tags.split(',').map(tag => tag.trim()));
      formData.append('creator', userId);
      if (newPost.selectedFile) {
        formData.append('selectedFile', newPost.selectedFile);
      }

      const res = await axios.post(`http://localhost:5000/posts/`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      if (res.data.status === false && res.data.login === false) {
        alert('Please log in to proceed');
        navigate('/login');
      } else {
        navigate('/getPosts');
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  const styles = {
    container: {
      position: 'relative',
      minHeight: '100vh',
      backgroundImage: 'url("https://www.wilson.edu/sites/default/files/styles/1920_x_1080/public/campus.jpg?itok=6tjXNHDU")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      backdropFilter: 'blur(8px)',
      zIndex: 1,
    },
    card: {
      width: '80%',
      maxWidth: '600px',
      backgroundColor: '#4B0082',
      color: '#FFFFFF',
      zIndex: 2,
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    createButton: {
      backgroundColor: '#DDA0DD',
      color: 'white',
      border: 'none',
      padding: '0.75rem 1.5rem',
      fontSize: '1rem',
      marginTop: '1rem',
      cursor: 'pointer',
      borderRadius: '5px',
      transition: 'background-color 0.3s ease',
      display: 'block',
      width: '100%',
    },
    inputLabel: {
      color: '#FFFFFF',
    },
    input: {
      color: '#FFFFFF', // Set input text color to white
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div>
      <Card style={styles.card}>
        <CardContent>
          <Typography variant="h5" component="div" align="center">
            Create Post
          </Typography>
          <form className="create-post-form" onSubmit={handleCreatePost}>
            <TextField
              label="Title"
              variant="outlined"
              value={newPost.title}
              onChange={(e) =>
                setNewPost((prevPost) => ({ ...prevPost, title: e.target.value }))
              }
              required
              fullWidth
              margin="normal"
              InputLabelProps={{ style: styles.inputLabel }}
              InputProps={{ style: styles.input }} // Set input text color here
            />
            <TextField
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              value={newPost.message}
              onChange={(e) =>
                setNewPost((prevPost) => ({ ...prevPost, message: e.target.value }))
              }
              required
              fullWidth
              margin="normal"
              InputLabelProps={{ style: styles.inputLabel }}
              InputProps={{ style: styles.input }} // Set input text color here
            />
            <TextField
              label="Tags (comma-separated)"
              variant="outlined"
              value={newPost.tags}
              onChange={(e) =>
                setNewPost((prevPost) => ({ ...prevPost, tags: e.target.value }))
              }
              fullWidth
              margin="normal"
              InputLabelProps={{ style: styles.inputLabel }}
              InputProps={{ style: styles.input }} // Set input text color here
            />
            <input
              type="file"
              style={{ marginTop: '1rem', display: 'block' }}
              onChange={(e) =>
                setNewPost((prevPost) => ({ ...prevPost, selectedFile: e.target.files[0] }))
              }
            />

            <Button
              variant="contained"
              style={styles.createButton}
              type="submit"
              disabled={loading}
            >
              {loading ? 'Creating Post...' : 'Create Post'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default CreatePostComponent;
