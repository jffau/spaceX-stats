import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import { Context } from '../context';

import MissionKey from './MissionKey';
import LaunchItem from './LaunchItem';
import NextLaunch from './NextLaunch';
const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

export class Launches extends Component {
  static contextType = Context;
  render() {
    let { launches, loading } = this.context;
    console.log(this.context, launches);
    return (
      <>
        <Query query={LAUNCHES_QUERY}>
          {({ data, loading, error }) => {
            if (loading) {
              return <h1>Loading ...</h1>;
            }
            if (error) {
              console.log(error);
            }

            return (
              <>
                <NextLaunch launches={data.launches} />
                {/* <h1 className="display-4 my-3"> Launch Stats</h1> */}
                <MissionKey />
                {data.launches.map(launch => (
                  <LaunchItem key={launch.flight_number} launch={launch} />
                ))}
              </>
            );
          }}
        </Query>
      </>
    );
  }
}

export default Launches;
