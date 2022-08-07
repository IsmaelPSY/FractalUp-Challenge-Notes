import {ApolloServer} from 'apollo-server';
import { resolvers}   from './resolvers.js';
import { typeDefs } from './typDefs.js';

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({url}) => {
  console.log(`Server runnging at ${url}`)
})