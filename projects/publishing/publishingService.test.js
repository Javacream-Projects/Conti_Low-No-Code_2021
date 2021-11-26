let publishingService = require('./publishingService')

describe("publishingService", () => {
    test('book with isbn 1-10-12-42 is found', async () => {
        let book = await publishingService.findBookByIsbn('1-10-12-42')
        expect(book.title).toBe('Test')
    }) 
    test('publisher with id 1 is found', async () => {
        let publisher = await publishingService.findPublisherById(1)
        expect(publisher.publisherName).toBe('Publisher1')
    }) 
})
