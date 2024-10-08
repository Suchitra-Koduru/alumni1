import express from 'express';

import { getPosts, getPostsBySearch, getPost, createPost, updatePost, likePost, commentPost, deletePost } from '../controllers/posts.js';

const router = express.Router();
import multer from 'multer';
const upload = multer({ dest: './uploads/' }); 

import auth from "../middleware/auth.js";

router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.get('/:id', getPost);

router.post('/', upload.single('selectedFile'),createPost);
router.patch('/:id', upload.single('selectedFile'), updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);
router.post('/:id/commentPost', commentPost);
export default router;