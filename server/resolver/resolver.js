const books = [{
    id: 1,
    name: "forex",
    genre: "Adventure"
}]
const resolvers = {
    // QUERY
    Query: {
        books: () => books,
        book: (parent, args) => books.find(book => book.id == args.id),
        authors: () => [
            {
                id: 1,
                name: "Nam Cao",
                age: 127
            },
            {
                id: 2,
                name: "Ngo Tat To",
                age: 120
            },
            {
                id: 3,
                name: "Vu Trong Phung",
                age: 100
            }
        ]
    },
}

module.exports = resolvers