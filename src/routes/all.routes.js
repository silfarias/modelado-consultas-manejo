import { Router } from "express";
const allRouter = Router();
import { Book } from "../models/Book.js";
import { home } from "../controllers/views.controller.js";
import { Author } from "../models/Author.js";
import { Genre } from "../models/Genre.js";


allRouter.get('/', home)

allRouter.post('/newBook', async (req, res) => {
    try {
        const book = await Book.create({
            title: 'La vuelta al mundo en 80 dias',
            yearPublication: 1988,
            coverPage: '/public/uploads/julio-verne-la-vuelta-al-mundo-en-80-dias-edicion-actualizada-ilustrada-y-adaptada.jpg',
            genre: {
                _id: "6520b9bab7c05aac0d42915e"
            },
            author: {
                _id: "6521c8ecfc6e20670994439d"
            }
        })    
        await book.save();
        res.status(200).send({message: 'Libro creado correctamente', book})
    } catch (error) {
        res.status(400).send(error)
    }
});

export { allRouter };