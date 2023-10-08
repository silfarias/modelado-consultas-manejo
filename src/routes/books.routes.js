import { Router } from "express";
const booksRouter = Router();
import { deleteBook, getAllBooks, getBook, newBook, updateBook } from "../controllers/books.controller.js";

booksRouter.get('/', getAllBooks);

booksRouter.get('/:id', getBook);

booksRouter.post("/newBook", newBook);

booksRouter.put('/:id', updateBook);

booksRouter.delete('/:id', deleteBook);


export { booksRouter };