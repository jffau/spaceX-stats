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
        <div className="row">
          <MissionKey className="col-md-6 mx-5" />
          <h5 className="my-5 text-right col-md-6">
            {' '}
            {filteredLaunches.length} Launches
          </h5>
        </div>
        {filteredLaunches.map(launch => (
          <LaunchItem key={launch.flight_number} launch={launch} />
        ))}
      </div>
    );
  }
}

export default Launches;
