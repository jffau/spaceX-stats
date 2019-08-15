import React, { Component } from 'react';
import { JellyfishSpinner } from 'react-spinners-kit';
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
      <div
        style={{
          textAlign: 'center',
          margin: '40% auto',
          display: 'flex'
        }}
      >
        <h1 className="text-center" style={{ flex: '2' }}>
          {' '}
          Getting{' '}
          <span role="img" aria-label="rocket">
            {' '}
            🚀
          </span>{' '}
          stats
        </h1>
        <div style={{ flex: '1', marginTop: '-80px' }}>
          <JellyfishSpinner size={220} color="#FFFFFF" />
        </div>
      </div>
    ) : (
      <div>
        <NextLaunch launches={launches} />
        <LaunchesFilter />
        <div className="row">
          <MissionKey className="col-md-6 mx-5" />
          <h5 className="my-5 text-right col-md-6">
            {' '}
            {filteredLaunches.length} Launches
          </h5>
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
