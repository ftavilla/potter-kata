export const SINGLE_BOOK_PRICE = 8

const getDiscount = (booksVolume) => {
    if (booksVolume === 0) return 0
    const offers = {
        1: 0,
        2: 5,
        3: 10,
        4: 20,
        5: 25,
    }
    return (booksVolume * SINGLE_BOOK_PRICE / 100) * offers[booksVolume]
}

export class BookBatch {
    constructor(id, books) {
        this.id = id
        this.books = books
        this.smallestBatchPrice = this.price(this.books.length * SINGLE_BOOK_PRICE, this.books.length)
        this.biggestBatchPrice = this.price((this.books.length + 1) * SINGLE_BOOK_PRICE, this.books.length + 1)
    }

    price(cost, totalBooks) {
        return cost - getDiscount(totalBooks)
    }
}