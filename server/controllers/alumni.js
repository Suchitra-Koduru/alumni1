import Alumni from '../models/alumni.js';

export const addAlumni = async (req, res) => {
    const { name, email, graduationYear, department } = req.body;

    try {
        // Check if alumni already exists
        const existingAlumni = await Alumni.findOne({ email });
        if (existingAlumni) {
            return res.status(400).json({ message: 'Alumni with this email already exists' });
        }

        // Create a new alumni instance
        const newAlumni = new Alumni({
            name,
            email,
            graduationYear,
            department,
        });

        // Save to the database
        await newAlumni.save();

        res.status(201).json({ message: 'Alumni added successfully', alumni: newAlumni });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const getAlumni=async(req,res)=>{
    try {
        const alumni = await Alumni.find({});
        res.status(200).json(alumni);
    } catch (error) {
        console.error("Error fetching alumni details:", error);
        res.status(500).json({ message: 'Error fetching alumni details' });
    }
}