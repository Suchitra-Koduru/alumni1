import express from 'express';

import { getPosts, getPostsBySearch, getPost, createPost, updatePost, likePost, getLikeCount,getUserLikedPosts, commentPost, deletePost, UserPost } from '../controllers/posts.js';

const router = express.Router();
import multer from 'multer';
const upload = multer({ dest: './uploads/' }); 

import auth from "../middleware/auth.js";

router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.get('/:id', getPost);
router.get('/user/:userId',UserPost);

router.post('/', upload.single('selectedFile'),createPost);
router.patch('/:id', upload.single('selectedFile'), updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);
router.get('/:id/likeCount', getLikeCount);
router.get('/:userId/likedPosts', getUserLikedPosts);
router.post('/:id/commentPost', commentPost);
export default router;