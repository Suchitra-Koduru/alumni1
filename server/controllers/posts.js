import express from 'express';
import mongoose from 'mongoose';

import PostMessage from '../models/postMessage.js';

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


export const createPost = async (req, res) => {
    const post = req.body;
    console.log(post)
    const newPostMessage = new PostMessage({ 
        ...post, 
        creator: req.userId, 
        createdAt: new Date().toISOString() 
    });

    try {
        await newPostMessage.save();
        res.status(201).json(newPostMessage);
    } catch (error) {
        console.log(error);
        res.status(409).json({ message: error.message });
    }
}

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


export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!req.userId) {
        return res.json({ message: "Unauthenticated" });
      }

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const post = await PostMessage.findById(id);

    const index = post.likes.findIndex((id) => id ===String(req.userId));

    if (index === -1) {
      post.likes.push(req.userId);
    } else {
      post.likes = post.likes.filter((id) => id !== String(req.userId));
    }
    const updatedPost = await PostMessage.findByIdAndUpdate(id, post, { new: true });
    res.status(200).json(updatedPost);
}

export const commentPost = async (req, res) => {
    const { id } = req.params;
    const { value } = req.body;

    const post = await PostMessage.findById(id);

    post.comments.push(value);

    const updatedPost = await PostMessage.findByIdAndUpdate(id, post, { new: true });

    res.json(updatedPost);
};

export default router;