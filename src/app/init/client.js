import ApolloClient from 'apollo-boost';

// server with graphql
const uri = 'https://funded-pet-library.moonhighway.com/';

export const client = new ApolloClient({
    uri
});