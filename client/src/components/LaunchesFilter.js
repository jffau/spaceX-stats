import React, { useContext } from 'react';
import { Context } from '../context';

const LaunchesFilter = () => {
  const context = useContext(Context);
  const {
    success,
    rocketName,
    launchedYear,
    upcomingOnly,
    hasImages,
    hasVideos,
    handleChange
  } = context;
  return (
    <div className="filter-container">
      <form>
        <div className="form-group">
          {/* Success */}
          <label htmlFor="success">Launch Success: </label>
          <select
            name="success"
            id="success"
            value={success}
            className="form-control"
            onChange={handleChange}
          >
            <option value={'all'}>All</option>
            <option value={'success'}>Success</option>
            <option value={'fail'}>Fail</option>
            <option value={'unknown'}>Unknown</option>
          </select>
          {/* End Success */}
          {/* Upcoming: */}

          <div className="custom-control custom-switch my-3">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customSwitch1"
              name="upcomingOnly"
              checked={upcomingOnly}
              onChange={handleChange}
            />
            <label className="custom-control-label" htmlFor="customSwitch1">
              Upcoming Launches Only
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LaunchesFilter;
