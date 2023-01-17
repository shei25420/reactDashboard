import mongoose from 'mongoose';
import User from "../models/User";

const getAdmins = async (req, res) => {
    try {
        const admins = await User.find({role: "admin"}).select("-password");
        
    } catch (error) {
        res.status(500).json({message: error.message});        
    }
};