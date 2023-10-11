import { Router } from "express";
const viewsRouter = Router();
import { newBook, listBooks, newAuthor } from "../controllers/views.controller.js";


//Lista de libros
viewsRouter.get('/', listBooks);

//Crear un libro
viewsRouter.get('/newBook', newBook);

//Crear un autor
viewsRouter.get('/newAuthor', newAuthor);


export { viewsRouter };