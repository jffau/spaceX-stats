import React, { Component } from 'react';
import gql from 'graphql-tag';
import { client } from './App';
const Context = React.createContext();

class Provider extends Component {
  state = {
    launches: [],
    rocketNames: [],
    launchYears: [],
    filteredLaunches: [],
    loading: true,
    // defaults for filter:
    show: 'all',
    success: 'all',
    rocketName: 'all',
    launchedYear: 'all',
    upcomingOnly: false,
    hasImages: false,
    hasVideos: false
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
        const uniqueRockets = new Set(rocketNames);
        rocketNames = [...uniqueRockets];

        let launchYears = [];
        response.data.launches.map(launch => {
          launchYears.push(launch.launch_year);
        });
        const uniqueYears = new Set(launchYears);
        launchYears = [...uniqueYears];

        console.log(launchYears);
        this.setState({
          launches: response.data.launches,
          loading: false,
          rocketNames: rocketNames,
          launchYears: launchYears
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
