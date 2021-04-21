import {SINGLE_BOOK_PRICE} from "./constants"

const _getDiscount = (booksVolume) => {
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

const _price = (cost, totalBooks) => {
    return cost - _getDiscount(totalBooks)
}

export const BatchBuilder = value => ({
    withBooks: (books) => BatchBuilder({...value, books}),
    withId: (id) => BatchBuilder({...value, id}),
    build: () => {
        const smallestBatchPrice = _price(value.books.length * SINGLE_BOOK_PRICE, value.books.length)
        const biggestBatchPrice = _price((value.books.length + 1) * SINGLE_BOOK_PRICE, value.books.length + 1)
        return {
            id: value.id,
            books: value.books,
            smallestBatchPrice,
            biggestBatchPrice,
            applyDiscount: (cost) => _price(cost, value.books.length)
        }
    },
});

