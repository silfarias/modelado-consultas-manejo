import { Router } from "express";
import { booksByGenre, getAllGenres, newGenre } from "../controllers/genres.controllers.js";
const genresRouter = Router();

//obtain all literary genres
genresRouter.get("/", getAllGenres);

//add new literary genre
genresRouter.post("/", newGenre);


genresRouter.get('/booksofgenre/:id', booksByGenre);

export { genresRouter };