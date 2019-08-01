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
    <div className="filter-container card card-body my-3">
      <form className="filter-form">
        <div className="form-group">
          {/* Selects: */}
          <div className="row">
            <div className="col-md-3 col-sm-10">
              {/* Success */}
              <label htmlFor="success" className="text-white">
                Launch Success:{' '}
              </label>
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
          </div>
          {/* End Success */}
          {/* Toggles: */}
          <div className="row mt-5">
            {/* Upcoming: */}

            <div className="custom-control custom-switch mx-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="upcomingSwitch"
                name="upcomingOnly"
                checked={upcomingOnly}
                onChange={handleChange}
              />
              <label
                className="custom-control-label text-white "
                htmlFor="upcomingSwitch"
              >
                Upcoming Launches Only
              </label>
            </div>
            {/* End Upcoming */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default LaunchesFilter;
