import { Router } from "express";
const authorsRouter = Router();
import { deleteAuthor, getAllAuthors, getAuthor, newAuthor, updateAuthor } from "../controllers/authors.controller.js";


//Obtener todos los autores
authorsRouter.get('/', getAllAuthors)

//Obtener un autor por su ID
authorsRouter.get('/:id', getAuthor)

//Crear un autor
authorsRouter.post('/', newAuthor)

//Actualizar un autor
authorsRouter.put('/:id', updateAuthor)

//Eliminar un autor
authorsRouter.delete('/:id', deleteAuthor)

export { authorsRouter };