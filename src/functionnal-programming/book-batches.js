import {BatchBuilder} from "./book-batch"
import {pureReplace} from "./helpers"

const _extractAvailableBatchesByBook = (bookBatches, book) => bookBatches.filter(batch => !batch.books.includes(book))

const _getAvailableBatchToUpdate = (acc, batch) => {
    if (!acc) return {...batch}
    if (acc.biggestBatchPrice - acc.smallestBatchPrice > batch.biggestBatchPrice - batch.smallestBatchPrice) return {...batch}
    if (acc.biggestBatchPrice - acc.smallestBatchPrice < batch.biggestBatchPrice - batch.smallestBatchPrice) return {...acc}
    return {...acc}
}

const _getBatchToUpdate = (bookBatches, book) => _extractAvailableBatchesByBook(bookBatches, book).reduce(_getAvailableBatchToUpdate)

const hasNoAvailableBatches = (bookBatches, book) => {
    const availableBatches = _extractAvailableBatchesByBook(bookBatches, book)
    return availableBatches.length === 0
}

const addBookToNewBatch = (bookBatches, book) => () => {
    const newBatch = BatchBuilder()
        .withBooks([book])
        .withId(bookBatches.length)
        .build()
    return [...bookBatches, newBatch]
}

const addBookToAvailableBatch = (bookBatches, book) => () => {
    const batchToUpdate = _getBatchToUpdate(bookBatches, book)
    const updatedBatch = BatchBuilder()
        .withBooks([...batchToUpdate.books, book])
        .withId(batchToUpdate.id)
        .build()

    return pureReplace(bookBatches, updatedBatch, batchToUpdate.id)
}

export {hasNoAvailableBatches, addBookToNewBatch, addBookToAvailableBatch}