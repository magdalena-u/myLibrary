let myLibrary = [];
const btnAdd = document.querySelector('.btn_add');
const btnNew = document.querySelector('.btn_new_book')
const tab = document.querySelector('.read_table');
const form = document.querySelector('form');


//constructor
function book(title, author) {
    this.title = title;
    this.author = author;
}

// add new element of array to read_table

function addTab() {
    let i = myLibrary.length;
    const time = new Date;
    const day = time.getDate();
    const month = time.getMonth();
    const year = time.getFullYear();
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    let div3 = document.createElement('div');
    let div4 = document.createElement('div');
    let div5 = document.createElement('div');
    let div6 = document.createElement('div');
    tab.appendChild(div1);
    tab.appendChild(div2);
    tab.appendChild(div3);
    tab.appendChild(div4);
    tab.appendChild(div5);
    tab.appendChild(div6);
    div1.innerHTML = i;
    div2.innerHTML = myLibrary[i - 1].title;
    div3.innerHTML = myLibrary[i - 1].author;
    div4.innerHTML = `${day}/${month}/${year}`;
    div6.innerHTML = 'x';

}

//show form to add new book
function showAdd(e) {
    e.preventDefault();
    form.classList.add('form_active');
}

//add new book to array myLibrary
function addBook(e) {
    e.preventDefault();
    let titleAnswer = document.getElementById('title').value;
    let authorAnswer = document.getElementById('author').value;
    let newBook = new book(titleAnswer, authorAnswer);
    form.classList.remove('form_active');
    myLibrary.push(newBook)
    addTab()
}


btnNew.addEventListener('click', showAdd);
btnAdd.addEventListener('click', addBook);