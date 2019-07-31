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
          filteredLaunches: response.data.launches,
          loading: false,
          rocketNames: rocketNames,
          launchYears: launchYears
        });
      })
      .catch(error => console.log(error));
  };

  handleChange = e => {
    const target = e.target;
    const type = target.type;
    const value = type === 'checkbox' ? target.checked : target.value;
    const name = e.target.name;
    console.log(`type: ${type} val: ${value} name: ${name}`);

    this.setState(
      {
        [name]: value
      },
      this.filterLaunches
    );
  };

  filterLaunches = () => {
    let {
      launches,
      rocketNames,
      launchYears,
      filteredLaunches,
      success,
      rocketName,
      launchedYear,
      upcomingOnly,
      hasImages,
      hasVideos
    } = this.state;

    let tempLaunches = [...launches];

    // filter by success
    if (success !== 'all') {
      if (success === 'success') {
        tempLaunches = tempLaunches.filter(
          launch => launch.launch_success === true
        );
      }
      if (success === 'fail') {
        tempLaunches = tempLaunches.filter(
          launch => launch.launch_success === false
        );
      }
      if (success === 'unknown') {
        tempLaunches = tempLaunches.filter(
          launch => launch.launch_success === null
        );
      }
    }

    //filter by upcomingOnly
    if (upcomingOnly === true) {
      tempLaunches = tempLaunches.filter(launch => launch.upcoming === true);
    }
    this.setState({ filteredLaunches: tempLaunches });
  };

  componentDidMount() {
    this.getLaunches();
  }

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

const Consumer = Context.Consumer;
export { Provider, Consumer, Context };
