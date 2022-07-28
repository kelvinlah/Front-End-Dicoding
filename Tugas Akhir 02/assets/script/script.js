const form = document.querySelector('#form');
const addButton = document.querySelector('#add');
const closeButton = document.querySelector('#close-button');
const inputs = document.querySelectorAll('.form-input');
const books = [];
const RENDER_EVENT = 'render-book';
const emptyBookList = document.getElementById('empty'); 

function addBook(){
    const bookTitle = document.getElementById('book-title').value;
    const bookAuthor = document.getElementById('book-author').value;
    const year = document.getElementById('year-release').value;

    const generatedID = generateId();
    const bookObject = generateBookObject(generatedID, bookTitle, bookAuthor, year, false, false);
    books.push(bookObject);

    document.dispatchEvent(new Event(RENDER_EVENT));
}


function createShelf(shelfCount){
    console.log('Active')
    const shelfList = document.createElement('div');
    shelfList.classList.add('shelf');
    shelfList.setAttribute('id', `shelf-${shelfCount}`);

    return shelfList;
}

function generateId() {
    return +new Date();
}
   
function generateBookObject(id, title, author, year, isRead, isComplete) {
    return {
        id,
        title,
        author,
        year,
        isRead,
        isComplete
    }
}

function makeBook(bookObject) {
    const bookTitle = document.createElement('h2');
    bookTitle.innerText = bookObject.title;
      
    const bookAuthor = document.createElement('p');
    bookAuthor.innerText = bookObject.author;
    bookAuthor.classList.add('book-author');

    const bookYear = document.createElement('p');
    bookYear.innerText = bookObject.year;
   
    const bookContainer = document.createElement('div');
    bookContainer.classList.add('book-container', 'card');
    bookContainer.append(bookTitle, bookAuthor, bookYear);
   
    const container = document.createElement('div');
    container.classList.add('wrapper');
    container.append(bookContainer);
    container.setAttribute('id', `book-${bookObject.id}`);

    if (bookObject.isRead) {
    /*  const undoButton = document.createElement('button');
        undoButton.classList.add('undo-button');
        undoButton.innerText = 'Batal Baca'

        undoButton.addEventListener('click', function () {
        undoTaskFromCompleted(bookObject.id);
        });

        const trashButton = document.createElement('button');
        trashButton.classList.add('trash-button');
     
        trashButton.addEventListener('click', function () {
          removeTaskFromCompleted(bookObject.id);
        });

        bookContainer.append(undoButton, trashButton); */
    } else{ 
        const readButton = document.createElement('button');
        readButton.classList.add('read-button');
        readButton.innerText = 'Baca';

        readButton.addEventListener('click', function () {
            addBookToShelf(bookObject.id);
        });
        
        bookContainer.append(readButton);
    }
   
    return container;
}

function addBookToShelf (bookObjectId) {
    const bookTarget = findTodo(bookObjectId);
   
    if (bookTarget == null) return;
   
    bookTarget.isRead = true;
    document.dispatchEvent(new Event(RENDER_EVENT));
}

function findTodo(bookId) {
    for (const bookItem of books) {
        if (bookItem.id === bookId) {
            return bookItem;
        }
    }
    return null;
}