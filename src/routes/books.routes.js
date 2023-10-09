import { Router } from "express";
const booksRouter = Router();
import { deleteBook, getAllBooks, getBook, listOfBooks, newBook, updateBook } from "../controllers/books.controller.js";

booksRouter.get('/', getAllBooks )

booksRouter.get('/:id', getBook );

booksRouter.get('/listadoLibros', listOfBooks );

booksRouter.post('/', newBook );

booksRouter.put('/:id', updateBook );

booksRouter.delete('/:id', deleteBook );


export { booksRouter };