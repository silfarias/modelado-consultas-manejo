import { Book } from "../models/Book.js";
import { Author } from "../models/Author.js";
import { Genre } from "../models/Genre.js";


// Create book
export const newBook = async (req, res) => {
    try {
      const { title, yearPublication, genreId, authorId } = req.body;
  
      if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send("No files were uploaded");
      }
  
      // El nombre 'coverPage' debe coincidir con el nombre del campo en el formulario
      const coverPage = req.files.coverPage;
  
      const genre = await Genre.findById(genreId);
      const author = await Author.findById(authorId);
  
      if (!genre || !author) {
        return res.status(404).json({ message: 'Genre or Author not found' });
      }
  
      // Ruta donde se guardará la imagen de portada
      const uploadPath = `./public/uploads/${coverPage.name}`;
  
      // Mueve la imagen a la carpeta de destino
      coverPage.mv(uploadPath, (err) => {
        if (err) {
          console.log(err);
          return res.status(500).json({ message: 'Error when uploading the cover page', error: err });
        }
  
        // Crea un nuevo libro en la base de datos
        const newBook = new Book({
          title,
          yearPublication,
          coverPage: uploadPath, // Establece la ruta de la imagen
          genre,
          author,
        });
  
        // Guarda el libro en la base de datos
        newBook.save((err, savedBook) => {
          if (err) {
            console.log(err);
            return res.status(500).json({ message: 'Error when creating the book', error: err });
          }
  
          res.status(200).json({ message: "Book created successfully", newBook: savedBook });
        });
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Error when creating the book', error: error });
    }
};

// Delete book
export const deleteBook = async (req, res) => {
    const bookId = req.params.id
    try {
        const deleteBook = await Book.findByIdAndDelete(bookId);
        if (!deleteBook) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json({ message: "Book deleted" });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'error when deleting the book', error });
    }
}

export const updateBook = async (req, res) => {
    const bookId = req.params.id
    const { title, yearPublication, coverPage, genre, author } = req.body
    try {
        const updateBook = await Book.findByIdAndUpdate(bookId,
        { title, yearPublication, coverPage, genre, author }, { new: true, runValidators: true });
        
        if (!updateBook) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json({ message: "Book updated", updateBook });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'error when updating the book', error });
    }
}

// Get all books
export const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);

        if (!books) {
            return res.status(404).json({ message: "Books not found" });
        }
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: 'error when getting the books', error });
    }
};

// Get book
export const getBook = async (req, res) => {
    const bookId = req.params.id
    try {
        const book = await Book.findById(bookId);
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json(book);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'error when getting the book', error });
    }
}