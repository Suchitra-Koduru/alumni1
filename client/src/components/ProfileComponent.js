import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { userId } = useAuth();
  const navigate=useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      if (userId) {
        try {
          console.log(userId);
          const response = await axios.get(`http://localhost:5000/user/${userId}`);
          console.log(response.data);
          setUser(response.data);
        } catch (error) {
          console.log("hello");
          setError('Failed to fetch user data');
        } finally {
          setLoading(false);
        }
      } else {
        setError('No user ID found in local storage');
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const firstLetter = user?.name?.charAt(0).toUpperCase();
  function handleMyPosts(userId){
    navigate('/myposts/:userId')
  }
  function handleMyLikedPosts(userId){
    navigate('/mylikedposts/:userId')
  }
  return (
    user && (
      <div style={styles.profileContainer}>
        <div style={styles.profileImage}>
          <span style={styles.profileInitial}>{firstLetter}</span>
        </div>
        <div style={styles.profileDetails}>
          <h1 style={styles.profileTitle}>Profile</h1>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <div onClick={()=>handleMyPosts(user._id)}>My Posts</div>
          <div onClick={()=>handleMyLikedPosts(user._id)}>My Liked Posts</div>
        </div>
      </div>
    )
  );
};

const styles = {
  profileContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '50px',
    padding: '80px'
  },
  profileImage: {
    width: '100px',
    height: '100px',
    backgroundColor: '#007bff', // Change color as needed
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '36px',
    borderRadius: '50%',
    marginRight: '20px',
  },
  profileInitial: {
    fontWeight: 'bold',
  },
  profileDetails: {
    fontFamily: 'Arial, sans-serif',
  },
  profileTitle: {
    margin: 0,
    fontSize: '24px',
  },
};

export default Profile;
