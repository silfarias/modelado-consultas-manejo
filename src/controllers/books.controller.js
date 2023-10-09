import { Book } from "../models/Book.js";

// Create book
export const newBook = async (req, res) => {
  try {
    const { title, yearPublication, genre, author } = req.body;

    if (!req.files || !(req.files).length === 0) {
      return res.status(400).json({ message: 'No coverPage file was uploaded' });
    }

    if(!genre || !author) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const file = req.files.archivo;
    const path = `public/uploads/${file.name}`;

    file.mv(path, async (err) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: 'Error when uploading the cover page', error: err });
      }

      const newBook = new Book({
        title,
        yearPublication,
        coverPage: path,
        genre,
        author
      });

      await newBook.save();

      res.status(201).json({ message: "Book created successfully", newBook });
    });  

  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'error when creating the book', error })
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
        
        if (!books) {
          return res.status(404).json({ message: "Books not found" });
        }

        res.status(200).json(books);
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

export const listOfBooks = async (req, res) => {
  try {
    const books = await Book.find()
      .populate('genre', 'name') 
      .populate('author', 'firstName lastName');
    const list = books.map((book) => ({
      title: book.title,
      genre: book.genre.name, 
      author: `${book.author.firstName} ${book.author.lastName}`
    }));

    res.status(200).json(list);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error al obtener los libros', error });
  }
};
