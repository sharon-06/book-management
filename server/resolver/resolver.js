const resolvers = {
	// QUERY
	Query: {
		books: ()=>[
            {
                id: 1,
                name: "forex",
                genre: "Adventure"
            }
        ]
	},
}

module.exports = resolvers