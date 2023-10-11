import { Genre } from "../models/Genre.js";
import { Book } from "../models/Book.js";

//Crear un genero
export const newGenre = async (req, res) => {
    try {
        const genre = new Genre({
            name: req.body.name
        })
        genre.save();
        res.status(200).send({ message: "Genre created", genre });
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: 'error when creating the genre', error });
    }
};

//Obtener todos los generos
export const getAllGenres = async (req, res) => {
    try {
        const genres = await Genre.find()
        res.status(200).send(genres);
    } catch (error) {
        res.status(500).send(error);
    }
}

// Agrupar libros por género
// Cuantos libros hay en cada categoria
export const booksByGenre = async (req, res) => {
    const { id } = req.params
    try {
        const books = await Book.find({ genre: id })
        res.status(200).json(
            { message: "En esta categoria hay " + books.length + " libros", books }
        )
    }
    catch (error) {
        res.status(500).send(error)
    }
};

