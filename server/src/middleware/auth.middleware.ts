import express, { Response } from 'express';
import jwt from "jsonwebtoken";

export const verifyToken = async (req: any, res: Response, next: express.NextFunction) => {
    try {
        let token = req.header("Authorization");

        if (!token) {
            return res.status(403).send("Access Denied");
        }

        if (token.startsWith("Bearer ")) {
            token = token.slice(7, token.length).trimStart();
        }

        const verified: string | jwt.JwtPayload = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
};