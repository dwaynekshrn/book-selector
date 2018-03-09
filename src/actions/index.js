export function selectBook(book){
    // selectBook returns the book that was selected
    return {
       type: 'BOOK_SELECTED',
       payload: book
    }
}