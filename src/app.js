const { ApolloServer } = require('apollo-server');
const { resolvers} = require('./resolvers.js');
const { typeDefs } = require('./typDefs.js');

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({url}) => {
  console.log(`Server runnging at ${url}`)
})