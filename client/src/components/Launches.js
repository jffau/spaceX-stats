import React, { Component } from 'react';
import { Context } from '../context';

import NextLaunch from './NextLaunch';
import LaunchesFilter from './LaunchesFilter';
import MissionKey from './MissionKey';
import LaunchItem from './LaunchItem';

export class Launches extends Component {
  static contextType = Context;
  render() {
    let { launches, loading, filteredLaunches } = this.context;
    return loading ? (
      <h1>Loading ...</h1>
    ) : (
      <div>
        <NextLaunch launches={launches} />
        <h1> Launch Stats </h1>
        <LaunchesFilter />
        <MissionKey />
        {filteredLaunches.map(launch => (
          <LaunchItem key={launch.flight_number} launch={launch} />
        ))}
      </div>
    );
  }
}

export default Launches;
