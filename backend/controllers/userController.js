import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { setAuthCookie } from '../utils/cookieUtils.js';
import User from '../model/userSchema.js';

export const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body; 
        
        const userExists = await User.findOne({ email });
        if (userExists) return res.status(400).json({ message: "User already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);
        
        await User.create({ 
            name, 
            email, 
            password: hashedPassword 
        });

        res.status(201).json({ 
            success: true, 
            message: "User created successfully" 
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

        setAuthCookie(res, token);

        res.status(200).json({ 
            success: true, 
            message: `Logged in succesfully, ${user.name}`,
            user: { 
                id: user._id, 
                name: user.name, 
                email: user.email 
            } 
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};