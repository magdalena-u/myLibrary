let myLibrary = [];
const btnAdd = document.querySelector('.btn_add');
const btnNew = document.querySelector('.btn_new_book')
const tab = document.querySelector('.read_table');
const form = document.querySelector('form');
let deleteX = document.querySelector('.fa-times');

//constructor
function book(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
    //date
    const time = new Date;
    const day = time.getDate();
    const month = time.getMonth();
    const year = time.getFullYear();
    this.date = `${day}/${month}/${year}`;

}

// add new element of array to read_table

function addTab() {
    let i = myLibrary.length;
    let divMain = document.createElement('div');
    // divMain.id = i - 1;
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    let div3 = document.createElement('div');
    let div4 = document.createElement('div');
    let div5 = document.createElement('div');
    tab.appendChild(divMain);
    divMain.classList.add('read_table_row');
    divMain.appendChild(div1);
    divMain.appendChild(div2);
    divMain.appendChild(div3);
    divMain.appendChild(div4);
    divMain.appendChild(div5);
    div1.innerHTML = myLibrary[i - 1].title;
    div2.innerHTML = myLibrary[i - 1].author;
    div3.innerHTML = myLibrary[i - 1].date;
    //read unread
    if (myLibrary[i - 1].read === "1") {
        div4.classList.add('status_checked')
    } else if (myLibrary[i - 1].read === "2") {
        div4.classList.add('status_times')
    }
    div4.classList.add('status_change');
    const stChange = document.querySelectorAll('.status_change');
    stChange.forEach(change => change.addEventListener('click', changeStatus));
    //bin
    div5.classList.add('bin');
    const bins = document.querySelectorAll('.bin');
    bins.forEach(bin => bin.addEventListener('click', removeBook))
}

//show form to add new book
function showAdd(e) {
    e.preventDefault();
    form.classList.add('form_active');
}

//hide form to add new book
function hideAdd() {
    form.classList.remove('form_active');
}

//add new book to array myLibrary
function addBook(e) {
    e.preventDefault();
    let titleAnswer = document.getElementById('title').value;
    let authorAnswer = document.getElementById('author').value;
    let statusAnswer = document.getElementById('status').value;

    if (titleAnswer === "" || authorAnswer === "" || statusAnswer === "") {
        window.alert('Please fulfill form')
    } else {
        let newBook = new book(titleAnswer, authorAnswer, statusAnswer);
        form.classList.remove('form_active');
        myLibrary.push(newBook)
        addTab()
    }
}

//remove book from table
function removeBook(e) {
    e.target.parentNode.remove();
    // let index = e.target.parentNode.getAttribute('id');
    // myLibrary.splice(index, 1);
}

function changeStatus() {
    let flag = true;
    if (this.classList.contains('status_checked')) {
        flag = true;
    } else if (this.classList.contains('status_times')) {
        flag = false;
    }
    if (flag === true) {
        this.classList.remove('status_checked');
        this.classList.add('status_times');
    } else if (flag === false) {
        this.classList.remove('status_times');
        this.classList.add('status_checked');
    }
}

btnNew.addEventListener('click', showAdd);
btnAdd.addEventListener('click', addBook);
deleteX.addEventListener('click', hideAdd);


//add assessment of book
// let starOne = document.querySelector('.star1');
// let starTwo = document.querySelector('.star2');
// let starThree = document.querySelector('.star3');
// let starFour = document.querySelector('.star4');
// let starFive = document.querySelector('.star5');

// let stars = [
//     ...document.querySelectorAll('.fa-star')
// ];


// for (let i = 0; i < stars.length; i++) {
//     stars[i].addEventListener('click', function () {
//         if (i === 0) {
//             stars[0].classList.add('activeStar')
//         } else if (i === 1) {
//             stars[0].classList.add('activeStar')
//             stars[1].classList.add('activeStar')
//         }
//     })
// }

// let stars = [...document.querySelectorAll('.fa-star')];

// function addStar(e) {
//     let index = e.target.getAttribute('id');
//     console.log(index)
//     return index
// }

// function addStarOne() {
//     let rateAnswer = 1;
//     return rateAnswer;
// }

// function addStar(e) {
//     console.log(e.target.classList.add('activeStar'))

//     this.classList.add('activeStar');
//     for (let i = 0; i < stars.length; i++) {
//         console.log(this.star[i])
//     }
// }

// starOne.addEventListener('click', addStarOne)


// stars.forEach(star => star.addEventListener('click', addStar))