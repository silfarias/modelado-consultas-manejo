import { Router } from "express";
import { getAllGenres, newGenre } from "../controllers/genres.controllers.js";
const genresRouter = Router();

//obtain all literary genres
genresRouter.get("/Allgenres", getAllGenres);

//add new literary genre
genresRouter.post("/newGenre", newGenre);

export { genresRouter };