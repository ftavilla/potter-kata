import {SINGLE_BOOK_PRICE} from "./constants"
import {equals, ifElse} from 'ramda'
import {addBookToNewBatch, addBookToAvailableBatch, hasNoAvailableBatches} from "./book-batches"

const _addBookToBookBatches = (bookBatches, book) => {
    const addBook = ifElse(equals(true), addBookToNewBatch(bookBatches, book), addBookToAvailableBatch(bookBatches, book))
    return addBook(hasNoAvailableBatches(bookBatches, book))
}

const _price = (bookBatches) => {
    const totalCost = bookBatches.reduce((totalCost, batch) => totalCost + batch.books.length * SINGLE_BOOK_PRICE, 0)
    return bookBatches.reduce((total, batch) => batch.applyDiscount(total), totalCost)
}

export const BasketBuilder = (bookBatches = []) => ({
    add: (book) => BasketBuilder([..._addBookToBookBatches(bookBatches, book)]),
    price: () => _price(bookBatches),
});