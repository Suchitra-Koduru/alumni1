// // // LikeButton.js
// // LikeButton.js
// import React, { useState } from 'react';
// import { Button } from '@mui/material'; // Updated import
// import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'; // Updated import
// import ThumbUpAltOutlined from '@mui/icons-material/ThumbUpAltOutlined'; // Updated import
// import { useDispatch } from 'react-redux';
// import { likePost } from '../../../actions/posts';

// const LikeButton = ({ post, userId }) => {
//   const dispatch = useDispatch();
//   const [likes, setLikes] = useState(post?.likes);
//   const hasLikedPost = likes?.find((like) => like === userId);

//   const handleLike = () => {
//     dispatch(likePost(post._id));

//     if (hasLikedPost) {
//       setLikes(post.likes.filter((id) => id !== userId));
//     } else {
//       setLikes([...post.likes, userId]);
//     }
//   };

//   const Likes = () => {
//     if (likes.length > 0) {
//       return hasLikedPost
//         ? (
//           <><ThumbUpAltIcon fontSize="small" />&nbsp;{likes.length > 2 ? `You and ${likes.length - 1} others` : `${likes.length} like${likes.length > 1 ? 's' : ''}` }</>
//         ) : (
//           <><ThumbUpAltOutlined fontSize="small" />&nbsp;{likes.length} {likes.length === 1 ? 'Like' : 'Likes'}</>
//         );
//     }

//     return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
//   };

//   return (
//     <Button size="small" color="primary" disabled={!userId} onClick={handleLike}>
//       <Likes />
//     </Button>
//   );
// };

// export default LikeButton;
