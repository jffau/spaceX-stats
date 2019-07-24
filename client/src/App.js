import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Launches from './components/Launches';
import './App.css';
import logo from './logo.svg';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <header className="App-header">
          <img src={logo} style={{ display: 'block', margin: 'auto' }} />
        </header>
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;
