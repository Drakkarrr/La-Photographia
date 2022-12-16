import express from 'express';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.model";

/* REGISTER USER */
export const register = async (req: express.Request, res: express.Response): Promise<void> => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            picturePath,
            friends,
            location,
            occupation,
        } = req.body;

        const salt: string = await bcrypt.genSalt();
        const passwordHash: string = await bcrypt.hash(password, salt);

        const newUser: any = new User({
            firstName,
            lastName,
            email,
            password: passwordHash,
            picturePath,
            friends,
            location,
            occupation,
            viewedProfile: Math.floor(Math.random() * 1000),
            impressions: Math.floor(Math.random() * 1000),
        });
        const savedUser: any = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
};

/* LOGGING IN */
export const login = async (req: express.Request, res: express.Response): Promise<unknown> => {
    try {
        const { email, password } = req.body as { email: string; password: string }
        const user: unknown | any = await User.findOne({ email: email });
        if (!user) return res.status(400).json({ msg: "User does not exist. " });

        const isMatch: boolean = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: "Invalid credentials." });

        const token: string = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string);
        delete user.password;
        res.status(200).json({ token, user });
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
};