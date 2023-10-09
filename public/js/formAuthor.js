const formNewAuthor = document.querySelector('formNewAuthor');

formNewBook.addEventListener('submit', async (e) => {
    e.preventDefault();

    const firstName = document.querySelector('#firstName').value;
    const lastName = document.querySelector('#lastName').value; 
    const biography = document.querySelector('#biography').value;


    const author = {
        firstName,
        lastName,
        biography
    };

    const response = await fetch('http://localhost:5000/api/authors', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(author)
    })

    const data = await response.json();

    alert(data.message)
    window.location.href = "/"

})
