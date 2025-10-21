import express from 'express';
import path from 'path';
import posts from './routes/posts.js';
import logger from './middleware/logger.js';

const port = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

// logger
app.use(logger);

app.use('/api/posts' , posts);
// app.use(express.static(path.join(__dirname, 'public')));

app.listen(port , () => console.log(`Sever is running on port ${port}`));
