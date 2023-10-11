import { Router } from "express";
const booksRouter = Router();
import { deleteBook, getAllBooks, getBook, listOfBooks, newBook, updateBook } from "../controllers/books.controller.js";


//Listar libros por su genero, titulo, autor
booksRouter.get('/', listOfBooks );

//Obtener todos los libros
booksRouter.get('/getbooks', getAllBooks )

//Obtener un libro por su ID
booksRouter.get('/:id', getBook );

//Crear un libro
booksRouter.post('/', newBook );

//Actualizar un libro
booksRouter.put('/:id', updateBook );

//Eliminar un libro
booksRouter.delete('/:id', deleteBook );


export { booksRouter };