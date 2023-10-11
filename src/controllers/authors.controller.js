import { Author } from "../models/Author.js";

// Crear un autor
export const newAuthor = async (req, res) => {
    try {
        const author = new Author({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            biography: req.body.biography
        })
        author.save();
        res.status(200).send({ message: "Author created", author });
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: 'error when creating the author', error });
    }
};


// Actualizar un autor
export const updateAuthor = async (req, res) => {
    const authorId = req.params.id
    const { name, surname, biography } = req.body
    try {
        const updateAuthor = await Author.findByIdAndUpdate(authorId,
        { name, surname, biography }, { new: true, runValidators: true });
        
        if (!updateAuthor) {
            return res.status(404).json({ message: "Author not found" });
        }
        res.status(200).json({ message: "Author updated", updateAuthor });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'error when updating the author', error });
    }
};


// Obtener todos los autores
export const getAllAuthors = async (req, res) => {
    try {
        const authors = await Author.find();
        res.status(200).json(authors);
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: 'error when getting the authors', error });
    }
};


// Obtener un autor por su ID
export const getAuthor = async (req, res) => {
    const authorId = req.params.id
    try {
        const author = await Author.findById(authorId);
        if (!author) {
            return res.status(404).json({ message: "Author not found" });
        }
        res.status(200).json(author);
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: 'error when getting the author', error });
    }
};


// Eliminar un autor
export const deleteAuthor = async (req, res) => {
    const authorId = req.params.id
    try {
        const deleteAuthor = await Author.findByIdAndDelete(authorId);

        if (!deleteAuthor) {
            return res.status(404).json({ message: "Author not found" });
        }
        res.status(200).send({ message: "Author deleted", deleteAuthor });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'error when deleting the author', error });
    }
};