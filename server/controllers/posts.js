import express from 'express';
import mongoose from 'mongoose';

import PostMessage from '../models/postMessage.js';
//import {User} from '../models/user'; // Adjust path based on actual file structure
 // Ensure the path is correct


const router = express.Router();

export const getPosts = async (req, res) => {
    const { page } = req.query;
    
    try {
        const LIMIT = 8;
        const startIndex = (Number(page) - 1) * LIMIT; // get the starting index of every page
    
        const total = await PostMessage.countDocuments({});
        const posts = await PostMessage.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex);

        res.json({ data: posts, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT)});
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}

export const getPostsBySearch = async (req, res) => {
    const { searchQuery, tags } = req.query;

    try {
        const title = new RegExp(searchQuery, "i");

        const posts = await PostMessage.find({ $or: [ { title }, { tags: { $in: tags.split(',') } } ]});

        res.json({ data: posts });
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}

export const getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await PostMessage.findById(id);
        console.log(post)
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


// export const createPost = async (req, res) => {
//     const post = req.body;
//     console.log(post)
//     const newPostMessage = new PostMessage({ 
//         ...post, 
//         creator: req.userId, 
//         createdAt: new Date().toISOString() 
//     });

//     try {
//         await newPostMessage.save();
//         res.status(201).json(newPostMessage);
//     } catch (error) {
//         console.log(error);
//         res.status(409).json({ message: error.message });
//     }
// }
export const createPost = async (req, res) => {
    const post = req.body;

    // Add the path of the uploaded file to the post data
    if (req.file) {
        post.selectedFile = `uploads/${req.file.filename}`; // Store the relative path to the uploaded image
    }

    const newPostMessage = new PostMessage({ 
        ...post, 
        //creator: req.userId, 
        createdAt: new Date().toISOString() 
    });

    try {
        await newPostMessage.save();
        res.status(201).json(newPostMessage);
    } catch (error) {
        console.log(error);
        res.status(409).json({ message: error.message });
    }
};


// import multer from 'multer';

// // Configure multer to store files
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/');
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   }
// });

// export const upload = multer({ storage });

// export const createPost = async (req, res) => {
//   const { title, message, tags } = req.body;
//   const selectedFile = req.file?.path; // If a file is uploaded
//   console.log(req.body)
//   const newPost = new PostMessage({
//     title,
//     message,
//     tags,
//     selectedFile,
//     creator: req.id,
//     createdAt: new Date().toISOString()
//   });

//   try {
//     await newPost.save();
//     res.status(201).json(newPost);
//   } catch (error) {
//     res.status(409).json({ message: error.message });
//   }
// };

// export const createPost = async (req, res) => {
//     console.log(req.body); // Check if title, message, tags are coming in correctly
//     console.log(req.file); // Check if the file is being uploaded and parsed
  
//     const { title, message, tags } = req.body;
//     const selectedFile = req.file?.path; // If a file is uploaded
  
//     const newPost = new PostMessage({
//       title,
//       message,
//       tags: tags.split(',').map(tag => tag.trim()), // Split tags and trim spaces
//       selectedFile,
//       creator: req.userId,
//       createdAt: new Date().toISOString(),
//     });
  
//     try {
//       await newPost.save();
//       res.status(201).json(newPost); // Return the created post object in the response
//     } catch (error) {
//       res.status(409).json({ message: error.message });
//     }
//   };

// export const createPost=async(req,res)=>{
//     try{
//         const{title,message,tags}=req.body
//         const selectedFile = req.file?.path;
//         const parsedTags = tags ? tags.split(',').map(tag => tag.trim()) : [];
//         console.log(req.body)
//         const newPost =new PostMessage({
//                   title,
//                   message,
//                   tags: parsedTags, // Split tags and trim spaces
//                   selectedFile,
//                   creator: req.userId,
//                   createdAt: new Date().toISOString(),
//                 });
//         await newPost.save()
//         res.status(200).json(newPost)
//     }
//     catch(err){
//         console.log(err)
//         res.status(500).json({message:"Error in creating posts"})
//     }
// }
export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    try {
        await PostMessage.findByIdAndDelete(id);

        res.json({ message: "Post deleted successfully." });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


// export const likePost = async (req, res) => {
//     const { id } = req.params;

//     if (!req.userId) {
//         return res.json({ message: "Unauthenticated" });
//       }

//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
//     const post = await PostMessage.findById(id);

//     const index = post.likes.findIndex((id) => id ===String(req.userId));

//     if (index === -1) {
//       post.likes.push(req.userId);
//     } else {
//       post.likes = post.likes.filter((id) => id !== String(req.userId));
//     }
//     const updatedPost = await PostMessage.findByIdAndUpdate(id, post, { new: true });
//     res.status(200).json(updatedPost);
// }
export const likePost = async (req, res) => {
    const { id } = req.params; // The post ID
    const { userId } = req.body; // The user ID (you may adjust this to your needs)

    try {
        const post = await PostMessage.findById(id);

        // Check if the user already liked the post
        if (post.likes.includes(userId)) {
            // User already liked, remove the like
            post.likes = post.likes.filter(user => user !== userId);
        } else {
            // User hasn't liked, add the like
            post.likes.push(userId);
        }

        const updatedPost = await PostMessage.findByIdAndUpdate(id, post, { new: true });

        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

// Get the number of likes
export const getLikeCount = async (req, res) => {
    const { id } = req.params; // The post ID

    try {
        const post = await PostMessage.findById(id);

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        const likeCount = post.likes.length; // Count of likes
        res.status(200).json({ likeCount });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

export const getUserLikedPosts = async (req, res) => {
    const { userId } = req.params; // Get userId from URL parameters

    try {
        // Find posts where the likes array includes the userId
        const likedPosts = await PostMessage.find({ likes: userId });
        
        res.status(200).json(likedPosts);
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

export const commentPost = async (req, res) => {
    const { id } = req.params;
    const { value } = req.body;

    const post = await PostMessage.findById(id);

    post.comments.push(value);

    const updatedPost = await PostMessage.findByIdAndUpdate(id, post, { new: true });

    res.json(updatedPost);
};

// Get all posts created by a specific user
export const UserPost = async (req, res) => {
    const { userId } = req.params;
    console.log(`Fetching posts for userId: ${userId}`);
  
    try {
      const posts = await PostMessage.find({ creator: userId });
      console.log(`Posts found: ${posts.length}`); // Log the number of posts found
      res.status(200).json(posts);
    } catch (error) {
      console.error("Error fetching posts:", error.message);
      res.status(404).json({ message: error.message });
    }
  };
  


export default router;