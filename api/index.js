import dotenv from 'dotenv';
dotenv.config()
import express from 'express';
import userRouter from './routes/users.js';
import postRouter from './routes/posts.js';
import likeRouter from './routes/likes.js';
import commentRouter from './routes/comments.js';
import authRouter from './routes/auth.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../social-media-client/public/upload')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname)
    }
  })
  
const upload = multer({ storage: storage })


const PORT = process.env.PORT || 4000;
const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Credentials', true); // Allow cookies
    next();
})
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5000',
}));
app.use(cookieParser());

app.post('/api/upload', upload.single('image'), (req, res) => {
    const file = req.file;
    res.status(200).json(file.filename);
})
app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/posts', postRouter);
app.use('/api/likes', likeRouter);
app.use('/api/comments', commentRouter);


app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});
