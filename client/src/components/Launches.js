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
      <div className="mt-5">
        <h1 className="text-center">
          {' '}
          Getting{' '}
          <span role="img" aria-label="rocket">
            🚀
          </span>{' '}
          stats ...
        </h1>
      </div>
    ) : (
      <div>
        <NextLaunch launches={launches} />
        <h1> Launch Stats </h1>
        <LaunchesFilter />
        <div className="row">
          <MissionKey className="col-md-6 mx-5" />
        </div>

        {filteredLaunches.length === 0 ? (
          <h5>Sorry, no launches were found with your search criteria...</h5>
        ) : (
          filteredLaunches.map(launch => (
            <LaunchItem key={launch.flight_number} launch={launch} />
          ))
        )}
      </div>
    );
  }
}

export default Launches;
