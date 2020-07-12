import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import Pet from './bus/pet';

import { client } from './init/client';

const App = () => (
    <ApolloProvider client={client}>
        <Pet />
    </ApolloProvider>
)

export default App;