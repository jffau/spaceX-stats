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
        </div>
      </form>
    </div>
  );
};

export default LaunchesFilter;
