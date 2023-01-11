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

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/posts', postRouter);
app.use('/api/likes', likeRouter);
app.use('/api/comments', commentRouter);

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});
