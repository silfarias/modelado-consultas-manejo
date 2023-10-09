import { Router } from "express";
const allRouter = Router();
import { newBook, listBooks, newAuthor } from "../controllers/views.controller.js";


allRouter.get('/', listBooks);
allRouter.get('/newBook', newBook);
allRouter.get('/newAuthor', newAuthor);


export { allRouter };