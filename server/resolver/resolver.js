const books = [{
    id: 1,
    name: "forex",
    genre: "Adventure",
    authorId: 1
},
{
    id: 2,
    name: "how to be rich",
    genre: "Knowledge",
    authorId: 1
},
{
    id: 3,
    name: "Blockchain 101",
    genre: "Knowledge",
    authorId: 3
}];

const authors = [
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
const resolvers = {
    // QUERY
    Query: {
        books: () => books,
        book: (parent, args) => books.find(book => book.id == args.id),
        authors: () => authors
    },
    Book: {
        author: (parent) => authors.find(author => author.id == parent.authorId)
    },
    Author: {
        books: (parent) => books.filter(book => book.authorId == parent.id)
    }
}

module.exports = resolvers