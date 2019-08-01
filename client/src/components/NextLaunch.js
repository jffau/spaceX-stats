import React, { Component } from 'react';
import Countdown from 'react-countdown-now';
import LaunchItem from './LaunchItem';

const Launched = () => <span> 🚨 Mission Launched! 🚀🚨 </span>;

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Launched />;
  } else {
    return (
      <div className="col-md-9">
        <h4 className="text-primary">Next Launch:</h4>
        <span className="text-primary">
          In {days} Days : {hours} Hours : {minutes} Minutes : {seconds} Seconds
        </span>
        <hr />
      </div>
    );
  }
};
export default class NextLaunch extends Component {
  state = {
    launches: this.props.launches,
    nextLaunch: {
      launch_date_local: ''
    }
  };

  componentDidMount() {
    const nextLaunch = this.findNext(this.props.launches);
    this.setState({ nextLaunch });
  }

  findNext = launches => {
    const now = new Date();

    const soonest = launches
      .filter(launch => {
        const launchDate = Date.parse(launch.launch_date_local);
        return launchDate - now > 0;
      })
      .sort((a, b) => {
        return (
          Date.parse(a.launch_date_local) - Date.parse(b.launch_date_local)
        );
      })[0];

    return soonest;
  };

  render() {
    return (
      <div className="mt-5">
        <LaunchItem launch={this.state.nextLaunch}>
          <Countdown
            date={this.state.nextLaunch.launch_date_local}
            renderer={renderer}
          />
        </LaunchItem>
      </div>
    );
  }
}
