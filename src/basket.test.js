import {Basket} from "./basket"

describe('Prices', () => {
    it("should return 0 euros price for 0 book", () => {
        const basket = new Basket()

        const result = basket.price()

        expect(result).toBe(0)
    })

    it("should return 8 euros price for one book", () => {
        const basket = new Basket()
        basket.add("Harry Potter 1")

        const result = basket.price()

        expect(result).toBe(8)
    })

    it("should return 16 euros price for two same books", () => {
        const basket = new Basket()
        basket
            .add("Harry Potter 1")
            .add("Harry Potter 1")

        const result = basket.price()

        expect(result).toBe(16)
    })

    it("should return 24 euros price for three same books", () => {
        const basket = new Basket()
        basket
            .add("Harry Potter 1")
            .add("Harry Potter 1")
            .add("Harry Potter 1")

        const result = basket.price()

        expect(result).toBe(24)
    })

    it("should return 32 euros price for four same books", () => {
        const basket = new Basket()
        basket
            .add("Harry Potter 1")
            .add("Harry Potter 1")
            .add("Harry Potter 1")
            .add("Harry Potter 1")

        const result = basket.price()

        expect(result).toBe(32)
    })

    it("should return 40 euros price for five same books", () => {
        const basket = new Basket()
        basket
            .add("Harry Potter 1")
            .add("Harry Potter 1")
            .add("Harry Potter 1")
            .add("Harry Potter 1")
            .add("Harry Potter 1")

        const result = basket.price()

        expect(result).toBe(40)
    })

    it("should return 15.20 euros price for two different books", () => {
        const basket = new Basket()
        basket
            .add("Harry Potter 1")
            .add("Harry Potter 2")

        const result = basket.price()

        expect(result).toBe(15.20)
    })

    it("should return 21.60 euros price for three different books", () => {
        const basket = new Basket()
        basket
            .add("Harry Potter 1")
            .add("Harry Potter 2")
            .add("Harry Potter 3")

        const result = basket.price()

        expect(result).toBe(21.6)
    })

    it("should return 25.6 euros price for four different books", () => {
        const basket = new Basket()
        basket
            .add("Harry Potter 1")
            .add("Harry Potter 2")
            .add("Harry Potter 3")
            .add("Harry Potter 4")

        const result = basket.price()

        expect(result).toBe(25.6)
    })

    it("should return 30 euros price for five different books", () => {
        const basket = new Basket()
        basket
            .add("Harry Potter 1")
            .add("Harry Potter 2")
            .add("Harry Potter 3")
            .add("Harry Potter 4")
            .add("Harry Potter 5")

        const result = basket.price()

        expect(result).toBe(30)
    })

    it("should return 23.2 euros price for 2 same books and a different one", () => {
        const basket = new Basket()
        basket
            .add("Harry Potter 1")
            .add("Harry Potter 1")
            .add("Harry Potter 3")

        const result = basket.price()

        expect(result).toBe(23.2)
    })

    it("should return 29.60 euros price for 2 same books and 2 different one", () => {
        const basket = new Basket()
        basket
            .add("Harry Potter 1")
            .add("Harry Potter 1")
            .add("Harry Potter 3")
            .add("Harry Potter 4")

        const result = basket.price()

        expect(result).toBe(29.60)
    })

    it("should return 37.6 euros price for 3 same books and 2 different one", () => {
        const basket = new Basket()
        basket
            .add("Harry Potter 1")
            .add("Harry Potter 1")
            .add("Harry Potter 1")
            .add("Harry Potter 2")
            .add("Harry Potter 5")

        const result = basket.price()

        expect(result).toBe(37.6)
    })

    it("should calculate best combination price and return 51.20 euros", () => {
        const basket = new Basket()
        basket
            .add("Harry Potter 1")
            .add("Harry Potter 1")
            .add("Harry Potter 2")
            .add("Harry Potter 2")
            .add("Harry Potter 3")
            .add("Harry Potter 3")
            .add("Harry Potter 4")
            .add("Harry Potter 5")

        const result = basket.price()

        expect(result).toBe(51.20)
    })
})