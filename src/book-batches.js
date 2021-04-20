import {BookBatch, SINGLE_BOOK_PRICE} from "./book-batch"

const getAvailableBatchToUpdate = (acc, batch) => {
    if (!acc) return {...batch}
    if (acc.biggestBatchPrice - acc.smallestBatchPrice > batch.biggestBatchPrice - batch.smallestBatchPrice) return {...batch}
    if (acc.biggestBatchPrice - acc.smallestBatchPrice < batch.biggestBatchPrice - batch.smallestBatchPrice) return {...acc}
    return {...acc}
}

const extractAvailableBatchesByBook = (bookBatches, book) => bookBatches.filter(batch => !batch.books.includes(book))

export class BookBatches {
    constructor(bookBatches) {
        this.bookBatches = bookBatches || []
    }

    get() {
        return this.bookBatches
    }

    set(bookBatches) {
        this.bookBatches = bookBatches
    }

    getAvailableBatchesFor(book) {
        return extractAvailableBatchesByBook(this.bookBatches, book)
    }

    getBatchToUpdate(book) {
        return extractAvailableBatchesByBook(this.bookBatches, book).reduce(getAvailableBatchToUpdate)
    }

    add(book) {
        const batchToUpdate = this.getBatchToUpdate(book)
        this.bookBatches.splice(batchToUpdate.id, 1, new BookBatch(batchToUpdate.id,[...batchToUpdate.books, book]))
    }

    getPrice() {
        const cost = this.bookBatches.reduce((acc, batch) => acc + batch.books.length * SINGLE_BOOK_PRICE, 0)
        return this.bookBatches.reduce((acc, batch) => batch.price(acc, batch.books.length), cost)
    }
}