import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { client } from './graphql/config'
import Header from './components/Header'
import Main from './components/Main'

const App = () => {
  return (
    <ApolloProvider client={client}>
        <Header />
        <Main />
    </ApolloProvider>
  )
}

export default App
