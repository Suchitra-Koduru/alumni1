import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import UserModal from "../models/user.js";
import Alumni from "../models/alumni.js"

const secret = 'test';

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });
    console.log(oldUser);

    if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" });

    //res.status(200).json(oldUser);
    res.status(200).json({
      token: token,
      login: true,
      id: oldUser._id,
      user: oldUser,
      role: oldUser.role,
      message: "User logged in successfully",
    });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// export const signup = async (req, res) => {
//   const { email, password, firstName, lastName } = req.body;

//   try {
//     const oldUser = await UserModal.findOne({ email });

//     if (oldUser) return res.status(400).json({ message: "User already exists" });

//     const hashedPassword = await bcrypt.hash(password, 12);

 
  
//     //console.log(result);
//     const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );

//     res.status(201).json({ result, token });
//   } catch (error) {
//     res.status(500).json({ message: "Something went wrong" });
    
//     console.log(error);
//   }
// };
// // routes/user.js
// export const signup = async (req, res) => {
//   const { name, email, password } = req.body; // Ensure name is included

//   try {
//       const oldUser = await UserModal.findOne({ email });

//       if (oldUser) {
//           return res.status(400).json({ message: "User already exists" });
//       }

//       const hashedPassword = await bcrypt.hash(password, 12);

//       const result = await UserModal.create({
//           name,
//           email,
//           password: hashedPassword,
//       });

//       const token = jwt.sign({ email: result.email, id: result._id }, secret, { expiresIn: "1h" });

//       res.status(201).json({ result, token });
//   } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: "Something went wrong" });
//   }
// };
export const signup = async (req, res) => {
  const { email, password, firstName, lastName, role } = req.body;
  console.log(req.body);

  try {
    const oldUser = await UserModal.findOne({ email });

    if (oldUser) return res.status(400).json({ message: "User already exists" });
    if (role === 'alumni') {
        // Check if alumni exists in the alumni database
        const alumniExists = await Alumni.findOne({ email });
        if (!alumniExists) {
            return res.status(400).json({ message: 'Alumni not found in the alumni database' });
        }
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserModal.create({ email, password: hashedPassword, name: `${firstName} ${lastName}`,role });

    const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    
    console.log(error);
  }
};


export const getUser = async (req, res) => {
  try {
    const user = await UserModal.findById(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

