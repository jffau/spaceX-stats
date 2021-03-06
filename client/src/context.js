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
              links {
                youtube_id
                flickr_images
              }
            }
          }
        `
      })
      .then(response => {
        //   getting unique rocket names
        let rocketNames = [];
        let launchYears = [];
        const { launches } = response.data;
        launches.map(launch => {
          return (
            rocketNames.push(launch.rocket.rocket_name),
            launchYears.push(launch.launch_year)
          );
        });
        const uniqueRockets = new Set(rocketNames);
        rocketNames = [...uniqueRockets];

        const uniqueYears = new Set(launchYears);
        launchYears = [...uniqueYears];

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
    // filter by rocketNames
    if (rocketName !== 'all') {
      tempLaunches = tempLaunches.filter(
        launch => launch.rocket.rocket_name === rocketName
      );
    }
    // filter by launchYear
    if (launchedYear !== 'all') {
      tempLaunches = tempLaunches.filter(
        launch => launch.launch_year === launchedYear
      );
    }
    //filter by upcomingOnly
    if (upcomingOnly === true) {
      tempLaunches = tempLaunches.filter(launch => launch.upcoming === true);
    }

    tempLaunches = hasImages
      ? (tempLaunches = tempLaunches.filter(
          launch => launch.links.flickr_images.length > 0
        ))
      : tempLaunches;

    // filter by videosOnly
    tempLaunches = hasVideos
      ? (tempLaunches = tempLaunches.filter(launch => launch.links.youtube_id))
      : tempLaunches;

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
