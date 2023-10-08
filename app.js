import express from 'express';
import morgan from 'morgan';
import path from 'node:path';
import fileUpload from 'express-fileupload';
import 'dotenv/config';
//import 'ejs'


//Routes
import { connectDB } from './src/config/database.js';

import { authorsRouter } from './src/routes/authors.routes.js';
import { booksRouter } from './src/routes/books.routes.js';
import { genresRouter } from './src/routes/genres.routes.js';
import { allRouter } from './src/routes/all.routes.js';


//Schemas
import { Author } from './src/models/Author.js';
import { Genre } from './src/models/Genre.js';
import { Book } from './src/models/Book.js';
import { fileRouter } from './src/routes/file.routes.js';


const app = express();


app.use(morgan('tiny'));
app.use(express.json())
app.use(fileUpload(
    {
        createParentPath: true,
        limits: { fileSize: 20 * 1024 * 1024 },
        abortOnLimit: true,
        responseOnLimit: "File is too large."
    }
));
    
//app.use('views', 'ejs')
//app.set('views', path.join(__dirname, 'views'));

const port = process.env.PORT || 3000
    
    
app.use('/', fileRouter)
app.use('/api/authors', authorsRouter)
app.use('/api/genres', genresRouter)
app.use('/api/books', booksRouter)
app.use('/', allRouter )

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
    connectDB();
});