import {BookBatch} from "./book-batch"
import {BookBatches} from "./book-batches"

export class Basket {

    constructor() {
        this.bookBatches = new BookBatches()
    }

    add(book) {
        const availableBatches = this.bookBatches.getAvailableBatchesFor(book)
        if (availableBatches.length === 0) {
            this.bookBatches.set([...this.bookBatches.get(), new BookBatch(this.bookBatches.get().length, [book])])
            return this
        }
        this.bookBatches.add(book)
        return this
    }

    price() {
        return this.bookBatches.getPrice()
    }
}

