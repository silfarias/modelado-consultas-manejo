const formNewBook = document.querySelector('formNewBook');

formNewBook.addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = document.querySelector('#title').value;
    const yearPublication = document.querySelector('#yearPublication').value;
    const coverPage = document.querySelector('#coverPage').value;
    const genre = document.querySelector('#genre').value;
    const author = document.querySelector('#author').value;


    const book = {
        title,
        yearPublication,
        coverPage,
        genre,
        author
    };

    const response = await fetch('http://localhost:5000/api/books', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Type': 'multipart/form-data',
        },
        body: JSON.stringify(book)
    })

    const data = await response.json();

    alert(data.message)
    window.location.href = "/"

})

