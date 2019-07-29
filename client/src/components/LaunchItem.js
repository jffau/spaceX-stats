import React from 'react';
import classNames from 'classnames';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

export default function LaunchItem({
  launch: { flight_number, mission_name, launch_date_local, launch_success },
  children
}) {
  return (
    <div className="card card-body my-3">
      <div className="row">{children}</div>
      <div className="row">
        <div className="col-md-9">
          <Link to={`/launch/${flight_number}`} style={{ color: 'inherit' }}>
            <h4>
              Mission:{' '}
              <span
                className={classNames({
                  'text-success': launch_success,
                  'text-danger': launch_success === false,
                  'text-secondary': launch_success === null
                })}
              >
                {mission_name}
              </span>
            </h4>
          </Link>
          <p>
            Launch Date:{' '}
            <Moment format="YYYY-MM-DD HH:mm">{launch_date_local}</Moment>
          </p>
        </div>
        <div className="col-md-3">
          <Link
            to={`/launch/${flight_number}`}
            className="btn btn-secondary my-4"
          >
            Launch Details
          </Link>
        </div>
      </div>
    </div>
  );
}
