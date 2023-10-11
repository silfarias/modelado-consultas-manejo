import { Router } from "express";
import { booksByGenre, getAllGenres, newGenre } from "../controllers/genres.controllers.js";
const genresRouter = Router();


//Obtener todos los generos
genresRouter.get("/", getAllGenres);

//Crear un genero
genresRouter.post("/", newGenre);

//Cuantos libros hay por género
genresRouter.get('/booksofgenre/:id', booksByGenre);

export { genresRouter };