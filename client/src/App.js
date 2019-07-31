import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Provider } from './context';
import Launches from './components/Launches';
import Launch from './components/Launch';
import './App.css';
import logo from './logo.svg';

const client = new ApolloClient({
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Provider>
        <Router>
          <div className="container">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                style={{ display: 'block', margin: 'auto' }}
              />
            </Link>
            <Route exact path="/" component={Launches} />
            <Route exact path="/launch/:flight_number" component={Launch} />
          </div>
        </Router>
      </Provider>
    </ApolloProvider>
  );
}

export default App;
