import { Genre } from "../models/Genre.js";

// Create genre
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


// Get all genres
export const getAllGenres = async (req, res) => {
    try {
        const genres = await Genre.find()
        res.status(200).send(genres);
    } catch (error) {
        res.status(500).send(error);
    }
}

