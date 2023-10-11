//importaciones
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import path from 'node:path';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import 'dotenv/config';
import 'ejs';


//Database
import { connectDB } from './src/config/database.js';

//Routes
import { authorsRouter } from './src/routes/authors.routes.js';
import { booksRouter } from './src/routes/books.routes.js';
import { genresRouter } from './src/routes/genres.routes.js';
import { viewsRouter } from './src/routes/views.routes.js';
import { fileRouter } from './src/routes/file.routes.js';


//Schemas
import { Author } from './src/models/Author.js';
import { Genre } from './src/models/Genre.js';
import { Book } from './src/models/Book.js';


const app = express();

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST']
  }));
app.use(morgan('tiny'));
app.use(helmet());
app.use(express.json())
app.use(fileUpload(
    {
        createParentPath: true,
        limits: { fileSize: 20 * 1024 * 1024 },
        abortOnLimit: true,
        responseOnLimit: "File is too large."
    }
));

app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs')
app.use(express.static('public'));

const port = process.env.PORT || 3000
    
    
app.use('/api/authors', authorsRouter)
app.use('/api/genres', genresRouter)
app.use('/api/books', booksRouter)
app.use('/', viewsRouter)
app.use('/', fileRouter)

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
    connectDB();
});