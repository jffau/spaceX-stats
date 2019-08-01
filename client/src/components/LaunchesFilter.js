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
    handleChange,
    filteredLaunches
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
            {/* hasImages */}
            <div className="custom-control custom-switch mx-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="imagesSwitch"
                name="hasImages"
                checked={hasImages}
                onChange={handleChange}
              />
              <label
                className="custom-control-label text-white "
                htmlFor="imagesSwitch"
              >
                Has Images
              </label>
            </div>
            {/* endImages */}
            {/* hasVideos */}
            <div className="custom-control custom-switch mx-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="videosSwitch"
                name="hasVideos"
                checked={hasVideos}
                onChange={handleChange}
              />
              <label
                className="custom-control-label text-white "
                htmlFor="videosSwitch"
              >
                Has Video
              </label>
            </div>
            {/* End Videos */}
            <h5 className=" text-right col-md-4 text-white">
              {' '}
              {filteredLaunches.length} Launches
            </h5>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LaunchesFilter;
