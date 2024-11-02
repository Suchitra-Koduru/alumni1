// routes/alumniRoutes.js
import express from 'express';
import { addAlumni,getAlumni } from '../controllers/alumni.js';

const router = express.Router();

// Route to add a new alumni
router.post('/add', addAlumni);
router.get('/get',getAlumni);

export default router;
