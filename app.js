document.getElementById('button-addon2').addEventListener('click', function () {
    const searchText = document.getElementById('search-text').value;

    if (searchText === '') {
        const error = document.getElementById('error-msg');
        error.classList.remove("d-none");
    }
    else {
        const error = document.getElementById('error-msg');
        error.classList.add("d-none");
        fetch(`http://openlibrary.org/search.json?q=${searchText}`)
            .then(response => response.json())
            .then(json => seeList(json.docs))
    }
})
const seeList = (books) => {
    const booksFound = document.getElementById('books-found');
    booksFound.innerHTML = '';
    const quantity = document.getElementById('quantity-msg');
    quantity.innerHTML = `The total search results are ${books.length}`
    quantity.classList.remove("d-none");
    // for each function 
    books.forEach(book => {
        const div = document.createElement('div');
        div.classList.add("col");
        div.innerHTML = `
            <div class="card shadow p-3 m-2">
                <img class="img-fluid w-100" src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg">
                <h3 class="text-center" >${book.title}</h3>
                <h5 class="text-center">Author: ${book.author_name}</h5>
                <h5 class="text-center">First Publish: ${book.first_publish_year}</h5>
            </div>`
        booksFound.appendChild(div);
    });
    // for (const book of books) 
}