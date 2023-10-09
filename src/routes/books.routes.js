import { Router } from "express";
const booksRouter = Router();
import { createBook, deleteBook, getAllBooks, getBook, listOfBooks, newBook, updateBook } from "../controllers/books.controller.js";

booksRouter.get('/', getAllBooks)

booksRouter.get('/:id', getBook);

booksRouter.get('/listado', listOfBooks);

booksRouter.post('/', newBook);

booksRouter.put('/:id', updateBook);

booksRouter.delete('/:id', deleteBook);


export { booksRouter };