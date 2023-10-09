const obtenerDatos = async () => {
    const data = await fetch('http://localhost:5000/api/books', {
        method: 'GET'
    });
    const books = await data.json();
    return books;
}

const mostrarLibros = (books, tablaElement) => {
    let registros = '';
    books.forEach(book => {
        registros += `
            <tr>
                <td>${book.title}</td>
                <td>${book.yearPublication}</td>
                <td>${book.genre}</td>
                <td>${book.author}</td>
            </tr>
        `
    })

    tablaElement.innerHTML = registros;
    
}

document.addEventListener('DOMContentLoaded', async () => {
    const tbody = document.querySelector('#listadoLibros');
    const books = await obtenerDatos() // undefined si no obtenerDatos no retorna nada
    mostrarLibros(books, tbody)

});