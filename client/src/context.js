import React, { Component } from 'react';
import gql from 'graphql-tag';
import { client } from './App';
const Context = React.createContext();

class Provider extends Component {
  state = {
    launches: [],
    filteredLaunches: [],
    loading: true,
    rocketNames: [],
    // defaults for filter:
    show: 'all',
    success: 'all',
    images: false,
    videos: false
  };
  getLaunches = () => {
    client
      .query({
        query: gql`
          query LaunchesQuery {
            launches {
              flight_number
              mission_name
              launch_year
              launch_date_local
              launch_success
              upcoming
              rocket {
                rocket_name
              }
            }
          }
        `
      })
      .then(response => {
        //   getting unique rocket names
        let rocketNames = [];

        response.data.launches.map(launch => {
          rocketNames.push(launch.rocket.rocket_name);
        });

        const uniqueSet = new Set(rocketNames);
        rocketNames = [...uniqueSet];
        console.log(rocketNames);
        this.setState({
          launches: response.data.launches,
          loading: false,
          rocketNames: rocketNames
        });
      })
      .catch(error => console.log(error));
  };

  filterLaunches = () => {};

  componentDidMount() {
    this.getLaunches();
  }

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

const Consumer = Context.Consumer;
export { Provider, Consumer, Context };
