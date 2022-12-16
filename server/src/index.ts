import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';
import multer from 'multer';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

import { register } from './controllers/auth.controller';
import authRoutes from './routes/auth.routes';

import userRoutes from './routes/users.routes';
import postRoutes from './routes/posts.routes';



/* MIDDLEWARE CONFIGS */
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(bodyParser.json({ limit: '30mb', extended: true } as any));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

/* FILE STORAGE */
const storage: multer.StorageEngine = multer.diskStorage({
  destination: (req: express.Request, file: Express.Multer.File, cb: any) => {
    cb(null, 'public/assets');
  },
  filename: (req: express.Request, file: Express.Multer.File, cb: any) => {
    cb(null, file.originalname);
  },
});
const upload: multer.Multer = multer({ storage });

/* ROUTES WITH FILES */
app.post("/auth/register", upload.single("picture"), register);
// app.post("/posts", verifyToken, upload.single("picture"), createPost);

/* ROUTES */
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

/* MONGOOSE CONFIG */
const PORT: string | number = process.env.PORT || 8080;
mongoose
  .set('strictQuery', true)
  .connect(process.env.MONGO_URL as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then(() => {
    app.listen(PORT, () => console.log(`Server is running at Port: ${PORT}`));

    /* ADD DATA ONE TIME */
    // User.insertMany(users);
    // Post.insertMany(posts);
  })
  .catch((error) => console.log(`${error} Failed to connect to Server`));

