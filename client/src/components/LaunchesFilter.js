import React, { useContext } from 'react';
import { Context } from '../context';

const LaunchesFilter = () => {
  const context = useContext(Context);
  const {
    success,
    rocketName,
    rocketNames,
    launchedYear,
    launchYears,
    upcomingOnly,
    hasImages,
    hasVideos,
    handleChange
  } = context;
  return (
    <div className="filter-container card card-body my-5">
      <h5 className="text-white">Filter Launches</h5>
      <form className="filter-form">
        <div className="form-group">
          {/* Selects: */}
          <div className="row">
            <div className="form-select col-sm-10 my-2">
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
            {/* End Success */}
            {/* RocketName */}
            <div className="form-select col-sm-10 my-2">
              <label htmlFor="rocketName" className="text-white">
                Rocket Type:{' '}
              </label>
              <select
                name="rocketName"
                id="rocketName"
                value={rocketName}
                className="form-control"
                onChange={handleChange}
              >
                <option value={'all'}>All</option>
                {rocketNames.map((name, index) => {
                  return (
                    <option value={name} key={index}>
                      {name}
                    </option>
                  );
                })}
              </select>
            </div>
            {/* End RocketName */}
            {/* Launch Year */}
            <div className="form-select col-sm-10 my-2">
              <label htmlFor="launchedYear" className="text-white">
                Launch Year:{' '}
              </label>
              <select
                name="launchedYear"
                id="launchedYear"
                value={launchedYear}
                className="form-control"
                onChange={handleChange}
              >
                <option value={'all'}>All</option>
                {launchYears.map((name, index) => {
                  return (
                    <option value={name} key={index}>
                      {name}
                    </option>
                  );
                })}
              </select>
            </div>

            {/* End Launch Year */}
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
                Upcoming Launches
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
          </div>
        </div>
      </form>
    </div>
  );
};

export default LaunchesFilter;
