// alumni.model.js
import mongoose from 'mongoose';

// Define Alumni Schema
const alumniSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    graduationYear: {
        type: Number,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
});

// Create Alumni Model
const Alumni = mongoose.model('Alumni', alumniSchema);
export default Alumni;
