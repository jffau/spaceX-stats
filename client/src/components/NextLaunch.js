import React, { Component } from 'react';
import Countdown from 'react-countdown-now';
import { CLIENT_RENEG_WINDOW } from 'tls';

const Launched = () => <span> 🚨 Mission Launched! 🚀🚨 </span>;

const renderer = ({ days, hours, minutes, seconds, completed, children }) => {
  if (completed) {
    return <Launched />;
  } else {
    return (
      <div>
        <h4> Upcoming Mission: </h4>
        {children}
        <span>
          {days} Days : {hours} Hours:{minutes} Minutes:{seconds} Seconds
        </span>
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
      <Countdown
        date={this.state.nextLaunch.launch_date_local}
        renderer={renderer}
      >
        <h1>Hello</h1>
      </Countdown>
    );
  }
}
