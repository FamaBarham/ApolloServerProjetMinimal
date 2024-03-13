import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';
import { resolvers } from './resolvers.js';
import { ProduitsDataSource } from './data_sources/produits.js';
// we must convert the file Buffer to a UTF-8 string
const typeDefs = readFileSync('schema.graphql', 'utf8');
const server = new ApolloServer({
    typeDefs,
    resolvers
});
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async ({ req, res }) => {
        return {
            dataSources: {
                produitsAPI: new ProduitsDataSource(),
            },
        };
    }
});
console.log(`🚀  Server ready at: ${url}`);
