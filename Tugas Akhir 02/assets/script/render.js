document.addEventListener(RENDER_EVENT, function () {
    // console.log(books);
    emptyBookList.setAttribute('hidden', 'true')
    let bookCount = 1;
    let shelfCount = 1;
    const shelfs = [];

    const bookList = document.getElementById('book-list-container');
    bookList.innerHTML = '';
    shelfList = createShelf(shelfCount);

    const bookReading = document.getElementById('reading-book');
    bookList.innerHTML = '';

    for (const bookItem of books) {
        if(bookCount % 4 == 1 && bookCount > 4){
            shelfCount++;
            shelfList = createShelf(shelfCount);
            const bookElement = makeBook(bookItem);
            shelfList.append(bookElement);
            shelfs.push(shelfList);
        }else {
            const bookElement = makeBook(bookItem);
            shelfList.append(bookElement);
            shelfs.push(shelfList);
        }
        bookCount++;

        if(bookItem.isRead){
            
        }
    }

    for (const shelfItem of shelfs) {
        bookList.append(shelfItem);
    }
});