import { Router } from "express";
const authorsRouter = Router();
import { deleteAuthor, getAllAuthors, getAuthor, newAuthor, updateAuthor } from "../controllers/authors.controller.js";

authorsRouter.get('/', getAllAuthors)

authorsRouter.get('/:id', getAuthor)

authorsRouter.post('/', newAuthor)

authorsRouter.put('/:id', updateAuthor)

authorsRouter.delete('/:id', deleteAuthor)

export { authorsRouter };